import React, { useState } from "react";
import SearchRoom from "./SearchRoom";
import CreateRoom from "./CreateRoom";
import Avatar from "../../utils/Avatar";
import UserCard from "./UserCard";
import { UserGroup } from "../../hooks/useAuth";

interface PanelProps {
  username: string;
  userGroups: UserGroup[];
}

function HomePanel({ username, userGroups }: PanelProps) {
  const [searchingRoom, setSearchingRoom] = useState<boolean>(true);

  return (
    <div className="xl:w-1/3 lg:w-1/2  border border-b-4 dark:border-1 border-r-4 dark:border-1 border-black dark:border-white rounded-lg shadow-lg  px-5 py-2">
      <h1 className="font-semibold xl:text-5xl lg:text-5xl text-2xl">
        Welcome:
      </h1>
      <div className="flex items-center justify-between w-full mb-5">
        <UserCard username={username} />
        <Avatar username={username} w={64} h={64} />
      </div>
      {searchingRoom ? <SearchRoom userGroups={userGroups} /> : <CreateRoom />}
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
