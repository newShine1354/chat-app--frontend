import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { Messages, Socket } from "../components/Store";
import notification from "../utils/sounds/iphone_message_tone.mp3";

const useListenMessages = () => {
  const [socket, setSocket] = useAtom(Socket);
  const [messages, setMessages] = useAtom(Messages);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
