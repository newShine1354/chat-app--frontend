import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useFetchMessages from "../../../hooks/useFetchMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import useListenMessages from "../../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useFetchMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  

  return (
    <>
      <div className="px-4 flex-1 overflow-auto">
        {!loading && messages.length === 0 && (
          <div className="text-gray-200 text-center">
            Send a message to start the conversation.
          </div>
        )}
        {loading &&
          messages.length !== 0 &&
          [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
        {!loading &&
          messages &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Messages;
