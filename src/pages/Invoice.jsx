import React, { useEffect, useState } from "react";
import { Invoicelist, Header, Button, NewInvoice } from "../components";
import Modal from "react-modal";
import useApi from "../hooks/useApi";
import invoiceApi from "../api/invoice";
import Loader from "../components/Loader";

const Invoice = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    data: invoices,
    loading,
    error,
    request: loadInvoices,
  } = useApi(invoiceApi.getInvoices);

  useEffect(() => {
    loadInvoices();
  }, []);

  if (loading || !invoices) {
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
        <NewInvoice />
      </Modal>
      <div className='mt-12'>
        <div className=' flex justify-center'>
          <div className='flex flex-col w-full px-32'>
            <div className='mb-5'>
              <Button
                bgColor='black'
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
                  <th className={itemStyle}>Type</th>
                  <th className={itemStyle}>Invoice</th>
                  <th className={itemStyle}>Date & Time</th>
                  <th className={itemStyle}>Client Name</th>
                  <th className={itemStyle}>Shipment</th>
                  <th className={itemStyle}>Total</th>
                  <th className={itemStyle}>Due Date</th>
                  <th className={itemStyle}>Status</th>
                </tr>
                {invoices.map((item) => (
                  <Invoicelist key={item.id} item={item} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
