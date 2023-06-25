import "./index.css";
import ConversationItem from "../ConversationItem/ConversationItem";

const ConversationsList = [
  { id: 1, profile: "#", name: "Poland Office" },
  { id: 2, profile: "#", name: "Introductions" },
  { id: 3, profile: "#", name: "India Office" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main">
        <span className="main-logo">RR</span>
        <div>
          <h1 className="name"> Rolande Raimondi</h1>
          <p className="about">Research Nurse</p>
        </div>
      </div>
      <div className="conversation-menu">
        <h2 className="conversation-menu-heading"> Conversations</h2>
        <span className="add-btn"> +</span>
      </div>
      {ConversationsList.map((chatitem) => (
        <ConversationItem key={chatitem.id} chatitem={chatitem} />
      ))}
    </div>
  );
};

export default Sidebar;
