import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Home />
      </div>
    </>
  );
}

export default App;
