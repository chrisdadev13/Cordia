import React, { useState } from "react";
import SearchRoom from "./SearchRoom";
import CreateRoom from "./CreateRoom";
import Avatar from "./Avatar";
import { useNavigate } from "react-router";
function HomePanel(props: { username: string }) {
  const [searchingRoom, setSearchingRoom] = useState<boolean>(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-1/4 border border-b-4 border-r-4 border-black rounded-lg shadow-lg px-5 py-2">
      <h1 className="font-semibold">Welcome:</h1>
      <div className="flex items-center justify-between w-full mb-5 ">
        <div>
          <p>{props.username}</p>
          <div className="flex">
            <p className="text-xs mr-5 cursor-pointer">Change theme</p>
            <p onClick={logout} className="text-xs cursor-pointer">
              Log out
            </p>
          </div>
        </div>
        <Avatar username={props.username} />
      </div>
      {searchingRoom ? <SearchRoom /> : <CreateRoom />}
      <p
        className="text-blue-700 cursor-pointer"
        onClick={() => setSearchingRoom(!searchingRoom)}
      >
        {searchingRoom
          ? "Do you want to create your own room?"
          : "Log into a room already created"}
      </p>
    </div>
  );
}

export default HomePanel;
