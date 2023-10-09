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
        <NewInvoice />
      </Modal>

      <div className='w-full px-32 text-center flex flex-col justify-center'>
        <div className='my-5 w-full flex items-center justify-end'>
          <Button
            bgColor='black'
            text='Create New'
            color='white'
            size='text-md'
            borderRadius='5px'
            onclick={openModal}
          />
        </div>
        <div className='mt-5 w-full rounded-lg'>
          <table className='table-auto w-full text-left text-[#1E1E1E]'>
            <thead className='bg-[#F5F5F5]'>
              <tr>
                <th className={itemStyle}>Type</th>
                <th className={itemStyle}>Invoice</th>
                <th className={itemStyle}>Date & Time</th>
                <th className={itemStyle}>Client Name</th>
                <th className={itemStyle}>Shipment</th>
                <th className={itemStyle}>Total</th>
                <th className={itemStyle}>Due Date</th>
                <th className={itemStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((item) => (
                <Invoicelist key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invoice;
