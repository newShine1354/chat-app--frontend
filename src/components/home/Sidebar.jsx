import React, { useEffect, useState } from "react";
import SearchInput from "./Sidebar/SearchInput";
import Conversations from "./Sidebar/Conversations";
import LogoutButton from "./Sidebar/LogoutButton";

const Sidebar = ({socket, onlineUsers}) => {
  
  return (
    <div className="border-r border-slate-500 px-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations onlineUsers = {onlineUsers}/>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
