import axios from "axios";
import React, { useState } from "react";
import { server } from "../utils/constants";
import { User } from "../components/Store";
import { useAtom } from "jotai";
import toast from "react-hot-toast";
import { strongPassword } from "../utils/regex";
import { useCookies } from "react-cookie";

const useLogin = ({ username, password }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useAtom(User);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const login = async () => {
    setLoading(true);
    try {
      if (username.length < 4) {
        toast.error("Enter username of atleast 4 characters.");
        return;
      }
      if (!strongPassword.test(password)) {
        toast.error(
          "Your password must contain letters, numbers and special character."
        );
        return;
      }
      const res = await axios.post(`${server}/auth/login`, {
        username,
        password,
      });
      if (res.error) {
        throw new Error(res.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(res?.data?.userData));
      setUser(res?.data?.userData);
      // console.log(res);
      // setCookie("jwt", res?.data?.refreshToken);
    } catch (error) {
      toast.error(error?.message || "Please register first.");
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
