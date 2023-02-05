import React from "react";

function SearchRoom() {
  return (
    <form>
      <label htmlFor="chatroom">Chatroom: </label>
      <p className="text-xs">
        Introduce the name of the chatroom and press enter to travel
      </p>
      <input
        type="text"
        className="border border-black w-full rounded-lg h-12"
      />
    </form>
  );
}

export default SearchRoom;
