/* eslint-disable react/prop-types */

import { useStore } from "../appStore";

function Message({ messageText, createdAt , userId }) {
    const { currentUser } = useStore();
  return (
    // <div className={`text-slate-100 p-3 ${bg}  w-fit ${selfEnd} rounded-xl`}>
    //   {messageText}
    // </div>

    <div
      className={`flex justify-end p-4   ${currentUser.id === userId ? "self-end" : "self-start"}  relative message-sent`}
    >
      <div
        className={`text-slate-100 p-3 rounded-lg max-w-xs shadow relative ${currentUser.id === userId ? "bg-green-800" : "bg-slate-800"}`}
      >
        <p>{messageText}</p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">{createdAt}</span>
          {currentUser.id === userId ? <Svg /> : null}
        </div>
      </div>
    </div>
  );
}


function Svg() {
    return (
        <svg
            className="w-4 h-4 text-blue-500 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
            />
          </svg>
    )
}

export default Message;
