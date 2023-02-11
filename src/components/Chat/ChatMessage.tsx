import React from "react";
import Avatar from "../../utils/Avatar";
import { Remarkable } from "remarkable";

export interface MessageProps {
  username: string;
  message: string;
  time: string;
}

function ChatMessage({ username, message, time }: MessageProps) {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const md = new Remarkable({
    html: false,
  });

  const disableHeadings = (md: any) => {
    const originalHeadingOepn = md.renderer.rules.heading_open;

    md.renderer.rules.heading_open = (token: any, idx: any) => {
      return "";
    };
  };

  const getMarkDown = (data: any) => {
    md.use(disableHeadings);
    return { __html: md.render(data) };
  };

  return (
    <div className="flex my-1 p-2 w-full hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black cursor-default items-center ">
      <p className="text-xs mr-2">
        {hour}:{minutes}
      </p>
      <Avatar username={username} w={24} h={24} />

      <p className="font-semibold text-xs mx-3">{username}</p>
      <div className="break-all">
        <div
          className="text-xs"
          dangerouslySetInnerHTML={getMarkDown(message)}
        ></div>
      </div>
    </div>
  );
}

export default ChatMessage;
