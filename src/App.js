import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import { User } from "./components/Store";

function App() {
  const [user] = useAtom(User);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
