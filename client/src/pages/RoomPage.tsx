import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../utils/WarningModal";
import ChatHeader from "../components/Chat/ChatHeader";
import ChatMessages from "../components/Chat/ChatMessages";
import ChatSidebar from "../components/Chat/ChatSidebar";
import ChatInput from "../components/Chat/ChatInput";
import io, { Socket } from "socket.io-client";

function RoomPage() {
  const { group, getGroup } = useGroup();
  const { user, getUser } = useAuth();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  const [socket, setSocket] = useState<any>(io("http://localhost:8000"));
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const getCurrentTime = () => {
    const date = new Date();

    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
    getUser();

    const socket = io("http://localhost:8000");
    setSocket(socket);

    setTimeout(() => {
      socket.on("connect", () => {
        console.log("Connected to socket.io server");

        socket.emit("join-room", {
          username: user.username,
          invitation: invitation,
        });
      });
    }, 500);

    socket.on("send-message", (data: any) => {
      console.log(data);
      setMessages((prev) => [...prev, data]);
      console.log(messages);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("send-message", {
      username: user.username,
      group: invitation,
      message: message,
      time: getCurrentTime(),
    });
  };

  const handleClick = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="w-screen h-screen dark:bg-black overflow-x-hidden">
      <div className="flex items-center justify-center">
        <ChatHeader
          name={group.name}
          category={group.category}
          creator={group.creator}
          description={group.description}
          username={user.username}
        />
      </div>
      <div className="flex justify-between w-full h-full">
        <div className="p-3">
          <ChatMessages messages={messages} />
          <ChatInput
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            onClick={handleClick}
          />
        </div>
        <ChatSidebar creator={group.creator} members={group.members} />
      </div>
      <WarningModal />
    </div>
  );
}

export default RoomPage;
