import React from "react";
import useAuth from "../hooks/useAuth";
import useGroup from "../hooks/useGroup";

function RoomPage() {
  const { group, joinGroup } = useGroup();

  const test = () => {
    console.log(group);
  };

  return (
    <div>
      <button onClick={test}>Testing</button>
    </div>
  );
}

export default RoomPage;
