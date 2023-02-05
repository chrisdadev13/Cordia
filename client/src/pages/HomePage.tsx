import React, { useEffect } from "react";
import HomePanel from "../components/HomePanel";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user, getUser } = useAuth();
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center w-screen dark:bg-black dark:text-white">
      <HomePanel username={user.username} />
    </div>
  );
}

export default HomePage;
