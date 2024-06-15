/* eslint-disable react/prop-types */

import { useStore } from "../appStore";
function Chat({ message }) {
  const { updateChat } = useStore();

  function update() {
    const newChat = {
      userName: message.userName,
      userId: message.userId,
      avatar: message.avatar,
      messages: [...message.messages],
    };
    updateChat(newChat);
  }

  const lastMessage = message.messages[message.messages.length - 1];

  return (
    <div
      className="flex items-center p-2 gap-3 hover:bg-[#21313b] hover:cursor-pointer"
      onClick={update}
    >
      <div className="hover:cursor-pointer hover:bg-[#111B21] p-2 rounded-full transition-all w-[20%]">
        <img
          className="rounded-full w-12 h-12"
          src={message.avatar}
          alt=""
        ></img>
      </div>
      <div className="w-[80%]">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-slate-50">{message.userName}</p>{" "}
          <p className="text-slate-400"> {message.messageTime}</p>
        </div>
        <p className="text-slate-400 line-clamp-1">{lastMessage.text}</p>
      </div>
    </div>
  );
}

export default Chat;
