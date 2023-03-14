import React from "react";
import InvoiceViewList from "../components/InvoiceViewList";

import { Button } from "../components";

const InvoiceView = () => {
  const itemStyle = "p-5 text-orange-500";
  return (
    <div className='w-full px-32 text-center mt-20 flex flex-col justify-center'>
      <div className='mb-12 w-full flex items-center justify-between'>
        <h1 className='font-bold text-3xl '>Invoice (invoice ID)</h1>
        <Button
          bgColor='black'
          text='Download PDF'
          color='white'
          size='text-md'
          borderRadius='5px'
        />
      </div>

      <div className='px-8 py-10 bg-white rounded-2xl'>
        <div>
          <div className='flex items-center justify-between'>
            <img
              src='https://i.postimg.cc/Bb8vH0Ry/AAJ-EXPRESS444-2.png'
              alt='Logo'
            />
            <div className='text-left w-96'>
              <h1 className='font-bold'>AAJ EXPRESS LOGISTIC LTD</h1>
              <p>
                13 Oguntona Crescent Gbagada, Lagos 100001 NG +234 9088991086
                support@aajexpress.org aajexpress.org VAT 7.5
              </p>
            </div>
          </div>
          <h1 className='font-medium text-orange-500 text-3xl text-left mt-20'>
            Shipping invoice
          </h1>
          <div className='flex items-center justify-center gap-12 text-left'>
            <div>
              <h1 className='text-gray-300'>BILL TO</h1>
              <p>
                ADEBISI OLURIN 22901 RICHTON PARK IL 60471 UNITED STATES.
                +17088647903
              </p>
            </div>
            <div>
              <h1 className='text-gray-300'>SHIP TO</h1>
              <p>
                ADEBISI OLURIN 22901 RICHTON PARK IL 60471 UNITED STATES.
                +17088647903
              </p>
            </div>

            <div>
              <div className='flex items-center justify-between '>
                <h1 className='text-gray-300'>SHIP DATE</h1>
                <p>02/22/2023</p>
              </div>

              <div className='flex items-center justify-between'>
                <h1 className='text-gray-300'>SHIP VIA</h1>
                <p className='text-right'>UPS</p>
              </div>

              <div className='flex items-center justify-between gap-10'>
                <h1 className='text-gray-300'>TRACKING#</h1>
                <p className='text-right'>1Z7977E00477705534</p>
              </div>
            </div>

            <div className='my-16'>
              <div className='flex items-center justify-between gap-10'>
                <h1 className='text-gray-300'>INVOICE</h1>
                <p className='text-right'>9542</p>
              </div>
              <div className='flex items-center justify-between gap-10'>
                <h1 className='text-gray-300'>DATE</h1>
                <p className='text-right'>02/24/2023</p>
              </div>
            </div>
          </div>

          <table className='table-fixed mb-14 w-full text-left text-[#1E1E1E] border-dashed border-gray-200 border-b-1'>
            <thead className='bg-orange-100'>
              <tr>
                <th className={itemStyle}>DATE</th>
                <th className={itemStyle}>CATEGORY</th>
                <th className={itemStyle}>DESTINATION</th>
                <th className={itemStyle}>VAT</th>
                <th className={itemStyle}>WEIGHT(KG)</th>
                <th className={itemStyle}>RATE</th>
                <th className={itemStyle}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <InvoiceViewList />
            </tbody>
          </table>

          <div className='flex items-center justify-between mb-20'>
            <div className='text-gray-500 flex flex-col text-left gap-10'>
              <p>
                Name: AAJ EXPRESS LOGISTICS LTD Account No: 0123986904 Bank:
                Wema Bank Plc
              </p>
              <p>Thank you for shipping with us.</p>
              <p>
                UPS tracking url : ups.com/track DHL tracking url: dhl.com/track
              </p>
            </div>

            <div className='w-96'>
              <div className='mb-8 border-dashed border-b-1 border-gray-300 pb-4'>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-300'>SUBTOTAL</p>
                  <p>182,900.00</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-300'>TAX</p>
                  <p>13,650.00</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-300'>TOTAL</p>
                  <p>196,550.00</p>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-gray-300'>BALANCE DUE</p>
                <p className='font-bold text-2xl'>196,550.00</p>
              </div>
            </div>
          </div>

          <div className='p-4 text-left bg-orange-100 rounded-lg flex flex-col gap-8 mb-30'>
            <p>
              Custom duties and taxes may apply to your items in the destination
              country. AAJ has no control over these charges as these tariffs
              are determined by the customs of the destination country and
              payable only by the receiver.
            </p>
            <p>
              AAJ shall not be responsible for any delays arising from customs
              border control. The shipper and receiver are responsible for
              providing all documentation needed for customs clearance. In the
              event the shipper or receiver fails to provide this, the shipper
              will be charged for the return of the shipment to the origin.
            </p>
            <p>
              AAJ shall not be liable for confiscation or destruction of illegal
              or illicit items such as copied or unauthorized designer brands
              and other illegal items defined by the destination country's
              government agencies.
            </p>
          </div>

          <p className='text-gray-300 text-xl mt-28 text-left'>
            Shipper agrees to the AAJ Express Logistics terms found at
            www.aajexpress.org and AAJ Express service centers. Page 1 of 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
