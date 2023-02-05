import React, { useEffect } from "react";
import HomePanel from "../components/HomePanel";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user, getUser } = useAuth();
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <HomePanel username={user.username} />
    </div>
  );
}

export default HomePage;
