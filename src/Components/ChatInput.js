import React from "react";
import { Input, Button } from "antd";
import styled from "styled-components";

export function ChatInput({ onChangeText, sendMessgae, currentText }) {
  return (
    <Row>
      <InputStyled
        type="text"
        onChange={onChangeText}
        onKeyDown={(e) => e.key === "Enter" && sendMessgae()}
        value={currentText}
      />
      <Button onClick={sendMessgae}>send</Button>
    </Row>
  );
}
const InputStyled = styled(Input)`
  width: 90%;
  &:focus {
    box-shadow: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
