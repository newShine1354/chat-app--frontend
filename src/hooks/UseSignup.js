import { useState } from "react";
import { toast } from "react-hot-toast";
import { strongPassword } from "../utils/regex";
import { server } from "../utils/constants";
import axios from "axios";
import { useAtom } from "jotai";
import { User } from "../components/Store";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useAtom(User);
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    if (
      username === "" ||
      fullName === "" ||
      password === "" ||
      confirmPassword === "" ||
      gender === ""
    ) {
      toast.error("Fill form completely.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password donot match.");
      return;
    }
    if (!strongPassword.test(password)) {
      toast.error(
        "Your password must contain letters, numbers and special character."
      );
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${server}/auth/signup`, {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });
      // console.log(res);
      localStorage.setItem("chat-user", JSON.stringify(res?.data?.userData));
      setUser(res?.data?.userData);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;
