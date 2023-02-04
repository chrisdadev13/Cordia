import React from "react";
import formik, { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .max(30, "Must be 30 characters or less"),
      lastName: Yup.string()
        .required("Last name is required")
        .max(30, "Must be 30 characters or less"),
      username: Yup.string()
        .required("Username is required")
        .max(30, "Must be 30 characters or less"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be between 6 and 30 characters")
        .max(30, "Must be between 6 and 30 characters"),
    }),
    onSubmit: (values) => {
      register(values);
      navigate("/login");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col border border-b-4 border-r-4 border-black rounded-lg shadow-lg px-5 py-2"
    >
      <label htmlFor="firstName">First name</label>
      <input
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        type="text"
        className="border border-black rounded-md"
      />
      <label htmlFor="lastName">Last name</label>
      <input
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        type="text"
        className="border border-black rounded-md"
      />
      <label htmlFor="username">Username</label>
      <input
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        type="text"
        className="border border-black rounded-md"
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        className="border border-black rounded-md"
      />
      <a href="/login">Already have an account?</a>
      <div className="flex items-center justify-center w-full">
        <button className="border border-black p-1 w-1/2" type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
