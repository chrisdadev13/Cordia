import React from "react";
import groupsAPI from "../api/groupsAPI";
import { useNavigate } from "react-router";

export default function useGroup() {
  const [group, setGroup] = React.useState<any>({});
  const navigate = useNavigate();

  const joinGroup = async (joinData: JoinValues) => {
    try {
      await groupsAPI.joinGroup(joinData).then((res) => {
        localStorage.setItem("group", res.group.id);
        navigate("/room");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGroup = async (getDataBy: JoinValues) => {
    try {
      await groupsAPI.getGroup(getDataBy).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    group,
    joinGroup,
    getGroup,
  };
}
