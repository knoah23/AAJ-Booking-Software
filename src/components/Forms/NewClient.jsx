import React, { useState } from "react";
import { AppForm, AppFormField } from "..";
import * as yup from "yup";
import customerApi from "../../api/customer";
import PhoneInput from "react-phone-number-input";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  credit: yup.number().required(),
});

const NewClient = () => {
  const [created, setCreated] = useState(false);
  const [value, setValue] = useState();

  const handleOnSubmit = async ({
    name,
    address,
    phoneNumber,
    city,
    state,
    country,
    credit,
  }) => {
    const body = {
      full_name: name,
      address: address,
      phone_number: phoneNumber,
      city: city,
      state: state,
      country: country,
      credit: credit,
    };

    const response = await customerApi.createCustomer(body);
    if (!response.ok) return console.log(response.data);
    setCreated(true);
  };

  if (created) {
    window.alert("Receipt Created Successfully");
  }

  return (
    <div className='flex text-center flex-col justify-evenly'>
      <h1 className='font-bold text-3xl'>New Customer</h1>
      <AppForm
        initialValues={{
          name: "",
          address: "",
          phoneNumber: "",
          city: "",
          state: "",
          country: "",
          credit: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <div className='flex flex-col gap-10'>
          <AppFormField name='senderName' title='Full Name' type='text' />

          <AppFormField
            name='senderAddress'
            title='Address line'
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
          <AppFormField
            name='receiverAddress'
            title='Email Address'
            type='email'
          />

          <button
            className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
            type='submit'
          >
            Continue
          </button>
        </div>
      </AppForm>
    </div>
  );
};

export default NewClient;
