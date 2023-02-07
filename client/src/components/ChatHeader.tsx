import React from "react";

interface GroupInformation {
  name: string;
  category: string;
  description: string;
  creator: string;
}

function ChatHeader({
  name,
  category,
  description,
  creator,
}: GroupInformation) {
  return (
    <div className="w-5/6 flex items-center justify-center border-black border h-10">
      <div className="flex items-center justify-between w-1/3">
        <p>{name}</p>
        <p>{category}</p>
        <p>{creator}</p>
      </div>
    </div>
  );
}

export default ChatHeader;
