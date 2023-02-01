import React from 'react';
import { LoginForm } from '../components';
import Logo from '../data/AAJ.svg';

const Login = () => {
  return (
    <div className='w-full px-10 flex flex-col mb-12 justify-center h-[89vh]'>
      <img src={Logo} className='w-[80px]' alt='logo' />
      <LoginForm />
    </div>
  );
};

export default Login;
