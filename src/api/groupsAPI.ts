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

const joinGroup = async (joinData: JoinValues) => {
  const { data } = await api.post("/joinGroup", joinData);
  return data;
};

const getGroup = async (getDataBy: JoinValues) => {
  const { data } = await api.get(
    `/groupData/${getDataBy.invitation}/${getDataBy.token}`
  );
  return data;
};

const groupsAPI = {
  createGroup,
  joinGroup,
  getGroup,
};

export default groupsAPI;
