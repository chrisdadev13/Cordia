import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import WarningModal from "../components/WarningModal";

function RoomPage() {
  const { group, getGroup } = useGroup();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
    console.log(group);
  }, []);
  return (
    <div>
      <WarningModal />
    </div>
  );
}

export default RoomPage;
