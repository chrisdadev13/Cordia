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
        .max(30, "Must be 30 characters or less"),
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
