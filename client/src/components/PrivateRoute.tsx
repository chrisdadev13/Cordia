import React from "react";
import useAuth from "../hooks/useAuth";
import { Route, useNavigate } from "react-router-dom";

interface Props {
  path: string;
  element: React.ReactNode;
}
function PrivateRoute({ path, element }: Props) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      {user.username === "chrisdadev" ? (
        <Route path={path} element={element} />
      ) : (
        <Route path={path} element={element} />
      )}
    </>
  );
}

export default PrivateRoute;
