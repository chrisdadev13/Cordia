import React from "react";

export interface MessageProps {
  username: string;
  message: string;
  time: string;
}

function ChatMessage({ username, message, time }: MessageProps) {
  return (
    <div className="flex my-3 hover:bg-gray-100 w-1/2 items-center ">
      <p className="text-xs text-gray-500 dark:text-gray-200">{time}</p>
      <p className="font-semibold text-xs mx-3">{username}</p>
      <p className="text-xs">{message}</p>
    </div>
  );
}

export default ChatMessage;
