import { atom } from "jotai";

const User = atom(null);
const SelectedConversation = atom("");
const Messages = atom([]);
const Conversations = atom([]);
const Socket = atom(null);
const OnlineUsers = atom({});

export {
  User,
  SelectedConversation,
  Messages,
  Conversations,
  Socket,
  OnlineUsers,
};
