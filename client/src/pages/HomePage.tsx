import React, { useEffect } from "react";
import HomePanel from "../components/HomePanel";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user, userGroups, getUser, getGroups } = useAuth();
  useEffect(() => {
    getUser();
    getGroups();
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center w-screen dark:bg-black dark:text-white">
      <HomePanel username={user.username} userGroups={userGroups} />
    </div>
  );
}

export default HomePage;
