import React from "react";

function LoginForm() {
  return (
    <form className="flex flex-col border border-b-4 border-r-4 border-black rounded-lg shadow-lg px-5 py-2">
      <label>Username</label>
      <input type="text" className="border border-black rounded-md" />
      <label>Password</label>
      <input type="password" className="border border-black rounded-md" />
      <a href="/register">Still don&apos;t have an account?</a>
      <div className="flex items-center justify-center w-full">
        <button className="border border-black p-1 w-1/2">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
