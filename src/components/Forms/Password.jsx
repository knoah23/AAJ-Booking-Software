import React from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  password: yup.string().required('This field is required'),
  newPassword: yup.string().required('This field is required'),
  confirmPassword: yup.string().required('This field is required').oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Password = () => {
  const handleOnSubmit = (body) => {
    console.log(body);
  };

  return (
    <div className='flex text-center flex-col justify-evenly'>
      <AppForm
        initialValues={{
          password: '',
          newPassword: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='password' title='Current Password' type='password' />
        <AppFormField name='newPassword' title='New Password' type='password' />
        <AppFormField
          name='confirmPassword'
          title='Confirm Password'
          type='password'
        />
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Change
        </button>
      </AppForm>
    </div>
  );
};

export default Password;
