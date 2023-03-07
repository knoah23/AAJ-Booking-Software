import React from "react";

const Userlist = ({ item }) => {
  return (
    <div className='p-4 bg-white rounded-lg w-1/3'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-2xl text-gray-1'>{item.fullname}</h1>
          <p className='text-xl text-gray-400'>{item.phone}</p>
        </div>
        <p className='p-2 text-center rounded-md bg-[#FFF6D7] text-[#FFC700]'>
          {item.type}
        </p>
      </div>
      <div className='item-center flex justify-between'>
        <h1>{item.address}</h1>
        <div className='flex gap-4 items-center'>
          <button className='bg-[#0066FF] hover:bg-[#024ec0] text-white p-2 w-fit rounded'>
            Edit
          </button>
          <button className='bg-[#E30000] hover:bg-[#a30000] text-white p-2 w-fit rounded'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
