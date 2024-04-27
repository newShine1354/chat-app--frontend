import { useAtom } from "jotai";
import React, { useState } from "react";
import { Messages, SelectedConversation, User } from "../components/Store";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../utils/constants";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useAtom(Messages);
  const [selectedConversation, setSelectedConversation] =
    useAtom(SelectedConversation);
  const [user] = useAtom(User);
  const sendMessage = async (currentMessage) => {
    setLoading(true);
    // console.log("user._id", user._id);
    try {
      const res = await axios.post(
        `${server}/message/send/${selectedConversation?._id}`,
        {
          message: currentMessage,
          senderId: user._id,
        }
      );
      // console.log("newMessage", res.data.newMessage);
      // console.log("newmessagessssss", messages);
      setMessages([...messages, res?.data?.newMessage]);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
