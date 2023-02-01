import React, { useState } from "react";
import Modal from "react-modal";

import { Header, Recieptlist, Button, NewReciept } from "../components";
import useApi from "../hooks/useApi";
import receiptsApi from "../api/reciepts";
import Loader from "../components/Loader";

const Reciepts = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: receipts, loading } = useApi(receiptsApi.getReceipts);

  if (loading || !receipts) {
    return <Loader />;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const itemStyle = "my-2 font-bold text-lg text-left";

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Test Modal'
      >
        <Button
          bgColor='#001E4A'
          text='Close'
          color='white'
          size='text-sm'
          borderRadius='5px'
          onclick={closeModal}
        />
        <NewReciept />
      </Modal>

      <div className='mt-12'>
        <div className=' flex justify-center'>
          <div className='flex flex-col w-full px-5'>
            <Header category='Page' title='Receipts' />
            <div className='mb-5'>
              <Button
                bgColor='#001E4A'
                text='Create New'
                color='white'
                size='text-md'
                borderRadius='5px'
                onclick={openModal}
              />
            </div>
            <div className='bg-white mt-5 rounded-xl px-6 py-5 w-full'>
              <table className='w-full'>
                <tr>
                  <th>
                    <input type='checkbox' />
                  </th>
                  <th className={itemStyle}>Receipt</th>
                  <th className={itemStyle}>Date & Time</th>
                  <th className={itemStyle}>Shipper</th>
                  <th className={itemStyle}>Specification</th>
                  <th className={itemStyle}>Total</th>
                </tr>
                {receipts.map((item) => (
                  <Recieptlist key={item.id} item={item} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reciepts;
