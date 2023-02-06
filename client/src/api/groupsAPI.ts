import axios from "axios";
import { API_URL } from "../utils/constants";

const api = axios.create({
  baseURL: `${API_URL}/api/groups`,
  withCredentials: false,
});

const createGroup = async (creationData: CreationValues) => {
  const { data } = await api.post("/createGroup", creationData);
  return data;
};

const groupsAPI = {
  createGroup,
};

export default groupsAPI;
