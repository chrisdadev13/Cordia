import React from "react";
import formik, { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

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
      className="flex flex-col border border-b-4 border-r-4 border-black rounded-lg shadow-lg px-5 py-2 animate-bounce-short"
    >
      <label htmlFor="firstName">First name</label>
      <input
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder={
          formik.errors.firstName !== undefined ? formik.errors.firstName : ""
        }
        type="text"
        className={`border border-black rounded-md p-1 ${
          formik.errors.firstName !== undefined
            ? "border-red-700 placeholder:text-red-400"
            : ""
        }`}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder={
          formik.errors.lastName !== undefined ? formik.errors.lastName : ""
        }
        type="text"
        className={`border border-black rounded-md p-1 ${
          formik.errors.lastName !== undefined
            ? "border-red-700 placeholder:text-red-400"
            : ""
        }`}
      />
      <label htmlFor="username">Username</label>
      <input
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
        placeholder={
          formik.errors.username !== undefined ? "Invalid username" : ""
        }
        type="text"
        className={`border border-black rounded-md p-1 ${
          formik.errors.username !== undefined
            ? "border-red-700 placeholder:text-red-400"
            : ""
        }`}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder={
          formik.errors.password !== undefined ? "Invalid password" : ""
        }
        type="password"
        className={`border border-black rounded-md  p-1 ${
          formik.errors.password !== undefined
            ? "border-red-700 placeholder:text-red-400"
            : ""
        }`}
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
