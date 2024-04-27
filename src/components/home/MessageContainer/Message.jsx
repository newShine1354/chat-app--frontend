import React from "react";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { SelectedConversation, User } from "../../Store";

const Message = ({ message }) => {
  const [user, setUser] = useAtom(User);
  const [selectedConversation, setSelectedConversation] =
    useAtom(SelectedConversation);
  const fromMe = message.senderId === user._id;
  const profilePic = fromMe
    ? user?.profilePic
    : selectedConversation?.profilePic;
  return (
    <>
      <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white ${
            message.shouldShake ? "shake" : ""
          } ${fromMe ? "bg-blue-500" : ""}`}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs">
          {dayjs(message?.createdAt).format("HH:mm")}
        </div>
      </div>
    </>
  );
};

export default Message;
