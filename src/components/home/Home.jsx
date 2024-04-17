import React from "react";
import SideBar from "./Sidebar";
import MessageContainer from "./MessageContainer/MessageContainer";

const Home = () => {
  return (
    <div className="sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg flex">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
