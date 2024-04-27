import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../utils/constants";
import { toast } from "react-hot-toast";
import { useAtom } from "jotai";
import { Conversations, User } from "../components/Store";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useAtom(Conversations);
  const [user, setUser] = useAtom(User);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${server}/user/sidebar/${user._id}`);
        setConversations(res?.data?.filteredUsers);
      } catch (error) {
        toast.error(error.message || "Not able to fetch users");
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useConversation;
