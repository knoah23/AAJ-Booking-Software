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
          className='flex flex-col gap-10 mt-10 bg-white p-8 rounded-md justify-center'
          onSubmit={handleSubmit}
        >
          {children}
        </form>
      )}
    </Formik>
  );
}
