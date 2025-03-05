// src/components/FormikForm.js

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    email: Yup.string().email("Invalid email format").required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  return (
    <div>
      <h1>User Registration</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form submitted successfully!", values);
        }}
      >
        {() => (
          <Form>
            {/* Username Field */}
            <div>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="p" className="error" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="p" className="error" />
            </div>

            {/* Submit Button */}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
