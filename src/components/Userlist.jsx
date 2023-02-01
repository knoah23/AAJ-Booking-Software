import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline, MdContentCopy } from "react-icons/md";

const Userlist = ({ item }) => {
  const itemStyle = "text-left my-2 font-medium text-sm";
  const itemType = "text-left my-2 font-medium text-sm text-blue-400";

  return (
    <tr className='w-full'>
      <td>
        <input type='checkbox' name='check' />
      </td>
      <td className={itemType}>{item.type}</td>
      <td className={itemStyle}>{item.fullname}</td>
      <td className={itemStyle}>{item.phone}</td>
      <td className={itemStyle}>{item.email}</td>
      <td className={itemStyle}>{item.address}</td>
      <td className='text-center flex flex-row my-5'>
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
};

export default Userlist;
