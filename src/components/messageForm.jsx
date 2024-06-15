/* eslint-disable react/prop-types */
import {
  PlusIcon,
  PaperAirplaneIcon,
  FaceSmileIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

import { useForm } from "react-hook-form";
import { useStore } from "../appStore";

function MessageForm({ sendMessage }) {
  const { currentUser } = useStore();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  function send(formData) {
    const sentMessage = {
      id: 99,
      text: formData.message,
      userId: currentUser.id,
      createdAt: new Date().toLocaleTimeString(),
    };
    sendMessage(sentMessage);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(send)}
      className="h-24 bg-slate-700 w-full px-6 flex items-center justify-between gap-3"
    >
      <PlusIcon className="w-6 h-6 text-slate-300 cursor-pointer" />
      <div className="flex-1 border border-slate-500 rounded-2xl p-1 flex items-center justify-between">
        <input
          {...register("message")}
          type="text"
          placeholder="Type a message..."
          className="w-full bg-slate-700 text-slate-300 rounded-full outline-none border-none px-2"
        />
        <div className="flex items-center gap-3">
          <FaceSmileIcon className="w-6 h-6 text-slate-300 cursor-pointer" />
          <DocumentIcon className="w-6 h-6 text-slate-300 cursor-pointer" />
        </div>
      </div>
      <div>
        <button className="hover:cursor-pointer hover:bg-[#111B21] p-3 rounded-full transition-all bg-green-800 flex items-center justify-center">
          <PaperAirplaneIcon className="w-6 h-6 text-slate-300 cursor-pointer" />
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
