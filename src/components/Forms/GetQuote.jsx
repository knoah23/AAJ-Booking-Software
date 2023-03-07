import React from 'react';

const GetQuote = () => {
  return (
    <form className='flex flex-col gap-10 mt-10 bg-white p-8 rounded-md justify-center'>
      <div className='flex gap-6'>
        <div className='w-full'>
          <label>From</label>
          <div className='flex w-full items-center justify-between  p-3 rounded-md border border-gray5 text-gray3'>
            <select
              name='client'
              className='bg-transparent border-0 w-full focus:outline-none'
            >
              <option value='select'>Location</option>
              <option value='select'>USA</option>
              <option value='select'>UK</option>
              <option value='select'>NIGERIA</option>
            </select>
          </div>
        </div>

        <div className='w-full'>
          <label>To</label>
          <div className='flex w-full items-center justify-between  p-3 rounded-md border border-gray5 text-gray3'>
            <select
              name='client'
              className=' bg-transparent border-0 w-full focus:outline-none'
            >
              <option value='select'>Location</option>
              <option value='select'>USA</option>
              <option value='select'>UK</option>
              <option value='select'>NIGERIA</option>
            </select>
          </div>
        </div>
      </div>

      <div className='flex gap-6 items-center'>
        <div>
          <label>Actual Weight (kg)</label>
          <input
            type='text'
            className='w-full p-3 rounded-md border border-gray5 text-gray3'
          />
        </div>

        <div>
          <label>Dimensional Weight (kg)</label>
          <input
            type='text'
            className='w-full p-3 rounded-md border border-gray5 text-gray3'
          />
        </div>
      </div>

      <div>
        <div className='w-full'>
          <label>Total Value</label>
          <input
            type='text'
            className='w-full p-3 rounded-md border border-gray5 text-gray3'
          />
        </div>
      </div>

      <div className='w-full'>
        <label>Delivery rate</label>
        <div className='flex w-full items-center justify-between  p-3 rounded-md border border-gray5 text-gray3'>
          <select
            name='client'
            className=' bg-transparent border-0 w-full focus:outline-none'
          >
            <option value='select'>International</option>
            <option value='select'>National</option>
          </select>
        </div>
      </div>

      <input
        type='submit'
        value='Get Quote'
        className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
      />
    </form>
  );
};

export default GetQuote;
