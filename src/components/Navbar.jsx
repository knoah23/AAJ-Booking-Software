import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";

import { Notification, UserProfile } from ".";

import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='orange'
        icon={<AiOutlineMenu />}
      />

      {/* <div className='flex'>
        <NavButton
          dotColor='#FF0000'
          title='Notification'
          customFunc={() => handleClick("notification")}
          color='orange'
          icon={<GrNotification />}
        />
        <TooltipComponent position='BottomCenter' content='Profile'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg '
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt='profile' className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{" "}
              <span className='text-gray-00 font-bold ml-1 text-14'>Noah</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 tet-14' />
          </div>
        </TooltipComponent>

        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div> */}
    </div>
  );
};

export default Navbar;
