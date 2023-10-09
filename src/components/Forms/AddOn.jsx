import React from 'react';
import { useFormikContext } from 'formik';

const AddOn = ({ name, title, auto, children }) => {
  const { values, handleBlur, handleChange, errors, touched } =
    useFormikContext();

  return (
    <div className='w-full text-left'>
      <label>{title}</label>
      <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
        <select
          onBlur={handleBlur}
          onChange={handleChange}
          id={name}
          name={name}
          value={values[name]}
          autoComplete={auto}
          className='w-full border-0 bg-none focus:outline-none'
        >
          {children}
        </select>
      </div>
      {touched[name] && errors[name]
        ? (
          <div className='text-red-500'>{errors[name]}</div>
          )
        : null}
    </div>
  );
};

export default AddOn;
