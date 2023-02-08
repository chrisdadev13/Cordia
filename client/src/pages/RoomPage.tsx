import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../components/WarningModal";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatSidebar from "../components/ChatSidebar";
import ChatInput from "../components/ChatInput";

function RoomPage() {
  const { group, getGroup } = useGroup();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
    console.log(invitation);
  }, []);
  return (
    <div className="w-screen h-screen dark:bg-black overflow-x-hidden">
      <div className="flex items-center justify-center">
        <ChatHeader
          name={group.name}
          category={group.category}
          creator={group.creator}
          description={group.description}
        />
      </div>
      <div className="flex justify-between w-full h-full">
        <div className="p-3">
          <ChatMessages />
          <ChatInput />
        </div>
        <ChatSidebar creator={group.creator} members={group.members} />
      </div>
      <WarningModal />
    </div>
  );
}

export default RoomPage;
