import React from "react";

import logo from "../assets/logo.png";

const Navbar1 = () => {
  const handleOnPressLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      window.localStorage.removeItem("token");
      window.location.replace("/login");
    }
  };

  return (
    <nav className='flex justify-between items-center bg-white px-32 py-5'>
      <a href='/'>
        <img src={logo} alt='logo' className='w-16' />
      </a>
      <ul className='flex items-center justify-center gap-12'>
        <li>
          <a href='/Dashboard' className='hover:text-primary'>
            Home
          </a>
        </li>
        <li>
          <a href='/Orders' className='hover:text-primary'>
            Shipment
          </a>
        </li>
        <li>
          <a href='/Invoice' className='hover:text-primary'>
            Invoice
          </a>
        </li>
        <li>
          <a href='/Reciepts' className='hover:text-primary'>
            Reciept
          </a>
        </li>
        {/* <li>
          <a href='/Users' className='hover:text-primary'>
            Users
          </a>
        </li> */}
      </ul>
      <button
        onClick={handleOnPressLogout}
        className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar1;
