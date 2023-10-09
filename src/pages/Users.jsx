import React, { useEffect } from "react";
import { Header, Userlist, Button, NewClient } from "../components";
import Modal from "react-modal";
import useApi from "../hooks/useApi";
import customerApi from "../api/customer";
import Loader from "../components/Loader";

const Users = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    data: customers,
    error,
    loading,
    request: loadCustomers,
  } = useApi(customerApi.getCustomers);

  useEffect(() => {
    loadCustomers();
  }, []);

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
          bgColor='black'
          text='Close'
          color='white'
          size='text-md'
          borderRadius='5px'
          onclick={closeModal}
        />
        <NewClient />
      </Modal>

      <div className='w-full px-32 text-center flex mt-36 flex-col justify-center'>
        <div className='my-5 w-full flex items-center justify-end'>
          <Button
            bgColor='#0000'
            text='Create New'
            color='white'
            size='text-md'
            borderRadius='5px'
            onclick={openModal}
          />
        </div>
        <div className='mt-5 w-full flex flex-wrap gap-10 items-center justify-start'>
          {customers.map((item) => (
            <Userlist key={item.fullname} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
