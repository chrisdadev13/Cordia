import React from "react";
import Avatar from "../../utils/Avatar";

export interface MessageProps {
  username: string;
  message: string;
  time: string;
}

function ChatMessage({ username, message, time }: MessageProps) {
  return (
    <div className="flex my-1 p-2 w-full hover:bg-gray-100 items-center ">
      <p className="text-xs text-gray-500 dark:text-gray-200 mr-2">{time}</p>
      <Avatar username={username} w={24} h={24} />

      <p className="font-semibold text-xs mx-3">{username}</p>
      <div className="break-all">
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
