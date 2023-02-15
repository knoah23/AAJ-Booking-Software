import React, { useState } from "react";
import ReactSwap from "react-swap";
import { AppForm, AppFormField } from "..";
import * as yup from "yup";

import { BiSearch } from "react-icons/bi";
import AddressBook from "../AddressBook";
import { IoMdAdd } from "react-icons/io";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const validationSchema = yup.object().shape({
  senderName: yup.string().required(),
  senderPhoneNumber: yup.string().required(),
  senderAddress: yup.string().required(),
  receiverName: yup.string().required(),
  receieverPhoneNumber: yup.string().required(),
  receiverAddress: yup.string().required(),
});

const Customer = () => {
  const [value, setValue] = useState();
  const [partner, setPartner] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.value === "on") return setPartner(true);
    return setPartner(false);
  };

  const handleOnSubmit = ({
    senderName,
    senderPhoneNumber,
    senderAddress,
    receieverPhoneNumber,
    receiverAddress,
    receiverName,
  }) => {
    const body = {
      receiver_name: receiverName,
      receiver_phone: receieverPhoneNumber,
      receiver_address: receiverAddress,
      sender_name: senderName,
      sender_phone: senderPhoneNumber,
      sender_address: senderAddress,
      partner: partner,
    };
    window.sessionStorage.setItem("customerInfo", JSON.stringify(body));
    window.location.replace("/packagesection");
  };

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <AppForm
        initialValues={{
          senderName: "",
          senderPhoneNumber: "",
          senderAddress: "",
          receiverName: "",
          receieverPhoneNumber: "",
          receiverAddress: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <ReactSwap>
          {/* Old Customer */}
          <div className='text-left flex gap-10 flex-col'>
            <div className='w-full flex items-center gap-4 p-4 rounded-md border border-gray5 text-gray3'>
              <BiSearch size={20} className='text-[#BDBDBD]' />
              <input
                type='text'
                placeholder='Search'
                className='w-full bg-transparent focus:outline-none'
              />
            </div>
            <div
              data-swap-handler
              className='flex items-center text-left justify-between w-full rounded-lg p-5 bg-gray-100 hover:bg-gray-300'
            >
              <div>
                <h1 className='font-bold'>New Customer</h1>
                <p>Add new address book</p>
              </div>
              <IoMdAdd size={20} />
            </div>

            <div>
              <h1 className='text-[#FF4D00] text-xl mb-2'>Address Books</h1>
              <AddressBook />
            </div>
          </div>
          {/* New Customer */}
          <div className='flex flex-col gap-10'>
            <div
              data-swap-handler
              className='bg-[#FF4D00] text-center justify-center text-white w-20 px-4 py-2 rounded-md cursor-pointer flex items-center gap-2'
            >
              Back
            </div>
            <AppFormField name='senderName' title='SenderName' type='text' />

            <AppFormField
              name='senderAddress'
              title='Sender Street Address'
              auto={"address-line1"}
              type='text'
            />

            <div className='flex gap-6 text-left'>
              <div className='w-full'>
                <label>City</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='city'
                    className='bg-transparent border-0 w-full focus:outline-none'
                  >
                    <option value='select'>Location</option>
                    <option value='select'>Lagos</option>
                    <option value='select'>Abia</option>
                    <option value='select'>Gbagada</option>
                  </select>
                </div>
              </div>

              <div className='w-full'>
                <label>State</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='client'
                    className=' bg-transparent border-0 w-full focus:outline-none'
                  >
                    <option value='select'>Location</option>
                    <option value='select'>USA</option>
                    <option value='select'>UK</option>
                    <option value='select'>NIGERIA</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='flex gap-6 items-center text-left'>
              <div className='w-full'>
                <label>Country</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='country'
                    className='bg-transparent border-0 w-full focus:outline-none'
                  >
                    <option value='select'>Location</option>
                    <option value='select'>Lagos</option>
                    <option value='select'>Abia</option>
                    <option value='select'>Gbagada</option>
                  </select>
                </div>
              </div>

              <AppFormField name='postal' title='Postal Code' type='text' />
            </div>

            {/* <AppFormField
  name='senderPhoneNumber'
  title='Sender Phone Number'
  type='tel'
/> */}

            <PhoneInput
              className='w-full p-4 rounded-md border border-gray5 text-gray3 focus:outline-none'
              placeholder='Enter phone number'
              value={value}
              onChange={setValue}
            />
            <div className='flex items-center w-full my-3'>
              <input type='checkbox' name='Save' id='1' className='mr-3' />
              <label>Save to address box</label>
            </div>
            <button
              className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
              type='submit'
            >
              Continue
            </button>
          </div>
          ;
        </ReactSwap>
        {/* <h2 className='font-bold '>Reciever</h2>
        <AppFormField name='receiverName' title='Reciever Name' type='text' />
        <AppFormField
          name='receieverPhoneNumber'
          title='Reciever Phone Number'
          type='tel'
        />
        <AppFormField
          name='receiverAddress'
          title='Reciever Address'
          type='text'
        /> */}

        {/* <div className='flex items-center w-full my-3'>
          <input
            type='checkbox'
            name='Partner'
            id='1'
            className='mr-3'
            onChange={handleOnChange}
          />
          <label className='font-bold'>Partner</label>
        </div> */}
      </AppForm>
    </div>
  );
};

export default Customer;
