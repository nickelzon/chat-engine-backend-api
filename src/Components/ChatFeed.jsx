import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import MyMessage from "./MyMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastmessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className={`read-receipts ${
              isMyMessage ? "mr-4 ml-0" : "mr-0 ml-16"
            }`}
          >
            Read Receipts
          </div>
        </div>
      );
    });
  };

  renderMessages();

  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}

      <div className="h-24" />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
