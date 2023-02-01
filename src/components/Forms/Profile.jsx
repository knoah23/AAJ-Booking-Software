import React from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import authApi from '../../api/auth';

const validationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Please enter a valid email address'),
  phoneNumber: yup.string()
});

const Profile = () => {
  const handleOnSubmit = async ({ name, email, phoneNumber }) => {
    const response = await authApi.editAccount({ name, email, phoneNumber });
    if (!response.ok) return console.log(response);
    window.alert('Profile details updated successfully');
  };

  return (
    <div className='flex text-center flex-col justify-evenly'>
      <AppForm
        initialValues={{
          name: '',
          email: '',
          phoneNumber: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='name' title='Full Name' type='name' />
        <AppFormField name='email' title='Email Address' type='email' />
        <AppFormField name='phoneNumber' title='Phone Number' />
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

export default Profile;
