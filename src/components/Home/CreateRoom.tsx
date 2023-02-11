import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import groupsAPI from "../../api/groupsAPI";

interface GroupFormValues {
  name: string;
  category: string;
  description: string;
  token: string;
}

function CreateRoom() {
  const [secretCode, setSecretCode] = useState<string>("");
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
      groupsAPI.createGroup(values).then((res) => {
        setSecretCode(res.group.group._id);
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
        placeholder={formik.errors.name !== undefined ? formik.errors.name : ""}
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
      <label htmlFor="category">Chatroom category: </label>
      <input
        name="category"
        id="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        placeholder={
          formik.errors.category !== undefined ? formik.errors.category : ""
        }
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
      <label htmlFor="description">Chatroom description: </label>
      <textarea
        name="description"
        id="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        maxLength={218}
        className="border border-black dark:border-white dark:bg-black w-full h-24 resize-none rounded-lg"
      />
      <button
        className="border p-1 border-black dark:border-white dark:border"
        type="submit"
        onClick={() => formik.handleSubmit}
      >
        Create
      </button>
      <div>
        <p>
          Group code (fill the form and press &quot;create&quot; to generate):{" "}
        </p>
        <p>{secretCode}</p>
      </div>
    </form>
  );
}

export default CreateRoom;
