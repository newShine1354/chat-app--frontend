import { Suspense, useEffect } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import { User } from "./components/Store";
import LoadingScreen from "./components/LoadingScreen";
import Page404 from "./components/Page404";
import { useCookies } from "react-cookie";
import { server } from "./utils/constants";
import axios from "axios";

function App() {
  const [user, setUser] = useAtom(User);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const me = async () => {
    if (cookies.jwt) {
      const res = await axios.get(`${server}/auth/me`, {
        headers: {
          Authorization: cookies.jwt,
        },
      });
      setUser(res?.data?.userData);
      setCookie("jwt", res?.data?.token);
    }
    return;
  };
  useEffect(() => {
    me();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
        <div className="p-4 h-screen flex items-center justify-center">
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : !cookies.jwt && <Navigate to="/login" />}
            />
            <Route
              exact
              path="/signup"
              element={user ? <Navigate to="/" /> : !cookies.jwt && <Signup />}
            />
            <Route
              exact
              path="/login"
              element={user ? <Navigate to="/" /> : !cookies.jwt && <Login />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
