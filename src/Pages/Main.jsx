import {
  ChatEngine,
  ChatEngineWrapper,
  ChatSocket,
  ChatFeed,
} from "react-chat-engine";

const Main = ({ username }) => {
  const projectID = "703b7099-b8db-44f7-a019-232aec84654a";
  const key = "123456";
  const chatID = 134684;

  return (
    <ChatEngine
      projectID={projectID}
      privateKey="db12383b-e4ef-4099-88ef-618c7808ac24"
      userName={username}
      userSecret={key}
    />
  );
};

export default Main;
