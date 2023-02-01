import React, { useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import customerApi from '../../api/customer';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
  credit: yup.number().required()
});

const NewClient = () => {
  const [created, setCreated] = useState(false);

  const handleOnSubmit = async ({ name, address, phoneNumber, city, state, country, credit }) => {
    const body = {
      full_name: name,
      address: address,
      phone_number: phoneNumber,
      city: city,
      state: state,
      country: country,
      credit: credit
    };

    const response = await customerApi.createCustomer(body);
    if (!response.ok) return console.log(response.data);
    setCreated(true);
  };

  if (created) {
    window.alert('Receipt Created Successfully');
  }

  return (
    <div className='flex text-center flex-col justify-evenly'>
      <AppForm
        initialValues={{
          name: '',
          address: '',
          phoneNumber: '',
          city: '',
          state: '',
          country: '',
          credit: 0
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='name' title='Full Name' type='name' />
        <AppFormField name='phoneNumber' title='Phone Number' />
        <AppFormField name='address' title='Address' />
        <AppFormField name='city' title='City' type='text' />
        <AppFormField name='state' title='State' type='text' />
        <AppFormField name='country' title='Country' type='text' />
        <AppFormField name='credit' title='Credit' type='number' />
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Create
        </button>
      </AppForm>
    </div>
  );
};

export default NewClient;
