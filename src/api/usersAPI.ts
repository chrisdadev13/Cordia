import axios from "axios";
import { API_URL } from "../utils/constants";

const api = axios.create({
  baseURL: `${API_URL}/api/users`,
  withCredentials: false,
});

const register = async (registerData: RegisterValues) => {
  const { data } = await api.post("/register", registerData);
  return data;
};

const login = async (loginData: LoginValues) => {
  const { data } = await api.post("/login", loginData);
  return data;
};

const getUser = async () => {
  const { data } = await api.get("/user", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  return data;
};

const getGroups = async () => {
  const { data } = await api.get("/getGroups", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  return data;
};

const usersAPI = {
  register,
  login,
  getUser,
  getGroups,
};

export default usersAPI;
