import React from "react";

function CreateRoom() {
  return (
    <form>
      <label htmlFor="chatroom">Chatroom name: </label>
      <p className="text-xs">Introduce the name of the chatroom</p>
      <input
        type="text"
        className="border border-black w-full rounded-lg h-12"
      />
      <label>Chatroom category: </label>
      <input
        type="text"
        className="border border-black w-full rounded-lg h-12"
      />
      <label>Chatroom description: </label>
      <textarea className="border border-black w-full h-24 resize-none rounded-lg" />
    </form>
  );
}

export default CreateRoom;
