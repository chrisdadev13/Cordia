import React, { useState } from "react";
import Avatar from "./Avatar";
import { useNavigate } from "react-router";
import useTheme from "../hooks/useTheme";

function DropdownMenu(props: { username: string }) {
  const navigate = useNavigate();
  const { dark, toggleTheme } = useTheme();
  const [drop, setDrop] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("group");
    navigate("/");
  };

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <div>
      <div>
        <span
          className="p-0 cursor-pointer border-1 border-black bg-white rounded-2xl"
          onClick={() => setDrop(!drop)}
        >
          <Avatar username={props.username} w={36} h={36} />
        </span>
      </div>
      {drop === true && (
        <ul className="fixed bg-white right-3 border border-black p-3">
          <li
            onClick={changeTheme}
            className="cursor-pointer dark:text-black dark:hover:text-white hover:bg-black hover:text-white transition ease-in-out"
          >
            Change theme
          </li>
          <li
            onClick={() => navigate("/home")}
            className="cursor-pointer dark:text-black dark:hover:text-white  hover:bg-black hover:text-white transition ease-in-out"
          >
            Go home
          </li>
          <li
            onClick={logout}
            className="cursor-pointer dark:text-black dark:hover:text-white hover:bg-black hover:text-white transition ease-in-out"
          >
            Sign out
          </li>
          <li className="cursor-pointer  bg-red-500 border border-b-4 border-r-4 border-black shadow-lg text-white rounded-lg p-2 hover:bg-red-600">
            Get me out!!
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
