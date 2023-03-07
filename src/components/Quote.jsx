import React from 'react';

import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const Quote = ({ data }) => {
  return (
    <div className='flex bg-white p-10 gap-10 text-center flex-col rounded-lg mt-6'>
      <div className='pb-6 border-b-1 border-[#E0E0E0]'>
        <h1 className='font-bold text-4xl'>
          {data.total}
          <span className='text-sm text-[#FF4D00]'>NGN</span>
        </h1>
        <p className='text-[#E0E0E0] '>
          {data.weight} | #{data.order} | {data.rate === 'SR' ? 'Standard Rate' : 'Cargo Rate'}
        </p>
      </div>

      <div className='flex gap-4 flex-col'>
        <h1 className='text-left font-bold text-2xl'>Ship To</h1>
        <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <FiArrowDownLeft size={30} color='#FF4D00' />
          </div>
          <div>
            {/* <h1 className='font-bold'>Nathaniel Omokanye</h1> */}
            <p className='text-[#E0E0E0]'>
              {data.ship_to}
            </p>
          </div>
        </div>
      </div>

      <div className='py-8 w-full'>
        <div className='flex items-center justify-between py-4 border-b-1 border-gray-200'>
          <p className='text-xl'>VAT</p>
          <p className='font-bold text-xl'>{data.vat}</p>
        </div>
        <div className='flex items-center justify-between py-4 border-b-1 border-gray-200'>
          <p className='text-xl'>Tax</p>
          <p className='font-bold text-xl'>{data.tax}</p>
        </div>
        <div className='flex items-center justify-between py-4 border-b-1 border-gray-200'>
          <p className='text-xl'>Subtotal</p>
          <p className='font-bold text-xl'>{data.sub_total}</p>
        </div>
        <div className='flex items-center justify-between py-4'>
          <p className='text-xl'>Total</p>
          <p className='font-bold text-xl'>{data.total}</p>
        </div>
      </div>

      <div className='flex items-center gap-10'>
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          type='button'
        >
          Edit Order
        </button>
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          type='button'
        >
          Cancel Order
        </button>
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          type='button'
        >
          Process Order
        </button>
      </div>
    </div>
  );
};

export default Quote;
