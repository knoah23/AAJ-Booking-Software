import React, { useEffect } from 'react';
import GetQuote from '../components/Forms/GetQuote';
import ordersApi from '../api/orders';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';

import Hero from '../assets/hero.png';

const Dashboard = () => {
  const {
    data,
    loading,
    error,
    request: loadOrders
  } = useApi(ordersApi.getOrders);

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading || !data) {
    return <Loader />;
  }
  // const name = "Arinola";

  return (
    <div>
      <div className='flex justify-between'>
        <div className='px-32 mt-20 w-2/4 flex justify-center flex-col '>
          {/* <p className='font-bold text-4xl'>Hello, {name}.</p> */}
          <GetQuote />
        </div>
        <div className='w-2/4 flex justify-end items-start'>
          <img src={Hero} alt='hero' className='w-3/4 object-contain' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
