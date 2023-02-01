import React, { useState } from "react";
import { Header, Userlist, Button, NewClient } from "../components";
import Modal from "react-modal";
import useApi from "../hooks/useApi";
import customerApi from "../api/customer";
import Loader from "../components/Loader";

const Users = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: customers, loading } = useApi(customerApi.getCustomers);

  if (loading || !customers) {
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
        <NewClient />
      </Modal>

      <div className='mt-12'>
        <div className=' flex justify-center'>
          <div className='flex flex-col w-full px-5'>
            <Header category='Page' title='Customers' />
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
                  <th className={itemStyle}>Type</th>
                  <th className={itemStyle}>Full Name</th>
                  <th className={itemStyle}>Phone Number</th>
                  <th className={itemStyle}>Email</th>
                  <th className={itemStyle}>Address</th>
                  <th className={itemStyle}>Actions</th>
                </tr>
                {customers.map((item) => (
                  <Userlist key={item.fullname} item={item} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
