import React, { useState } from "react";
import SearchRoom from "./SearchRoom";
import CreateRoom from "./CreateRoom";
import Avatar from "./Avatar";
import UserCard from "./UserCard";

function HomePanel(props: { username: string }) {
  const [searchingRoom, setSearchingRoom] = useState<boolean>(true);

  return (
    <div className="xl:w-1/4 lg:w-1/3 border border-b-4 dark:border-1 border-r-4 dark:border-1 border-black dark:border-white rounded-lg shadow-lg  px-5 py-2">
      <h1 className="font-semibold">Welcome:</h1>
      <div className="flex items-center justify-between w-full mb-5">
        <UserCard username={props.username} />
        <Avatar username={props.username} w={64} h={64} />
      </div>
      {searchingRoom ? <SearchRoom /> : <CreateRoom />}
      <p
        className="text-blue-700 dark:text-blue-200 cursor-pointer"
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
