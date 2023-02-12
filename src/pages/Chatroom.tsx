import React, { useEffect, useState, useRef } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../utils/WarningModal";
import ChatHeader from "../components/Chat/ChatHeader";
import ChatMessages from "../components/Chat/ChatMessages";
import ChatSidebar from "../components/Chat/ChatSidebar";
import ChatInput from "../components/Chat/ChatInput";
import io, { Socket } from "socket.io-client";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router";

function Chatroom() {
  const { group, getGroup } = useGroup();
  const { user, getUser } = useAuth();
  const [socket, setSocket] = useState<any>(io("http://localhost:8000"));
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const navigate = useNavigate();
  const roomEnd = useRef<HTMLDivElement>(null);
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;

  const scrollToBottom = () => {
    roomEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getCurrentTime = () => {
    const date = new Date();

    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else if (localStorage.getItem("group") === null) {
      navigate("/home");
    } else if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("group") === null
    ) {
      navigate("/");
    } else {
      scrollToBottom();
      getGroup({ invitation: invitation, token: token });
      getUser();

      const socket = io(API_URL);
      setSocket(socket);

      socket.on("connect", () => {
        console.log("Connected to socket.io server");

        socket.emit("join-room", {
          username: user.username,
          invitation: invitation,
        });
      });

      socket.on("send-message", (data: any) => {
        setMessages((prev) => [...prev, data]);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("send-message", {
      username: user.username,
      group: invitation,
      message: message,
      time: getCurrentTime(),
    });
  };

  const handleSending = () => {
    sendMessage(message);
    setMessage("");
  };

  const handleSendingEnter = (e: any) => {
    if (e.key === "Enter" && message.length !== 0) {
      handleSending();
    }
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
      <div className="flex w-full h-full">
        <div className="p-3 w-full">
          <ChatMessages
            groupName={group.name}
            groupDescription={group.description}
            messages={messages}
          />
          <ChatInput
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            onKeyDown={handleSendingEnter}
          />
        </div>
        <ChatSidebar creator={group.creator} members={group.members} />
      </div>

      <WarningModal />
      <div ref={roomEnd}></div>
    </div>
  );
}

export default Chatroom;
