import { useAtom } from "jotai";
import React from "react";
import { SelectedConversation } from "../../Store";

const Conversation = ({ conversation, lastIndex, emoji }) => {
  const [selectedConversation, setSelectedConversation] =
    useAtom(SelectedConversation);
  return (
    <>
      <div
        className={`flex gap-5 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer ${
          selectedConversation._id === conversation._id ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" className="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
