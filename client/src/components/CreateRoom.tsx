import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import groupsAPI from "../api/groupsAPI";
import { useNavigate } from "react-router";

interface GroupFormValues {
  name: string;
  category: string;
  description: string;
  token: string;
}

function CreateRoom() {
  const formik = useFormik<GroupFormValues>({
    initialValues: {
      name: "",
      category: "",
      description: "",
      token: localStorage.getItem("token") as string,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      name: Yup.string().required("Group name is required"),
      category: Yup.string().required("Group category is required"),
      description: Yup.string().max(90, "Must be 90 characters or less"),
      token: Yup.string(),
    }),
    onSubmit: (values) => {
      groupsAPI.createGroup(values).then(() => {
        values.name = "";
        values.category = "";
        values.description = "";
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Chatroom name: </label>
      <input
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
      <label htmlFor="category">Chatroom category: </label>
      <input
        name="category"
        id="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
      <label htmlFor="description">Chatroom description: </label>
      <textarea
        name="description"
        id="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        className="border border-black dark:border-white dark:bg-black w-full h-24 resize-none rounded-lg"
      />
      <button
        className="border border-black"
        type="submit"
        onClick={() => formik.handleSubmit}
      >
        Create
      </button>
    </form>
  );
}

export default CreateRoom;
