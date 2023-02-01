import React, { useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import authApi from '../../api/auth';
import Loader from '../Loader';

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const clientId = 'MTAID6t2qn0tUq8ABV3Yj5zysMEFqJGmWNpuOFhX';
  const clientSecret = 'm1WxEq2OrlZ93JQA1PXRswnPFIpmSEi0onmZYhJ6YXlwGlDBOnZdKJWhXSo1wglZeY1YvQ4sI99zy2fPIKQqllJsgxsMqcnudJ4tSjhiqTvPbJJbXcMIkz5x1GufpWm5';

  const handleOnSubmit = async ({ email, password }) => {
    setLoading(true);
    const response = await authApi.login({ email, password });
    if (!response.ok) return (setLoading(false), console.log(response.data));
    window.localStorage.setItem('authToken', response.data.payload.token);
    const request = await authApi.createAccessToken(clientSecret, clientId);
    if (!request.ok) return (setLoading(false), console.log(request.data));
    window.localStorage.setItem('accessToken', request.data.access_token);
    const result = await authApi.getAccountData(response.data.payload.user.user_id);
    if (!result.ok) return (setLoading(false), console.log(result.data));
    window.localStorage.setItem('userData', JSON.stringify(result.data));
    window.location.replace('/dashboard');
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='flex text-center flex-col justify-evenly'>
      <AppForm
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='email' title='Email Address' type='email' />
        <AppFormField name='password' title='Password' type='password' />
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Login
        </button>
      </AppForm>
    </div>
  );
};

export default LoginForm;
