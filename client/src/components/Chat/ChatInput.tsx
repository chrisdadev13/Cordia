import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  onClick: React.MouseEventHandler;
}

function ChatInput({ value, onChange, onClick }: InputProps) {
  return (
    <div className="w-full p-5 flex mt-16">
      <input
        type="text"
        className="border border-black dark:border-white dark:bg-black dark:text-white dark:border-1 w-full p-4"
        value={value}
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className="border border-black dark:border-white dark:text-white text-black dark:bg-black bg-white rounded-none hover:border-r-4 hover:border-b-4 hover:border-black hover:transition hover:ease-in-out hover:duration-300"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
