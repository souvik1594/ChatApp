import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatPageProps } from "../Types/types";

const ChatPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chats, setChats] = useState<ChatPageProps[]>([]);
  const fetchChats = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000/api/v1/chats");
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      Chat Page
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
