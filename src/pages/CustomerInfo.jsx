import React from 'react';
import { Customer, Header } from '../components';

const CustomerInfo = () => {
  return (
    <div className='w-full h-full px-5 my-5'>
      <Header category='Customer Info' title='Create Order' />
      <Customer />
    </div>
  );
};

export default CustomerInfo;
