import React from "react";

function LandingPage() {
  return (
    <div
      className="flex
      flex-col items-center justify-center w-screen"
    >
      <h1 className="font-semibold mb-5">Cordia Chat</h1>
      <p className="w-2/3 mb-5 font-serif">
        Cordia is a minimalist, real-time text groupal, chat app. It&apos;s
        place where you can talk and interact with people like you, make new
        friends, share new thoughts and, most importantly, have fun being
        yourself... Just like Discord but way uglier.
      </p>
      <button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm">
        <a className="text-black" href="/login">
          Enter now!
        </a>
      </button>
    </div>
  );
}

export default LandingPage;
