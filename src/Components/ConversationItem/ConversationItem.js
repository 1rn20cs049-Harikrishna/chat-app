import "./index.css";

function ConversationItem({ chatitem }) {
  return (
    <div className="chat-item">
      <span className="individual-logo">{chatitem.profile}</span>
      <p className="">{chatitem.name}</p>
    </div>
  );
}

export default ConversationItem;
