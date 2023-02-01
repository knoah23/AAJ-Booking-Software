import React from 'react';
import { useFormikContext } from 'formik';

const AppFormField = ({ name, title, type, margin = '1em 0' }) => {
  const { values, handleBlur, handleChange, errors, touched } = useFormikContext();

  return (
    <div className='w-full text-left' style={{ margin: margin }}>
      <label style={{ fontWeight: 'bolder' }}>{title}</label>
      <div className='flex items-center justify-between bg-slate-100 p-3 rounded-md my-2 focus:outline-none'>
        <input
          placeholder={title}
          onBlur={handleBlur}
          onChange={handleChange}
          id={name}
          name={name}
          type={type}
          value={values[name]}
          className='w-full border-0 bg-transparent'
        />
      </div>
      {touched[name] && errors[name] ? <div className='text-red-500'>{errors[name]}</div> : null}
    </div>
  );
};

export default AppFormField;
