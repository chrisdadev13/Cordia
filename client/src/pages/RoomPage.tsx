import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../components/WarningModal";
import ChatHeader from "../components/ChatHeader";

function RoomPage() {
  /*
  const { group, getGroup } = useGroup();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
    console.log(group);
  }, []);
  */
  return (
    <div className="w-screen h-screen dark:bg-black">
      <div className="flex items-center justify-center">
        <ChatHeader
          name={"The Odin Project"}
          category={"Educational"}
          creator={"chrisdadev"}
          description={"Full stack roadmap"}
        />
      </div>

      <WarningModal />
    </div>
  );
}

export default RoomPage;
