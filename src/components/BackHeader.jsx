import React from "react";
import { useNavigate } from "react-router-dom";

const BackHeader = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className='w-full py-4 flex items-start'>
      <div
        onClick={goBack}
        className='bg-[#FF4D00] text-center justify-center text-white w-20 px-4 py-2 rounded-md cursor-pointer flex items-center gap-2'
      >
        Cancel
      </div>
    </div>
  );
};

export default BackHeader;
