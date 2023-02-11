import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { MessageProps } from "./ChatMessage";

interface MessagesBoardProps {
  messages: MessageProps[];
  groupName: string;
  groupDescription: string;
}

function ChatMessages({
  messages,
  groupName,
  groupDescription,
}: MessagesBoardProps) {
  const messageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-6 h-5/6 w-full border-black dark:text-white dark:border-white">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="font-semibold text-2xl">Welcome to {groupName}</h1>
        <p className="w-4/6 text-center">{groupDescription}</p>
      </div>
      <hr className="my-7 bg-black border-black dark:bg-white dark:border-white" />
      <div className="w-full mt-12 overflow-x-hidden overflow-y-scroll dark:border-white h-5/6 border-black border">
        {messages.map((message, i) => (
          <ChatMessage
            key={i}
            username={message.username}
            message={message.message}
            time={message.time}
          />
        ))}
        <div ref={messageEnd}></div>
      </div>
    </div>
  );
}

export default ChatMessages;
