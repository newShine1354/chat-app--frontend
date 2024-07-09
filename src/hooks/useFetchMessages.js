import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../utils/constants";
import { Messages, SelectedConversation, User } from "../components/Store";
import { useCookies } from "react-cookie";

const useFetchMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useAtom(Messages);
  const [user, setUser] = useAtom(User);
  const [selectedConversation] = useAtom(SelectedConversation);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const fetchMessages = async () => {
    setLoading(true);


    
    try {
      const res = await axios.get(
        `${server}/message/${selectedConversation._id}`,
        {
          headers: {
            Authorization: cookies.jwt,
          },
        }
      );
      let allMessages = res?.data?.messages || [];
      setMessages(allMessages);
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (selectedConversation?._id) fetchMessages();
  }, [selectedConversation?._id]);

  return { loading, messages };
};

export default useFetchMessages;
