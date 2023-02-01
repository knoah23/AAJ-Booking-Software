import React, { useState } from 'react';
import { Header, AppForm, Button, Quote, AppFormField } from '..';
import Modal from 'react-modal';
import ordersApi from '../../api/orders';
import Loader from '../Loader';

const Shippment = () => {
  const [courier, setCourier] = useState();
  const [bookingType, setBookingType] = useState();
  const [location, setLocation] = useState();
  const [insurance, setInsurance] = useState();
  const [paymentType, setPaymentType] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  function openModal () {
    setIsOpen(true);
  }

  function closeModal () {
    setIsOpen(false);
  }

  const handleOnSubmit = async () => {
    setLoading(true);
    const customerInfo = JSON.parse(window.sessionStorage.getItem('customerInfo'));
    const packages = JSON.parse(window.sessionStorage.getItem('packages'));
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    const body = {
      receiver_name: customerInfo.receiver_name,
      receiver_address: customerInfo.receiver_address,
      receiver_phone: customerInfo.receiver_phone,
      sender_name: customerInfo.sender_name,
      sender_address: customerInfo.sender_address,
      sender_phone: customerInfo.sender_phone,
      partner: customerInfo.partner,
      tpl_service: courier,
      type: bookingType,
      location,
      // shipment_rate: rate,
      package_insurance: insurance,
      payment_type: paymentType,
      packages,
      served_by: `${userData.payload.employee.first_name} ${userData.payload.employee.last_name}`,
      branch_name: `${userData.payload.branch.name}`
    };
    const response = await ordersApi.createOrder(body);
    if (!response.ok) return (setLoading(false), console.log(response.data));
    setQuote(response.data[0].payload.quote);
    setLoading(false);
    openModal();
  };

  if (loading) {
    return <Loader />;
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
        <Quote data={quote} />
      </Modal>
      <div className='flex flex-col justify-evenly w-full h-full px-5 my-5'>
        <Header category='Shipment Info' title='Create Order' />
        <form
          onSubmit={handleOnSubmit}
        >
          {/* Courier */}
          <div className='text-left my-4'>
            <label className='font-bold'>Courier</label>
            <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
              <select onChange={(e) => setCourier(e.target.value)} name='client' className='w-full bg-transparent border-0'>
                <option value='select'>Courier</option>
                <option value='DHL'>DHL</option>
                <option value='UPS'>UPS</option>
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
                onChange={(e) => setBookingType(e.target.value)}
              >
                <option value='select'>Booking Type</option>
                <option value='LC'>Local</option>
                <option value='IN'>International</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className='text-left my-4'>
            <label className='font-bold'>Location</label>
            <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
              <select onChange={(e) => setLocation(e.target.value)} name='client' className='w-full bg-transparent border-0'>
                <option value='select'>Location</option>
                <option value='US'>USA</option>
                <option value='LND'>London</option>
                <option value='CA'>Canada</option>
              </select>
            </div>
          </div>

          {/* Rate */}
          {/* <div className='text-left my-4'>
            <label className='font-bold'>Rate</label>
            <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
              <select onChange={(e) => setRate(e.target.value)} name='client' className='w-full bg-transparent border-0'>
                <option value='select'>Rate</option>
                <option value='SR'>Standard Rate</option>
                <option value='CR'>Cargo Rate</option>
              </select>
            </div>
          </div> */}

          {/* Insurance */}
          <div className='text-left my-4'>
            <label className='font-bold'>Insurance</label>
            <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
              <select onChange={(e) => setInsurance(e.target.value)} name='client' className='w-full bg-transparent border-0'>
                <option value='select'>Insurance</option>
                <option value='FR'>Free</option>
                <option value='PM'>Premium</option>
                <option value='SD'>Standard</option>
              </select>
            </div>
          </div>

          {/* Payment */}
          <div className='text-left my-4'>
            <label className='font-bold'>Payment Type</label>
            <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
              <select onChange={(e) => setPaymentType(e.target.value)} name='client' className='w-full bg-transparent border-0'>
                <option value='select'>Payment Type</option>
                <option value='CASH'>CASH</option>
                <option value='POS'>POS</option>
                <option value='TRANSFER'>TRANSFER</option>
              </select>
            </div>
          </div>

          <button
            className='text-white w-full bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
            type='submit'
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default Shippment;
