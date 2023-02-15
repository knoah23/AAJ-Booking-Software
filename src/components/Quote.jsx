import React from "react";

import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

const Quote = ({ data }) => {
  return (
    <div className='flex bg-white p-10 gap-10 text-center flex-col rounded-lg mt-6'>
      <div className='pb-6 border-b-1 border-[#E0E0E0]'>
        <h1 className='font-bold text-4xl'>
          {data.total}
          <span className='text-sm text-[#FF4D00]'>NGN</span>
        </h1>
        <p className='text-[#E0E0E0] '>
          {data.weight} | International | Cargo Rate
        </p>
      </div>

      <div className='flex gap-4 flex-col'>
        <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <FiArrowUpRight size={30} color='#FF4D00' />
          </div>
          <div>
            <h1 className='font-bold'>Noah Ayodele</h1>
            <p className='text-[#E0E0E0]'>
              13 Salami Street, Mende, Lagos, 100211, Nigeria | +234802343932
            </p>
          </div>
        </div>

        <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <FiArrowDownLeft size={30} color='#FF4D00' />
          </div>
          <div>
            <h1 className='font-bold'>Nathaniel Omokanye</h1>
            <p className='text-[#E0E0E0]'>
              {data.ship_to} United States | +121202343932
            </p>
          </div>
        </div>
      </div>

      <div className='text-left'>
        <h1 className='text-xl text-[#FF4D00]'>Items</h1>

        <div className='flex gap-6 text-[#333333] text-left items-center hover:bg-gray5'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <p className='text-lg font-bold text-[#FF4D00]'>2</p>
          </div>
          <div className='flex items-center justify-between w-full py-5 border-b-1 border-gray-100'>
            <div>
              <h1 className='font-bold'>13, Salami Street</h1>
              <p className='text[#E0E0E0]'>Noah Ayodele - Mende, Lagos</p>
            </div>
            <p className='font-bold text-xl'>10,000</p>
          </div>
        </div>
      </div>

      <button
        className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
        type='submit'
      >
        Continue
      </button>
    </div>
  );
};

export default Quote;
