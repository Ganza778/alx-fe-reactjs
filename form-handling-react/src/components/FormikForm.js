// src/components/FormikForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    alert('User registered successfully!');
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
