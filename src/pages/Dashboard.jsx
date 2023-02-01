import React, { useEffect, useState } from 'react';
import { earningData } from '../data/dummy';
import ActiveBooking from '../components/ActiveBooking';
import useApi from '../hooks/useApi';
import ordersApi from '../api/orders';
import Loader from '../components/Loader';

const Dashboard = () => {
  const itemStyle = 'my-2 font-bold text-lg text-left';
  const {
    data: bookings,
    error,
    message,
    loading,
    request: loadBookings
  } = useApi(ordersApi.getOrders);

  useEffect(() => {
    loadBookings();
  }, []);

  if (loading || !bookings) {
    return <Loader />;
  }

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-between mb-10'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-orange-400'>Overview</p>
              <p className='text-2xl font-bold'>₦1,500,000.00</p>
            </div>
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-start gap-4 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=' flex justify-center'>
        <div className='flex flex-col w-full px-5'>
          <h1 className='text-2xl font-bold'>Active Bookings</h1>
          <div className='bg-white mt-5 rounded-xl px-6 py-5 w-full'>
            <table className='w-full'>
              <tr>
                <th>
                  <input type='checkbox' />
                </th>
                <th className={itemStyle}>ID</th>
                <th className={itemStyle}>Client Name</th>
                <th className={itemStyle}>Contact Number</th>
                <th className={itemStyle}>Origin</th>
                <th className={itemStyle}>Destination</th>
                <th className={itemStyle}>Status</th>
                <th className={itemStyle}>Actions</th>
              </tr>
              {bookings[0].payload.map((item) => (
                <ActiveBooking key={item.id} item={item} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
