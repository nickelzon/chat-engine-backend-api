import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="703b7099-b8db-44f7-a019-232aec84654a"
      userName="alnickelzonv"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
