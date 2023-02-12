import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";

interface LoginFormValues {
  username: string;
  password: string;
}

function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .max(12, "Must be 12 characters or less"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Must be between 6 and 30 characters")
        .max(30, "Must be between 6 and 30 characters"),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col border border-b-4 border-r-4 border-black rounded-lg shadow-lg px-5 py-2 animate-bounce-short"
    >
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
      <a href="/register">Still don&apos;t have an account?</a>
      <div className="flex items-center justify-center w-full">
        <button type="submit" className="border border-black p-1 w-1/2">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
