import React from 'react';

const Quote = ({ data }) => {
  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <h2 className='text-slate-800 font-bold text-lg'>Quote</h2>
      <div className='my-6'>
        <p className='text-gray-400'>Total</p>
        <h1 className='font-bold text-xl text-orange-500'>₦{data.total}</h1>
      </div>
      <div className='bg-gray-100 rounded-md p-6'>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>Order:</p>
          <p>{data.order}</p>
        </div>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>Ship To:</p>
          <p>{data.ship_to}</p>
        </div>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>Weight:</p>
          <p>{data.weight}</p>
        </div>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>Rate:</p>
          <p>{data.rate}</p>
        </div>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>TAX:</p>
          <p>{data.tax}</p>
        </div>
        <div className='flex justify-between my-6'>
          <p className='font-bold text-gray-800'>Subtotal:</p>
          <p>{data.sub_total}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
