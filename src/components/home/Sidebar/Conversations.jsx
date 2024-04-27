import React from "react";
import Conversation from "./Conversation";
import useConversation from "../../../hooks/useConversation";
import { getRandomEmoji, funEmojis } from "../../../utils/imoji";

const Conversations = ({ onlineUsers }) => {
  const { loading, conversations } = useConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, i) => (
        <div className="" key={i}>
          <Conversation
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={i === funEmojis.length - 1}
            onlineUsers={onlineUsers}
          />
        </div>
      ))}
      {loading ? <span className=""></span> : null}
    </div>
  );
};

export default Conversations;
