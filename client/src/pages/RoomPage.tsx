import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../components/WarningModal";
import ChatHeader from "../components/ChatHeader";

function RoomPage() {
  const { group, getGroup } = useGroup();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
    console.log(group);
  }, []);
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center">
        <ChatHeader
          name={group.name}
          category={group.category}
          creator={group.creator}
          description={group.description}
        />
      </div>

      <WarningModal />
    </div>
  );
}

export default RoomPage;
