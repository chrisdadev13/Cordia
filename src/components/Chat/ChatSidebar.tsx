import React, { useState, useEffect } from "react";
import Avatar from "../../utils/Avatar";

interface SidebarProps {
  creator: string;
  members: string[];
}

function ChatSidebar({ creator, members }: SidebarProps) {
  const listMembers = () => {
    if (members !== undefined)
      return (
        <div>
          {members.map((member, i) => (
            <div key={i} className="flex items-center">
              <Avatar username={member} h={28} w={28} />
              <p key={i}>{member}</p>
            </div>
          ))}
        </div>
      );
  };
  return (
    <div className="hidden lg:block h-full dark:border-white p-6 w-2/12 bg-gray-50 border dark:text-black  border-black">
      <div>
        <h2 className="font-bold">Founder:</h2>
        <div className="flex">
          <Avatar username={creator} h={36} w={36} />
          <p className="text-sm">{creator}</p>
        </div>
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
