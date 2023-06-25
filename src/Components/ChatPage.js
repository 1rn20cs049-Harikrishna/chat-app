import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import "./index.css";
import EmojiPicker from "emoji-picker-react";
import ChatMsgeView from "./ChatMsgeView";
// import MentionList from "./MentionList/MentionList";

//Socket
// import { io } from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

const ChatMessages = [
  {
    id: 1,
    username: "Harikrishna R",
    message: "I'm Harikrishna , Full stack web developer(MERN)",
    time: "19:89",
    likes: 2,
  },
  {
    id: 2,
    username: "Vani SA",
    message: "Happy Birthday",
    time: "14:89",
    likes: 10,
  },
  {
    id: 3,
    username: "Idiot",
    message: "Life never gives you second chance",
    time: "19:89",
    likes: 5,
  },
];

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(ChatMessages);
  const [like, setLike] = useState(0);
  const [showPicker, setShowPicker] = useState(false);
  const [emoji, setEmoji] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef?.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const messageLiked = (id) => {
    let index = messages.findIndex((item) => item.id === id);
    messages[index].likes = messages[index].likes + 1;
    setLike(messages[index].likes);
  };

  const handleMessage = () => {
    //Checking the message length before proceeding
    if (message.length <= 0) {
      return;
    }

    const currentDate = new Date();
    const currentHour =
      currentDate.getHours() === 0 ? 12 : currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    const updateChatList = (prevMessages) => {
      const newMessage = {
        id: prevMessages[prevMessages.length - 1]?.id + 1,
        username: user_list[Math.floor(Math.random() * user_list?.length)],
        message,
        time: `${currentHour}:${currentMinute}`,
        likes: 0,
      };
      return newMessage;
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      updateChatList(prevMessages),
    ]);
    setMessage("");
  };

  const handleEmojiClick = (emojiObject) => {
    setEmoji(emojiObject.emoji);
    setShowPicker(false);
    console.log(emoji);
  };

  return (
    <div className="chat-page">
      <ChatHeader />

      <div className="MessagePageBody">
        {messages.map((data) => (
          <ChatMsgeView key={data.id} data={data} messageLiked={messageLiked} />
        ))}
        <div ref={bottomRef}> </div>
      </div>

      <div className="ChatInput">
        {/* <MentionList /> */}
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type Message"
          value={message}
        />

        <div style={{ display: "flex" }}>
          {!showPicker && (
            <img
              className="emoji-icon"
              src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
              alt="emoji-picker"
              onClick={() => setShowPicker((val) => !val)}
            />
          )}
          {showPicker && (
            <EmojiPicker
              position="below"
              pickerStyle={{ width: "10%" }}
              onEmojiClick={handleEmojiClick}
            />
          )}

          <button type="submit" className="send-btn" onClick={handleMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
