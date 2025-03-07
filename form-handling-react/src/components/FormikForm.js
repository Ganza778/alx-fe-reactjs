import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});

const FormikForm = () => {
  // Define the initial values of the form
  const initialValues = { username: '', email: '', password: '' };

  // Handle form submission
  const handleSubmit = (values) => {
    // Mock API call here
    console.log('Form data:', values);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
            />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
