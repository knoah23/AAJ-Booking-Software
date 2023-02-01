import React from 'react';
import { Formik } from 'formik';

export default function AppForm ({
  initialValues,
  onSubmit,
  validationSchema,
  children
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <form
          className='flex justify-evenly flex-col text-center p-1'
          onSubmit={handleSubmit}
        >
          {children}
        </form>
      )}
    </Formik>
  );
}
