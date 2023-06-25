import "./index.css";

function index({ data, messageLiked }) {
  const logoIdList = data?.username?.split(" ");
  let logo;
  if (logoIdList?.length > 1) {
    logo = logoIdList[0][0] + logoIdList[1][0];
  } else {
    logo = logoIdList[0][0];
  }

  const LikePressed = () => {
    messageLiked(data.id);
  };

  return (
    <div className="messageContainer">
      <div className="messageView">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="chatProfile">{logo.toUpperCase()}</span>
          <h5 className="username">
            {data.username}
            <span className="chat-time"> {data.time}</span>
          </h5>
        </div>
        <div className="messageBox">
          <p className="messageContent"> {data.message}</p>
        </div>
        <div className="like-btn">
          <span className="likeCount">{data.likes}</span>
          <button onClick={LikePressed} className="like-btn" type="">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
