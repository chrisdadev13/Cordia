import React from "react";

function ChatMessages() {
  return (
    <div className="p-6 w-full overflow-y-scroll">
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="font-semibold text-2xl">Welcome to The Odin Project</h1>
        <p className="w-4/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          urna augue, non suscipit velit aliquet vitae. Suspendisse leo elit,
          pretium id tincidunt sit amet, vulputate ac mi. Suspendisse venenatis
        </p>
      </div>
      <hr className="my-7" />
    </div>
  );
}

export default ChatMessages;
