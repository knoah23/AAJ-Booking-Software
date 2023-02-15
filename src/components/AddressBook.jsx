import React from "react";

import { BiChevronRight } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";

const AddressBook = () => {
  return (
    <a
      href='/'
      className='flex gap-6 text-[#333333] text-left items-center hover:bg-gray5'
    >
      <AiFillClockCircle size={25} />
      <div className='flex items-center justify-between w-full py-5 border-b-1 border-gray-100'>
        <div>
          <h1 className='font-bold'>13, Salami Street</h1>
          <p className='text[#E0E0E0]'>Noah Ayodele - Mende, Lagos</p>
        </div>
        <BiChevronRight size={20} />
      </div>
    </a>
  );
};

export default AddressBook;
