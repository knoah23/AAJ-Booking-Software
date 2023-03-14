import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { FiArrowDownLeft } from 'react-icons/fi';
import ordersApi from '../api/orders';
import Loader from './Loader';

const Quote = ({ data }) => {
  const [isSender, setSender] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sender = JSON.parse(window.sessionStorage.getItem('sender'));
  const receiver = JSON.parse(window.sessionStorage.getItem('receiver'));
  const quote = data.quote;

  const handleOnProcess = async () => {
    setLoading(true);
    quote.bill_to = isSender ? sender.id : receiver.id;
    const response = await ordersApi.processOrder(data.order.id, quote);
    if (!response.ok) return console.log(response.data);
    setIsModalOpen(false);
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  const handleOnCancel = async () => {
    setLoading(true);
    const response = await ordersApi.deleteOrder(data.order.id);
    if (!response.ok) return console.log(response.data);
    setLoading(false);
    window.alert('Order canceled successfully');
    window.location.replace('/orders');
  };

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div className='w-full h-full items-center justify-center flex flex-col'>
          <p className='font-bold text-3xl mb-10'>Bill To:</p>
          <span className='flex items-center gap-5'>
            <button
              onClick={handleOnProcess}
              className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            >
              <p>Sender: {sender.sender_name}</p>
            </button>
            <button
              onClick={() => (setSender(false), handleOnProcess())}
              className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            >
              <p>Receiver: {receiver.receiver_name}</p>
            </button>
          </span>
        </div>
      </ReactModal>
      <div className='flex bg-white p-10 gap-10 text-center flex-col rounded-lg mt-6'>
        <div className='pb-6 border-b-1 border-[#E0E0E0]'>
          <h1 className='font-bold text-4xl'>
            {quote.total}
            <span className='text-sm text-[#FF4D00]'>NGN</span>
          </h1>
          <p className='text-[#E0E0E0] '>
            {quote.weight} | #{quote.order} |{' '}
            {quote.rate === 'SR' ? 'Standard Rate' : 'Cargo Rate'}
          </p>
        </div>

        <div className='flex gap-4 flex-col'>
          <h1 className='text-left font-bold text-2xl'>Ship To</h1>
          <div className='flex items-center gap-6 text-left w-full py-5 border-b-1 border-gray-100'>
            <div className='flex justify-center items-center bg-gray-200 rounded-full w-16 h-16'>
              <FiArrowDownLeft size={30} color='#FF4D00' />
            </div>
            <div>
              {/* <h1 className='font-bold'>Nathaniel Omokanye</h1> */}
              <p className='text-[#E0E0E0]'>{quote.ship_to}</p>
            </div>
          </div>
        </div>

        <div className='py-8 w-full'>
          <div className='flex items-center justify-between py-4 border-b-1 border-gray-200'>
            <p className='text-xl'>
              Tax <span className='italic'>(VAT 7.5)</span>
            </p>
            <p className='font-bold text-xl'>{quote.tax}</p>
          </div>
          <div className='flex items-center justify-between py-4 border-b-1 border-gray-200'>
            <p className='text-xl'>Subtotal</p>
            <p className='font-bold text-xl'>{quote.sub_total}</p>
          </div>
          <div className='flex items-center justify-between py-4'>
            <p className='text-xl'>Total</p>
            <p className='font-bold text-xl'>{quote.total}</p>
          </div>
        </div>

        <div className='flex items-center gap-10'>
          <button
            className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            type='button'
          >
            Edit Order
          </button>
          <button
            className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            type='button'
            onClick={handleOnCancel}
          >
            Cancel Order
          </button>
          <button
            className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            type='button'
            onClick={() => setIsModalOpen(true)}
          >
            Process Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
