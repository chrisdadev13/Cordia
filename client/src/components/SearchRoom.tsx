import React from "react";
import { useFormik } from "formik";
import useGroup from "../hooks/useGroup";
import * as Yup from "yup";

function SearchRoom() {
  const { joinGroup } = useGroup();
  const formik = useFormik<JoinValues>({
    initialValues: {
      invitation: "",
      token: localStorage.getItem("token") as string,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      invitation: Yup.string()
        .required("Group invitation is required")
        .min(24, "Must be 24 characters")
        .max(24, "Must be 24 characters"),
    }),
    onSubmit: (values) => {
      joinGroup(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="invitation">Chatroom: </label>
      <input
        id="invitation"
        name="invitation"
        value={formik.values.invitation}
        onChange={formik.handleChange}
        type="text"
        className="border border-black dark:border-white dark:bg-black w-full rounded-lg h-12"
      />
    </form>
  );
}

export default SearchRoom;
