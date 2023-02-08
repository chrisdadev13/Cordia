import React from "react";
import usersAPI from "../api/usersAPI";
import { useNavigate } from "react-router";

interface User {
  username: string;
  id: string;
  iat: number;
}

interface UserGroup {
  name: string;
  category: string;
  description: string;
  members: string[];
}

export default function useAuth() {
  const [user, setUser] = React.useState<User>({
    username: "",
    id: "",
    iat: 0,
  });
  const [userGroups, setUserGroups] = React.useState<UserGroup[]>([]);
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
        setUser(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGroups = async () => {
    try {
      await usersAPI.getGroups().then((res) => {
        setUserGroups(res);
      });
      console.log(userGroups);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    register,
    login,
    getUser,
    getGroups,
  };
}
