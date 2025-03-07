// src/components/FormikForm.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Formik hook setup
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      email: Yup.string().email("Invalid email format").required("Email is required."),
      password: Yup.string().required("Password is required."),
    }),
    onSubmit: (values) => {
      console.log("Form submitted successfully!", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <p>{formik.errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default FormikForm;
