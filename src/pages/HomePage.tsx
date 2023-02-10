import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import HomePanel from "../components/Home/HomePanel";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user, userGroups, getUser, getGroups } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getUser();
      getGroups();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-screen flex-col items-center justify-center w-screen dark:bg-black dark:text-white">
      <HomePanel username={user.username} userGroups={userGroups} />
    </div>
  );
}

export default HomePage;
