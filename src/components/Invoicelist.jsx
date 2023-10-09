import React from "react";

const Invoicelist = ({ item }) => {
  const itemStyle = "p-5";
  const itemType =
    "capitalize my-2 text-left text-blue-500 font-medium text-sm";

  const Status = ({ status }) => {
    if (status === "Unpaid") {
      return (
        <td className='flex flex-row my-5 items-center'>
          <div className='bg-[#FFB800] w-2 h-2 rounded-xl mr-0.5' />
          <div className='font-medium text-[#FFB800]'>Pending</div>
        </td>
      );
    }
    if (status === "Overdue") {
      return (
        <td className='flex flex-row my-5 items-center'>
          <div className='bg-red-600 w-2 h-2 rounded-xl mr-0.5' />
          <div className='font-medium text-red-700'>Overdue</div>
        </td>
      );
    }
    if (status === "Paid") {
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
      <td className={itemType}>{item.type}</td>
      <td className={itemStyle}>{item.id}</td>
      <td className={itemStyle}>{item.dateAndTime}</td>
      <td className={itemStyle}>{item.clientname}</td>
      <td className={itemStyle}>{item.shipment}</td>
      <td className='flex flex-row my-5 items-center'>{item.total}</td>
      <td className={itemStyle}>{item.due}</td>
      <Status status={item.status} />
    </tr>
  );
};

export default Invoicelist;
