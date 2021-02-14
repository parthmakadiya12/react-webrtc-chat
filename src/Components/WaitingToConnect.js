import styled from "styled-components";
import { Button } from "antd";
import { withRouter } from "react-router-dom";

function WaitingToConnect(props) {
  return (
    <>
      <ButtonStyled onClick={() => props.history.push("/")}>Home</ButtonStyled>
      Please send this url to a friend to start chatting.
      <CopyLink> {window.location.href}</CopyLink>
    </>
  );
}
const CopyLink = styled.div`
  color: rebeccapurple;
  font-family: helvetica;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const ButtonStyled = styled(Button)`
  width: max-content;
`;

export default withRouter(WaitingToConnect);
