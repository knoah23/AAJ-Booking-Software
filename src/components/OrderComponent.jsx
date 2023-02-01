import React from 'react';
import { GrLocation } from 'react-icons/gr';

export default function OrderComponent ({ item }) {
  const global = 'flex h-full flex-col justify-between';
  const address = 'flex flex-row items-center justify-center';

  const getStatus = (status) => {
    switch (status) {
      case 'pending':
        return '#FFB800';
      case 'active':
        return '#00AB44';
      case 'complete':
        return '#0066FF';
      default:
        return '#00AB44';
    }
  };

  const color = getStatus(item.status);

  return (
    <div
      className={`flex flex-row h-52 w-full bg-white items-center justify-between p-5 rounded-xl shadow-lg mb-5 border-l-8 border-[${color}]`}
    >
      <div className={global}>
        <div className='flex flex-row items-center justify-center'>
          <p className='mr-2 font-bold'>{item.id}</p>
          <p
            className={`capitalize ml-2 px-2 py-1 bg-[${color}] text-black`}
          >
            {item.booking_state}
          </p>
        </div>
        <div>
          <p className='font-bold'>Category</p>
          <p>{item.category}</p>
        </div>
      </div>
      <div className={`${global} items-start`}>
        <div className={address}>
          <GrLocation />
          <p className='font-bold'>Sender:</p>
          <p className='ml-2 font-bold'>{item.sender_address}</p>
        </div>
        <div className={address}>
          <GrLocation />
          <p className='font-bold'>Reciever:</p>
          <p className='ml-2 font-bold'>{item.receiver_address}</p>
        </div>
      </div>
      <div className={global}>
        <div>
          <p className='font-bold'>Specification</p>
          <p>{item.weight}</p>
        </div>
        <div>
          <p className='font-bold'>Courier</p>
          <p>{item.tpl_service}</p>
        </div>
      </div>
      <div className={global}>
        <p className='font-bold text-xl'>₦{item.price}</p>
        <div>
          <p className='font-bold'>Payment Type</p>
          <p>{item.paymentType}</p>
        </div>
        <div>
          <p className='font-bold'>Client</p>
          <p>{item.sender_name}</p>
        </div>
      </div>
    </div>
  );
}
