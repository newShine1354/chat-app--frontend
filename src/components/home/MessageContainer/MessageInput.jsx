import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useSendMessage from "../../../hooks/useSendMessage";

const MessageInput = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      await sendMessage(currentMessage);
    }
    setCurrentMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <FiSend className="" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
