import React from 'react';
import { AppForm, AppFormField } from '..';

const NewOrders = () => {
  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <AppForm>
        {/* Clients */}
        <div className='text-left my-4'>
          <label className='font-bold'>Client</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Client Name</option>
              <option value='select'>Noah Ayodele</option>
              <option value='select'>David Omokanye</option>
            </select>
          </div>
        </div>

        <AppFormField name='origin' title='Origin' type='text' />
        <AppFormField name='destination' title='Destination' type='text' />

        {/* Category */}
        <div className='text-left my-4'>
          <label className='font-bold'>Category</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select
              name='categories'
              className='w-full bg-transparent border-0'
            >
              <option value='select'>Category</option>
              <option value='select'>Plumbing</option>
              <option value='select'>Domestic</option>
            </select>
          </div>
        </div>

        <AppFormField name='specification' title='Specification' type='text' />

        {/* Branch */}
        <div className='text-left my-4'>
          <label className='font-bold'>Branch</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Branch</option>
              <option value='select'>GB-Branch</option>
              <option value='select'>YB-Branch</option>
              <option value='select'>AG-Branch</option>
              <option value='select'>IK-Branch</option>
            </select>
          </div>
        </div>

        {/* Courier */}
        <div className='text-left my-4'>
          <label className='font-bold'>Courier</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select name='transport' className='w-full bg-transparent border-0'>
              <option value='select'>Courier</option>
              <option value='select'>DHL</option>
              <option value='select'>UPS</option>
            </select>
          </div>
        </div>

        {/* Payment */}
        <div className='text-left my-4'>
          <label className='font-bold'>Payment Type</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select name='payment' className='w-full bg-transparent border-0'>
              <option value='select'>Payment Type</option>
              <option value='select'>Cash</option>
              <option value='select'>Transfer</option>
              <option value='select'>POS</option>
            </select>
          </div>
        </div>
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Create
        </button>
      </AppForm>
    </div>
  );
};

export default NewOrders;
