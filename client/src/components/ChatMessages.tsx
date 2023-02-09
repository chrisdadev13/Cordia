import React from "react";
import ChatMessage from "./ChatMessage";
import { MessageProps } from "./ChatMessage";

function ChatMessages(props: { messages: MessageProps[] }) {
  return (
    <div className="p-6 h-5/6 w-full border-black dark:text-white dark:border-white">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="font-semibold text-2xl">Welcome to The Odin Project</h1>
        <p className="w-4/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          urna augue, non suscipit velit aliquet vitae. Suspendisse leo elit,
          pretium id tincidunt sit amet, vulputate ac mi. Suspendisse venenatis
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
