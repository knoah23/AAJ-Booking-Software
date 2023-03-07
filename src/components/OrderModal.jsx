import React from 'react';

import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const OrderModal = ({ data, handleOnClose }) => {
  return (
    <div className='flex bg-white p-10 gap-10 text-center flex-col rounded-lg mt-6'>
      <div className='pb-6 border-b-1 border-[#E0E0E0]'>
        <h1 className='font-bold text-4xl'>
          {data.total}
          <span className='text-sm text-[#FF4D00]'>NGN</span>
        </h1>
        <p className='text-[#828282] '>
          {data.weight}kg | #{data.id} | {data.shipment_rate === 'CR' && 'Cargo Rate'}
        </p>
      </div>

      <div className='flex gap-4 flex-col'>
        <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <FiArrowUpRight size={30} color='#FF4D00' />
          </div>
          <div>
            <h1 className='font-bold'>{data.sender_name}</h1>
            <p className='text-[#828282]'>
              {data.sender_address} {data.sender_city} {data.sender_country} {data.sender_postcode} | {data.sender_country_code}{data.sender_phone}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
          <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
            <FiArrowDownLeft size={30} color='#FF4D00' />
          </div>
          <div>
            <h1 className='font-bold'>{data.receiver_name}</h1>
            <p className='text-[#828282]'>
              {data.receiver_address} {data.receiver_city} {data.receiver_country} {data.receiver_postcode} | {data.receiver_country_code}{data.receiver_phone}
            </p>
          </div>
        </div>
      </div>

      <div className='text-left'>
        <h1 className='text-xl text-[#FF4D00]'>Items</h1>

        {data.packages.map(item => (
          <div key={item.actualWeight} className='flex gap-6 text-[#333333] text-left items-center'>
            <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
              <p className='text-lg font-bold text-[#FF4D00]'>{item.items.length}</p>
            </div>
            <div className='flex items-center justify-between w-full py-5 border-b-1 border-gray-100'>
              <div>
                <h1 className='font-bold'>{item.description}</h1>
                <p className='text-[#828282]'>{item.category} | {item.dimensionWeight}kg</p>
              </div>
              <p className='font-bold text-xl'>{item.itemsValue.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</p>
            </div>
          </div>
        ))}

      </div>

      <button
        className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
        type='submit'
        onClick={handleOnClose}
      >
        Close
      </button>
    </div>
  );
};

export default OrderModal;
