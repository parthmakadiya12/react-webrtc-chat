import { v4 as uuidv4 } from "uuid";

export const initializePeerMethods = (peer, setValue, onReceiveData, self) => {
  peer.on("open", (id) => {
    console.log("My peer ID is: ", id);
    setValue({
      my_id: id,
      initialized: true,
    });
  });

  peer.on("connection", (connection) => {
    console.log("someone connected");
    console.log(connection);
    setValue(
      {
        conn: connection,
      },
      () => {
        self.state.conn.on("open", () => {
          setValue({
            connected: true,
          });
        });
        self.state.conn.on("data", onReceiveData);
      }
    );
  });
};

export const connect = (peer_id, peer, setValue, onReceiveData) => {
  const connection = peer.connect(peer_id);
  console.log("Connection is ", connection);
  setValue(
    {
      conn: connection,
      currentText: "",
    },
    () => {
      connection.on("open", () => {
        setValue({
          connected: true,
        });
      });
      connection.on("data", onReceiveData);
    }
  );
};

export const sendMessgae = (currentText, my_id, conn, chat, setValue) => {
  const data = {
    text: currentText,
    id: uuidv4(),
    user: my_id,
  };
  conn.send(data);
  setValue({
    chat: [...chat, data],
    currentText: "",
  });
};
