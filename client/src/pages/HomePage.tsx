import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { getUser } = useAuth();

  return (
    <div>
      <h1 onClick={() => getUser()}>Home</h1>
    </div>
  );
}

export default HomePage;
