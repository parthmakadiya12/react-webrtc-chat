import { withRouter } from "react-router-dom";
import { Button, Typography } from "antd";
import { Container, Card } from "../styles/styles";
const { Title } = Typography;

function Home(props) {
  return (
    <Container>
      <Card>
        <Title level={3}>Let's Chat</Title>
        <Button type="primary" onClick={() => props.history.push("/chat")}>
          Create Room
        </Button>
      </Card>
    </Container>
  );
}

export default withRouter(Home);
