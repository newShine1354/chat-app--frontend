import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import MessageContainer from "./MessageContainer/MessageContainer";
import io from "socket.io-client";
import { useAtom } from "jotai";
import { Socket, User } from "../Store";

const Home = () => {
  const [user, setUser] = useAtom(User);
  const [socket, setSocket] = useAtom(Socket);
  const [onlineUsers, setOnlineUsers] = useState([])
  useEffect(() => {
    const socket = io("http://localhost:5000", {
      query: {
        userId: user._id,
      }, 
    });
    setSocket(socket);
    socket.on("getOnlineUsers", (users)=>{
      setOnlineUsers(users)
    })
    
    return () => socket.close();
  }, []);
  return (
    <div className="sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg flex">
      <SideBar socket={socket} onlineUsers={onlineUsers}/>
      <MessageContainer />
    </div>
  );
};

export default Home;
