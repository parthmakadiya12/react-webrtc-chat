import React, { Component } from "react";
import Peer from "peerjs";
import { RenderChat } from "./RenderChat";
import { ChatInput } from "./ChatInput";
import { ConnectionPage } from "./ConnectionPage";
import { v4 as uuidv4 } from "uuid";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: new Peer(),
      my_id: "",
      peer_id: "",
      initialized: false,
      chat: [],
    };
  }

  componentWillMount() {
    this.state.peer.on("open", (id) => {
      console.log("My peer ID is: ", id);
      this.setState({
        my_id: id,
        initialized: true,
      });
    });

    this.state.peer.on("connection", (connection) => {
      console.log("someone connected");
      console.log(connection);

      this.setState(
        {
          conn: connection,
        },
        () => {
          this.state.conn.on("open", () => {
            this.setState({
              connected: true,
            });
          });

          this.state.conn.on("data", this.onReceiveData);
        }
      );
    });
  }

  componentWillUnmount() {
    this.state.peer.destroy();
  }

  connect = () => {
    const { peer_id } = this.state;
    const connection = this.state.peer.connect(peer_id);
    console.log("Connection is ", connection);
    this.setState(
      {
        conn: connection,
        currentText: "",
      },
      () => {
        this.state.conn.on("open", () => {
          this.setState({
            connected: true,
          });
        });
        this.state.conn.on("data", this.onReceiveData);
      }
    );
  };

  sendMessgae = () => {
    const { currentText } = this.state;
    const data = {
      text: currentText,
      id: uuidv4(),
      user: this.state.my_id,
    };
    this.state.conn.send(data);
    this.setState({
      chat: [...this.state.chat, data],
    });
  };

  onReceiveData = (data) => {
    console.log("Received", data);

    const chatObj = {
      text: data.text,
      id: data.id,
      user: data.user,
    };
    this.setState({
      chat: [...this.state.chat, chatObj],
    });
  };

  handleTextChange = (event) => {
    this.setState({
      peer_id: event.target.value,
    });
  };

  render = () => {
    if (this.state.initialized) {
      return (
        <div>
          <div>
            <span>{"Your PeerJS ID:"} </span>
            <strong>{this.state.my_id}</strong>
          </div>
          {this.state.connected ? (
            <>
              <ChatInput
                onChangeText={this.onChangeText}
                sendMessgae={this.sendMessgae}
                currentText={this.state.currentText}
              />
              <RenderChat chat={this.state.chat} />
            </>
          ) : (
            <ConnectionPage
              handleTextChange={this.handleTextChange}
              connect={this.connect}
            />
          )}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  onChangeText = (e) => {
    const { value } = e.target;
    this.setState({
      currentText: value,
    });
  };
}
