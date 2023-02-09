import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
}

function ChatInput({ value, onChange }: InputProps) {
  return (
    <div className="w-full p-5 mt-16">
      <input
        type="text"
        className="border border-black border-b-4 border-r-4 dark:border-white dark:bg-black dark:border-1  rounded-md w-full p-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ChatInput;
