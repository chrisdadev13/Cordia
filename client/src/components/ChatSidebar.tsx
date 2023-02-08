import React from "react";

interface SidebarProps {
  creator: string;
  members: string[];
}

function ChatSidebar({ creator, members }: SidebarProps) {
  console.log(members);
  return (
    <div className="h-full p-6 w-2/12 bg-gray-50 border border-black">
      <div>
        <h2 className="font-bold">Founder:</h2>
        <p className="text-sm">{creator}</p>
      </div>
      <div className="mt-5">
        <h2 className="font-bold">Members:</h2>
        {members.map((member, i) => (
          <p className="text-sm" key={i}>
            {member}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
