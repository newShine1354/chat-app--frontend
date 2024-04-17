import React from "react";
import SearchInput from "./Sidebar/SearchInput";
import Conversations from "./Sidebar/Conversations";
import LogoutButton from "./Sidebar/LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 px-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
