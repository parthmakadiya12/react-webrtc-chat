import React, { Component } from "react";
import Peer from "peerjs";
import { Typography } from "antd";
import styled from "styled-components";

import { RenderChat } from "../Components/RenderChat";
import { ChatInput } from "../Components/ChatInput";
import { Spinner } from "../Components/Spin";
import WaitingToConnect from "../Components/WaitingToConnect";

import {
  initializePeerMethods,
  sendMessgae,
} from "../service/connectionServiceUtil";
import { Container, Card } from "../styles/styles";
import { media } from "../styles/media";
const { Title } = Typography;

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: new Peer(),
      my_id: "",
      peer_id: "",
      initialized: false,
      connected: false,
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
    } = this.state;
    if (!initialized) {
      return <Spinner />;
    }
    return (
      <ContainerStyled>
        <CardStyled>
          <Title level={3}>Chat WebRTC</Title>
          <p>
            Talking to User <b>{this.state.peer_id}</b>
          </p>
          {connected ? (
            <>
              <RenderChat chat={chat} />
              <ChatInput
                onChangeText={this.onChangeText}
                sendMessgae={() =>
                  sendMessgae(currentText, my_id, conn, chat, this.setValue)
                }
                currentText={currentText}
              />
            </>
          ) : (
            <WaitingToConnect />
          )}
        </CardStyled>
      </ContainerStyled>
    );
  }
}
const ContainerStyled = styled(Container)`
  justify-content: flex-start;
  height: 100%;
  width: inherit;
`;

const CardStyled = styled(Card)`
  width: 60%;
  height: 80%;
  margin: 30px;
  display: flex;
  flex-direction: column;
  ${media.small`
  min-width: 90%;
  width:90%;
            height: 90%;
          `};
`;
