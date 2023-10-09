import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { Header, Recieptlist, Button, NewReciept } from "../components";
import useApi from "../hooks/useApi";
import receiptsApi from "../api/reciepts";
import Loader from "../components/Loader";

const Reciepts = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    data: receipts,
    loading,
    error,
    request: loadReceipts,
  } = useApi(receiptsApi.getReceipts);

  useEffect(() => {
    loadReceipts();
  }, []);

  if (loading || !receipts) {
    return <Loader />;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const itemStyle = "p-5";

  return (
    <>
      <Modal isOpen={modalIsOpen} contentLabel='Test Modal'>
        <Button
          bgColor='black'
          text='Close'
          color='white'
          size='text-md'
          borderRadius='5px'
          onclick={closeModal}
        />
        <NewReciept />
      </Modal>

      <div className='w-full px-32 text-center flex flex-col justify-center'>
        <div className='my-5 w-full flex items-center justify-end'>
          <Button
            bgColor='black'
            text='Create'
            color='white'
            size='text-md'
            borderRadius='5px'
            onclick={openModal}
          />
        </div>
        <div className='mt-5 w-full'>
          <table className='table-auto w-full text-left text-[#1E1E1E]'>
            <thead className='bg-[#F5F5F5]'>
              <tr>
                <th className={itemStyle}>Receipt</th>
                <th className={itemStyle}>Date & Time</th>
                <th className={itemStyle}>Shipper</th>
                <th className={itemStyle}>Specification</th>
                <th className={itemStyle}>Total</th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((item) => (
                <Recieptlist key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reciepts;
