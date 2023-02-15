import React, { useEffect, useState } from 'react';
import { Header, Profile, Password } from '../components';

const Settings = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className='mt-12'>
      <div className=' flex justify-center'>
        <div className='flex flex-col w-full px-5'>
          <Header category='Page' title='Settings' />
          <div className='bg-white mt-5 rounded-xl px-6 py-5 w-full'>
            <div className='flex align-center mx-2'>
              <div
                className={
                  toggle === 1
                    ? 'text-white bg-[#001E4A] py-2 px-3 rounded-md font-bold m-1 cursor-pointer'
                    : 'text-[#001E4A] bg-[#a4dff5] px-3 py-2 font-bold m-1 cursor-pointer rounded-md'
                }
                onClick={() => toggleTab(1)}
              >
                Profile
              </div>

              <div
                className={
                  toggle === 2
                    ? 'text-white bg-[#001E4A] py-2 px-3 rounded-md font-bold m-1 cursor-pointer'
                    : 'text-[#001E4A] bg-[#a4dff5] px-3 py-2 font-bold m-1 cursor-pointer rounded-md'
                }
                onClick={() => toggleTab(2)}
              >
                Password
              </div>
            </div>
            <div>
              <div className={toggle === 1 ? 'block w-full' : 'hidden'}>
                <Profile />
              </div>
              <div className={toggle === 2 ? 'block w-full' : 'hidden'}>
                <Password />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
