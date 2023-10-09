import React, { useState } from 'react';
import { BackHeader, Button, Quote } from '..';
import Modal from 'react-modal';
import ordersApi from '../../api/orders';
import Loader from '../Loader';

const Shippment = () => {
  const [courier, setCourier] = useState();
  const [bookingType, setBookingType] = useState();
  const [insurance, setInsurance] = useState();
  // const [weight, setWeight] = useState();
  // const [rate, setRate] = useState();
  const [location, setLocation] = useState();
  // const [subTotal, setSubtotal] = useState();
  // const [total, setTotal] = useState();
  const [description, setDescription] = useState();
  const [fishShipment, setFishShipment] = useState();
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
    const sender = JSON.parse(window.sessionStorage.getItem('sender'));
    const receiver = JSON.parse(window.sessionStorage.getItem('receiver'));
    const packages = JSON.parse(window.sessionStorage.getItem('packages'));
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    const body = {
      receiver_name: receiver.receiver_name,
      receiver_address: receiver.receiver_address,
      receiver_phone: receiver.receiver_phone,
      sender_country: sender.sender_country,
      receiver_country: receiver.receiver_country,
      sender_postcode: sender.sender_postcode,
      receiver_postcode: receiver.receiver_postcode,
      sender_city: sender.sender_city,
      receiver_city: receiver.receiver_city,
      sender_state: sender.sender_state,
      sender_country_code: sender.sender_country_code,
      receiver_country_code: receiver.receiver_country_code,
      receiver_state: receiver.receiver_state,
      sender_name: sender.sender_name,
      sender_address: sender.sender_address,
      sender_phone: sender.sender_phone,
      partner: sender.partner,
      tpl_service: courier,
      type: bookingType,
      location,
      // shipment_rate: rate,
      package_insurance: insurance,
      packages,
      order_state: 1,
      booking_state: 1,
      // weight: weight * 1,
      // total: total * 1,
      // sub_total: subTotal * 1,
      // number_of_packages: packages.packages.length,
      description,
      package_value_claim: 0,
      fish_shipment: fishShipment === 'on',
      served_by: `${userData.payload.employee.first_name} ${userData.payload.employee.last_name}`,
      branch_name: `${userData.payload.branch.name}`
    };
    const response = await ordersApi.createOrder(body);
    if (!response.ok) return (setLoading(false), console.log(response.data));
    setQuote(response.data[0].payload);
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
      <div className='flex flex-col justify-evenly w-full h-full px-96 my-5'>
        <BackHeader />
        <form
          onSubmit={handleOnSubmit}
          className='flex flex-col gap-10 mt-10 bg-white p-8 rounded-md justify-center'
        >
          {/* Courier */}

          <div className='w-full'>
            <label>Order Description</label>
            <div className='flex w-full items-center justify-between p-4 rounded-md border border-gray5 text-gray3'>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name='client'
                className='w-full bg-transparent border-0'
                placeholder='Description'
                type='text'
              />
            </div>
          </div>

          {/* <div className='w-full'>
            <label>Weight</label>
            <div className='flex w-full items-center justify-between p-4 rounded-md border border-gray5 text-gray3'>
              <input
                onChange={(e) => setWeight(e.target.value)}
                name='client'
                className='w-full bg-transparent border-0'
                placeholder='Weight'
                type='number'
              />
            </div>
          </div> */}

          {/* <div className='w-full'>
            <label>Sub Total Price</label>
            <div className='flex w-full items-center justify-between p-4 rounded-md border border-gray5 text-gray3'>
              <input
                onChange={(e) => setSubtotal(e.target.value)}
                name='client'
                className='w-full bg-transparent border-0'
                placeholder='Sub Total'
                type='number'
              />
            </div>
          </div>

          <div className='w-full'>
            <label>Total Price</label>
            <div className='flex w-full items-center justify-between p-4 rounded-md border border-gray5 text-gray3'>
              <input
                onChange={(e) => setTotal(e.target.value)}
                name='client'
                className='w-full bg-transparent border-0'
                placeholder='Total'
                type='number'
              />
            </div>
          </div> */}

          <div className='w-full'>
            <label>Courier</label>
            <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
              <select
                onChange={(e) => setCourier(e.target.value)}
                value={courier}
                name='client'
                className='w-full bg-transparent border-0'
              >
                <option value='select'>Courier</option>
                <option value='DHL'>DHL</option>
                <option value='UPS'>UPS</option>
              </select>
            </div>
          </div>

          {/* <div className='w-full'>
            <label>Shipment Rate</label>
            <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
              <select
                onChange={(e) => setRate(e.target.value)}
                name='client'
                className='w-full bg-transparent border-0'
              >
                <option value='select'>Shipment Rate</option>
                <option value='SR'>Standard Rate</option>
                <option value='CR'>Cargo Rate</option>
              </select>
            </div>
          </div> */}

          {/* Type */}
          <div className='w-full'>
            <label>Shipment Type</label>
            <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
              <select
                name='transport'
                className='w-full bg-transparent border-0'
                onChange={(e) => setBookingType(e.target.value)}
                value={bookingType}
              >
                <option value='select'>Shipment Type</option>
                <option value='LC'>Local</option>
                <option value='IN'>International</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className='w-full'>
            <label>Location</label>
            <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
              <select
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                name='client'
                className='w-full bg-transparent border-0'
              >
                <option value='select'>Location</option>
                <option value='US'>USA</option>
                <option value='LND'>London</option>
                <option value='CA'>Canada</option>
                <option value='EUR'>Europe</option>
                <option value='ROU'>Rest Of UK</option>
                <option value='GH'>Ghana</option>
                <option value='ZA'>South Africa</option>
                <option value='WA'>West Africa</option>
                <option value='AUS'>Australia</option>
                <option value='ROW'>Rest Of World</option>
                <option value='IS'>Isreal</option>
                <option value='ME'>Middle East</option>
                <option value='SA'>South America</option>
                <option value='UK'>United Kingdom</option>
                <option value='Z1'>Zone One (Local)</option>
                <option value='Z2'>Zone Two (Local)</option>
                <option value='Z3'>Zone Three (Local)</option>
                <option value='ABT'>Abeokuta (Local)</option>
                <option value='OS'>Osun (Local)</option>
                <option value='ABA'>Aba (Local)</option>
                <option value='ABJ'>Abuja (Local)</option>
                <option value='BAC'>Bauchi (Local)</option>
                <option value='GO'>Gombe (Local)</option>
              </select>
            </div>
          </div>

          {/* Insurance */}
          <div className='w-full'>
            <label>Insurance</label>
            <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
              <select
                onChange={(e) => setInsurance(e.target.value)}
                value={insurance}
                name='client'
                className='w-full bg-transparent border-0'
              >
                <option value='select'>Insurance</option>
                <option value='FR'>Free</option>
                <option value='PM'>Premium</option>
                <option value='SD'>Standard</option>
              </select>
            </div>
          </div>

          <div className='flex items-center w-full my-3'>
            <input
              onChange={(e) => setFishShipment(e.target.value)}
              value={fishShipment}
              type='checkbox'
              name='Fish'
              id='1'
              className='mr-3'
            />
            <label>Fish Shipment</label>
          </div>

          <button
            className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            type='submit'
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Shippment;
