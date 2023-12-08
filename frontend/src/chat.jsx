import axios from "axios";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState();
  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/chats");
      setChats(data.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return <div>chatpage</div>;
};

export default ChatPage;
