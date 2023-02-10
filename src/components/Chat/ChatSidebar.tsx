import React, { useState, useEffect } from "react";

interface SidebarProps {
  creator: string;
  members: string[];
}

function ChatSidebar({ creator, members }: SidebarProps) {
  const listMembers = () => {
    if (members !== undefined)
      return (
        <>
          {members.map((member, i) => (
            <p key={i}>{member}</p>
          ))}
        </>
      );
  };
  return (
    <div className="hidden lg:block h-full dark:border-white p-6 w-2/12 bg-gray-50 border dark:text-black  border-black">
      <div>
        <h2 className="font-bold">Founder:</h2>
        <p className="text-sm">{creator}</p>
      </div>
      <div className="mt-5">
        <h2 className="font-bold">Members:</h2>
        {members === undefined && <p>empty</p>}
        <>{members !== undefined && listMembers()}</>
      </div>
    </div>
  );
}

export default ChatSidebar;
