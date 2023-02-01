import React from "react";

const Recieptlist = ({ item }) => {
  const itemStyle = "text-left my-2 font-medium text-sm";
  return (
    <tr className='w-full'>
      <td>
        <input type='checkbox' name='check' />
      </td>
      <td className={itemStyle}>{item.id}</td>
      <td className={itemStyle}>{item.dateAndTime}</td>
      <td className={itemStyle}>{item.shipper}</td>
      <td className={itemStyle}>{item.specification}</td>
      <td className='flex flex-row my-5 items-center'>{item.total}</td>
    </tr>
  );
};

export default Recieptlist;
