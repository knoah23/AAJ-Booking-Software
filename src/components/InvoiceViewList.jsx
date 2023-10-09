import React from "react";

const InvoiceViewList = () => {
  const itemStyle = "p-5";
  return (
    <tr className='w-full'>
      <td className={itemStyle}>23/03/23</td>
      <td className={itemStyle}>LOS - USA (Above 30kg) Gb</td>
      <td className={itemStyle}>Cargo rate</td>
      <td className={itemStyle}>7.5% S</td>
      <td className={itemStyle}>56</td>
      <td className={itemStyle}>3,250.00</td>
      <td className={itemStyle}>182,000.00</td>
    </tr>
  );
};

export default InvoiceViewList;
