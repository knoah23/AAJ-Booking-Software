import React from "react";

const Recieptlist = ({ item }) => {
  const itemStyle = "p-5";
  return (
    <tr className='w-full'>
      <td className={itemStyle}>{item.id}</td>
      <td className={itemStyle}>{item.dateAndTime}</td>
      <td className={itemStyle}>{item.shipper}</td>
      <td className={itemStyle}>{item.specification}</td>
      <td className={itemStyle}>{item.total}</td>
    </tr>
  );
};

export default Recieptlist;
