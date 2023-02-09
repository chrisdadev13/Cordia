import React from "react";
import ChatMessage from "./ChatMessage";
import { MessageProps } from "./ChatMessage";

function ChatMessages(props: { messages: MessageProps[] }) {
  return (
    <div className="p-6 h-5/6 w-full border-black dark:text-white dark:border-white">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="font-semibold text-2xl">Welcome to The Odin Project</h1>
        <p className="w-4/6">
          The Odin Project is one of those &quot;What I wish I had when I was
          learning&quot; resources. This project is designed to fill in the gap
          for people who are trying to hack it on their own but still want a
          high quality education.
        </p>
      </div>
      <hr className="my-7 bg-black border-black dark:bg-white dark:border-white" />
      <div className="w-full mt-12 h-5/6 ">
        {props.messages.map((message, i) => (
          <ChatMessage
            key={i}
            username={message.username}
            message={message.message}
            time={message.time}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatMessages;
