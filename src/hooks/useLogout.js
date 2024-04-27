import axios from "axios";
import { useState } from "react";
import { server } from "../utils/constants";
import { User } from "../components/Store";
import { useAtom } from "jotai";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useAtom(User);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${server}/auth/logout`);
      if (res.error) {
        throw new Error(res.error);
      }
      localStorage.removeItem("chat-user");
      setUser(null);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
