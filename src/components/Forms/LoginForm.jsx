import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import authApi from '../../api/auth';
import Loader from '../Loader';

const validationSchema = yup.object().shape({
  email: yup.string().email('Please provide a valid email address').required('Email address is required'),
  password: yup.string().required('Please provide a valid password')
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const clientId = 'NFkJNIgBCH759xONkNKzHoa6XetgzwHxILB2qxPS';
  const clientSecret = 'bfTzH2c9YgmHQxtFLYnntYqwtBJ3WwPZo3fLqDBA7et69g2DU1RaVaRHYdhfX6Mj6Puc7sPW6KyKu9LsVSHv8OJxjTYB3oEs1Rv4a3OR2WTSAJjbbz5d4y10rfzLvChb';
  const navigate = useNavigate();

  const handleOnSubmit = async ({ email, password }) => {
    setLoading(true);
    const response = await authApi.login({ email, password });
    if (!response.ok) return (setLoading(false), console.log(response.data), setError(true));
    window.localStorage.setItem('authToken', response.data.payload.token);
    const request = await authApi.createAccessToken(clientSecret, clientId);
    if (!request.ok) return (setLoading(false), console.log(request.data), setError(true));
    window.localStorage.setItem('accessToken', request.data.access_token);
    const result = await authApi.getAccountData(
      response.data.payload.user.user_id
    );
    if (!result.ok) return (setLoading(false), console.log(result.data), setError(true));
    window.localStorage.setItem('userData', JSON.stringify(result.data));
    navigate('/dashboard');
    setLoading(false);
  };

  return (
    <div className='w-1/2'>
      {!loading
        ? (
          <AppForm
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            {error && <p className='text-red-500'>Something went wrong, please try again or verify the details provided</p>}
            <AppFormField name='email' title='Email Address' type='email' />
            <AppFormField name='password' title='Password' type='password' />
            <button
              className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
              type='submit'
            >
              Login
            </button>
          </AppForm>
          )
        : <Loader />}
    </div>
  );
};

export default LoginForm;
