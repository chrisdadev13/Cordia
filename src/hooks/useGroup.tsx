import React from "react";
import groupsAPI from "../api/groupsAPI";
import { useNavigate } from "react-router";

interface CreationData {
  name: string;
  category: string;
  description: string;
  token: string;
}

export default function useGroup() {
  const [group, setGroup] = React.useState<any>({});
  const navigate = useNavigate();

  const joinGroup = async (joinData: JoinValues) => {
    try {
      await groupsAPI.joinGroup(joinData).then((res) => {
        localStorage.setItem("group", res.group.id);
        navigate("/home/room");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createGroup = async (createData: CreationData) => {
    try {
      await groupsAPI.createGroup(createData).then((res) => {
        joinGroup({ invitation: res._id, token: createData.token });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGroup = async (getDataBy: JoinValues) => {
    try {
      await groupsAPI.getGroup(getDataBy).then((res) => {
        setGroup(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    group,
    joinGroup,
    createGroup,
    getGroup,
  };
}
