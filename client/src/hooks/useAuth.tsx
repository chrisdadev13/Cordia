import React from "react";
import usersAPI from "../api/usersAPI";
import { useNavigate } from "react-router";

export default function useAuth() {
  const [user, setUser] = React.useState({});
  const navigate = useNavigate();

  const register = async (registerData: RegisterValues) => {
    try {
      await usersAPI.register(registerData);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData: LoginValues) => {
    try {
      await usersAPI.login(loginData).then((res) => {
        if (res === "Invalid username or password") navigate("/login");
        else {
          localStorage.setItem("token", res.user.tokens[0]);
          navigate("/home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      await usersAPI.getUser().then((res) => {
        setUser(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    register,
    login,
    getUser,
  };
}
