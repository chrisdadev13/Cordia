import React from "react";
import DropdownMenu from "./DropdownMenu";

interface GroupInformation {
  name: string;
  category: string;
  description: string;
  creator: string;
  username: string;
}

function ChatHeader({
  name,
  category,
  description,
  creator,
  username,
}: GroupInformation) {
  return (
    <div className="w-full flex justify-between border-black p-4 border dark:border-white dark:text-white">
      <div className="flex items-center w-1/3">
        <p># {name}</p>
        <span className="h-full border bg-black w-1 ml-3 mx-3 dark:bg-white" />
        <p className="text-xs text-gray-600 dark:text-gray-50">{description}</p>
      </div>
      <div className="flex items-center">
        <DropdownMenu username={username} />
      </div>
    </div>
  );
}

export default ChatHeader;
