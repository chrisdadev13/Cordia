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

const usersAPI = {
  register,
  login,
};

export default usersAPI;
