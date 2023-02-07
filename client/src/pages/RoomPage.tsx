import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";
import Modal from "../components/Modal";

function RoomPage() {
  const { getGroup } = useGroup();
  const invitation = localStorage.getItem("group") as string;
  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    getGroup({ invitation: invitation, token: token });
  });
  return (
    <div>
      <Modal />
    </div>
  );
}

export default RoomPage;
