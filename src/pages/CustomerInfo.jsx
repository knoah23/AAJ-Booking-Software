import React from 'react';
import { Customer, BackHeader } from '../components';

const CustomerInfo = () => {
  const getHeader = () => {
    if (window.location.href.split('?')[1] === 'sender') {
      return 'Origin';
    } else if (window.location.href.split('?')[1] === 'receiver') {
      return 'Destination';
    }
  };
  return (
    <div className='w-full px-96 text-center flex mt-36 flex-col justify-center '>
      <BackHeader />
      <h1 className='font-bold text-3xl'>{getHeader()}</h1>
      <Customer />
    </div>
  );
};

export default CustomerInfo;
