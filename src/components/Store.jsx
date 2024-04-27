import { atom } from "jotai";

const User = atom(null);
const SelectedConversation = atom("");
const Messages = atom([]);
const Conversations = atom([]);

export { User, SelectedConversation, Messages, Conversations };
