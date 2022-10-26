import { ChatEngineWrapper, ChatSocket, ChatFeed } from "react-chat-engine";

const Main = () => {
  const projectID = "703b7099-b8db-44f7-a019-232aec84654a";
  const chatID = 134684;
  const key = 123456;

  return (
    <ChatEngineWrapper>
      <ChatSocket
        projectID={projectID}
        chatID={chatID}
        chatAccessKey={key}
        senderUsername="Alita123"
      />

      <ChatFeed activeChat={chatID} />
    </ChatEngineWrapper>
  );
};

export default Main;
