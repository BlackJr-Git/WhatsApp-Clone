import { Chat } from "./";
import data from "../data/data";

function Chats() {
  return (
    <div className="bg-[#111B21] w-[30rem] h-full border-r border-r-slate-800">
      <div className="h-24 flex items-center justify-center bg-slate-700">
        <h1 className="text-slate-300">CHATS</h1>
      </div>
      <div>
        {data.map((message) => (
          <Chat key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default Chats;
