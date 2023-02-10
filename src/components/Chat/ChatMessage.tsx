import React from "react";

export interface MessageProps {
  username: string;
  message: string;
  time: string;
}

function ChatMessage({ username, message, time }: MessageProps) {
  return (
    <div className="flex my-1 p-2 hover:bg-gray-100 w-full items-center ">
      <p className="text-xs text-gray-500 dark:text-gray-200">{time}</p>
      <p className="font-semibold text-xs mx-3">{username}</p>
      <div className="w-11/12">
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
