import React, { Component } from "react";
import Peer from "peerjs";
import { RenderChat } from "../Components/RenderChat";
import { ChatInput } from "../Components/ChatInput";
import { ConnectionPage } from "../Components/ConnectionPage";
import {
  initializePeerMethods,
  connect,
  sendMessgae,
} from "../service/connectionServiceUtil";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: new Peer(),
      my_id: "",
      peer_id: "",
      initialized: false,
      chat: [],
      currentText: "",
    };
  }

  componentDidMount() {
    initializePeerMethods(
      this.state.peer,
      this.setValue,
      this.onReceiveData,
      this
    );
  }

  setValue = (data, callback) => {
    this.setState(data, callback);
  };

  onChangeText = (e) => {
    this.setState({ currentText: e.target.value });
  };

  onReceiveData = (data) => {
    this.setState({
      chat: [
        ...this.state.chat,
        {
          text: data.text,
          id: data.id,
          user: data.user,
        },
      ],
    });
  };

  handleTextChange = (event) => {
    this.setState({
      peer_id: event.target.value,
    });
  };

  render() {
    const {
      my_id,
      initialized,
      connected,
      currentText,
      conn,
      chat,
      peer_id,
      peer,
    } = this.state;
    if (!initialized) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <span>Your PeerJS ID </span>
          <strong>{my_id}</strong>
        </div>
        {connected ? (
          <>
            <ChatInput
              onChangeText={this.onChangeText}
              sendMessgae={() =>
                sendMessgae(currentText, my_id, conn, chat, this.setValue)
              }
              currentText={currentText}
            />
            <RenderChat chat={chat} />
          </>
        ) : (
          <ConnectionPage
            handleTextChange={this.handleTextChange}
            connect={() =>
              connect(peer_id, peer, this.setValue, this.onReceiveData)
            }
          />
        )}
      </div>
    );
  }
}
