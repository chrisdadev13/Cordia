import React from "react";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  onKeyDown: React.KeyboardEventHandler;
}

function ChatInput({ value, onChange, onKeyDown }: InputProps) {
  return (
    <div className="w-full p-5 flex mt-16">
      <input
        type="text"
        className="border-black border border-b-4 border-r-4 rounded-lg shadow-lg dark:border-white w-full p-4"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default ChatInput;
