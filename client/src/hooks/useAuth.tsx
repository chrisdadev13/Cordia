import React from "react";
import usersAPI from "../api/usersAPI";

export default function useAuth() {
  const [user, setUser] = React.useState({});

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
        setUser(res);
        console.log(user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    register,
    login,
  };
}
