import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline, MdContentCopy } from 'react-icons/md';

export default function ActiveBooking ({ item }) {
  const itemStyle = 'text-left my-2 font-medium text-sm';
  const Status = ({ status }) => {
    if (status === 'pending') {
      return (
        <td className='flex flex-row my-5 items-center'>
          <div className='bg-[#FFB800] w-2 h-2 rounded-xl mr-0.5' />
          <div className='font-medium text-[#FFB800]'>Pending</div>
        </td>
      );
    }
    if (status === 'paid') {
      return (
        <td className='flex flex-row my-5 items-center'>
          <div className='bg-[#00FF66] w-2 h-2 rounded-xl mr-0.5' />
          <div className='font-medium text-[#00AB44]'>Paid</div>
        </td>
      );
    }
  };

  return (
    <tr className='w-full'>
      <td>
        <input type='checkbox' name='check' />
      </td>
      <td className={itemStyle}>{item.id}</td>
      <td className={itemStyle}>{item.sender_name}</td>
      <td className={itemStyle}>{item.sender_phone}</td>
      <td className={itemStyle}>{item.sender_address}</td>
      <td className={itemStyle}>{item.receiver_address}</td>
      <Status status={item.booking_state} />
      <td className='text-center'>
        <button>
          <FiEdit2 />
        </button>
        <button>
          <MdContentCopy />
        </button>
        <button>
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
}
