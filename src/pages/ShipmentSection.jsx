import React from 'react';
import { Header, AppForm, Button, Quote } from '../components';
import Modal from 'react-modal';

const ShipmentSection = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal () {
    setIsOpen(true);
    console.log('Modal opened');
  }

  function closeModal () {
    setIsOpen(false);
  }

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
        <Quote />
      </Modal>
      <div className='w-full h-full px-5 my-5'>
        <Header category='Shipment Info' title='Create Order' />

        <div className='flex text-center flex-col justify-evenly'>
          <AppForm>
            {/* Courier */}
            <div className='text-left my-4'>
              <label className='font-bold'>Courier</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='client'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Courier</option>
                  <option value='select'>DHL</option>
                  <option value='select'>UPS</option>
                </select>
              </div>
            </div>

            {/* Type */}
            <div className='text-left my-4'>
              <label className='font-bold'>Booking Type</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='transport'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Booking Type</option>
                  <option value='select'>Local</option>
                  <option value='select'>International</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className='text-left my-4'>
              <label className='font-bold'>Location</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='client'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Location</option>
                  <option value='select'>USA</option>
                  <option value='select'>UK</option>
                  <option value='select'>NIGERIA</option>
                </select>
              </div>
            </div>

            {/* Rate */}
            <div className='text-left my-4'>
              <label className='font-bold'>Rate</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='client'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Rate</option>
                  <option value='select'>USA</option>
                  <option value='select'>FISH</option>
                </select>
              </div>
            </div>

            {/* Insurance */}
            <div className='text-left my-4'>
              <label className='font-bold'>Insurance</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='client'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Insurance</option>
                  <option value='select'>Free</option>
                  <option value='select'>Premium</option>
                  <option value='select'>Standard</option>
                </select>
              </div>
            </div>

            {/* Payment */}
            <div className='text-left my-4'>
              <label className='font-bold'>Payment Type</label>
              <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
                <select
                  name='client'
                  className='w-full bg-transparent border-0'
                >
                  <option value='select'>Payment Type</option>
                  <option value='select'>CASH</option>
                  <option value='select'>POS</option>
                  <option value='select'>TRANSFER</option>
                </select>
              </div>
            </div>

            <Button
              bgColor='#001E4A'
              text='Create'
              color='white'
              size='text-md'
              borderRadius='5px'
              onclick={openModal}
            />
          </AppForm>
        </div>
      </div>
    </>
  );
};

export default ShipmentSection;
