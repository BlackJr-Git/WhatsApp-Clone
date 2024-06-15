import { UserAvatar, Message, MessageForm } from "./";
import { useRef, useEffect } from "react";
import {
  PhoneIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { useStore } from "../appStore";

function Messages() {
  const { currentChat, updateChat } = useStore();
  // const [messages, setMessages] = useState(currentChat.messages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  function sendMessage(data) {
    // setMessages([...messages, data]);
    const newChat = {
      userName: currentChat.userName,
      userId: currentChat.userId,
      avatar: currentChat.avatar,
      messages: [...currentChat.messages, data],
    };
    updateChat(newChat);
  }

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="h-24 bg-slate-700 w-full flex items-center justify-between px-6">
        <div className="flex gap-3 items-center">
          <UserAvatar avatar={currentChat.avatar} />
          <p className="text-slate-300 font-semibold">{currentChat.userName}</p>
        </div>
        <div className="flex gap-3">
          <VideoCameraIcon className="w-6 h-6 text-slate-300" />
          <PhoneIcon className="w-6 h-6 text-slate-300" />
          <MagnifyingGlassIcon className="w-6 h-6 text-slate-300" />
        </div>
      </div>

      <div className=" bg-slate-600 w-full flex-1 px-3 py-6 flex flex-col overflow-y-scroll">
        {currentChat.messages.map((message) => (
          <Message
            key={message.id}
            messageText={message.text}
            userId={message.userId}
            createdAt={message.createdAt}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}

export default Messages;
