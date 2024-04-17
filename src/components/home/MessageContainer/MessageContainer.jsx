import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <>
      <div className="md:min-w-[450px] flex flex-col">
        {!noChatSelected && (
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To:</span>
              <span className="text-gray-900 font-bold ml-2">John doe</span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
        {noChatSelected && <NoChatSelected />}
      </div>
    </>
  );
};

export default MessageContainer;
