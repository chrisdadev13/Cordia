import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { useNavigate } from "react-router";

function UserCard(props: { username: string }) {
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const changeTheme = () => {
    toggleTheme();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <p>{props.username}</p>
      <div className="flex">
        <p onClick={changeTheme} className="text-xs mr-5 cursor-pointer">
          Change theme
        </p>
        <p onClick={logout} className="text-xs cursor-pointer">
          Log out
        </p>
      </div>
    </div>
  );
}

export default UserCard;
