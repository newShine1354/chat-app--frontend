import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import { SelectedConversation } from "../../Store";
import { useAtom } from "jotai";

const MessageContainer = () => {
  const [selectedChat, setSelectedChat] = useAtom(SelectedConversation);
  useEffect(() => {
    return () => {
      setSelectedChat("");
    };
  }, [setSelectedChat]);

  return (
    <>
      <div className="md:min-w-[450px] flex flex-col">
        {selectedChat && (
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To:</span>
              <span className="text-gray-900 font-bold ml-2">
                {selectedChat.fullName}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
        {!selectedChat && <NoChatSelected />}
      </div>
    </>
  );
};

export default MessageContainer;
