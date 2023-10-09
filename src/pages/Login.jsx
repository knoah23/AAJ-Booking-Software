import React from "react";
import { LoginForm } from "../components";

const Login = () => {
  return (
    <div className='w-full px-32 flex mt-36 flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl'>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
