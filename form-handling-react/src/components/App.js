import React from 'react';
import RegistrationForm from './RegistrationForm';
import FormikForm from './FormikForm';

function App() {
  return (
    <div>
      <h1>Registration Form with Controlled Components</h1>
      <RegistrationForm />

      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;
