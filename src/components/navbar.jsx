import {
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import { UserAvatar } from "./";
import { useStore } from "../appStore";

function Navbar() {
  const { currentUser } = useStore();
  return (
    <div className="bg-[#1F2C33] w-24 h-full border-r border-r-slate-800 flex flex-col items-center justify-between py-6">
      <div className="hover:cursor-pointer hover:bg-[#111B21] p-2 rounded-full transition-all ">
        <ChatBubbleBottomCenterTextIcon className="w-10 h-10 text-slate-300" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {" "}
        <CogIcon className="w-10 h-10 text-slate-300" />
        <UserAvatar avatar={currentUser.avatar} />
      </div>
    </div>
  );
}

export default Navbar;
