import React, { useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  senderName: yup.string().required(),
  senderPhoneNumber: yup.string().required(),
  senderAddress: yup.string().required(),
  receiverName: yup.string().required(),
  receieverPhoneNumber: yup.string().required(),
  receiverAddress: yup.string().required()
});

const Customer = () => {
  const [partner, setPartner] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.value === 'on') return setPartner(true);
    return setPartner(false);
  };

  const handleOnSubmit = ({ senderName, senderPhoneNumber, senderAddress, receieverPhoneNumber, receiverAddress, receiverName }) => {
    const body = {
      receiver_name: receiverName,
      receiver_phone: receieverPhoneNumber,
      receiver_address: receiverAddress,
      sender_name: senderName,
      sender_phone: senderPhoneNumber,
      sender_address: senderAddress,
      partner: partner
    };
    window.sessionStorage.setItem('customerInfo', JSON.stringify(body));
    window.location.replace('/packagesection');
  };

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <AppForm
        initialValues={{
          senderName: '',
          senderPhoneNumber: '',
          senderAddress: '',
          receiverName: '',
          receieverPhoneNumber: '',
          receiverAddress: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <h2 className='font-bold '>Sender</h2>
        <AppFormField name='senderName' title='Sender Name' type='text' />
        <AppFormField
          name='senderPhoneNumber'
          title='Sender Phone Number'
          type='tel'
        />
        <AppFormField
          name='senderAddress'
          title='Sender Address'
          type='text'
        />
        <h2 className='font-bold '>Reciever</h2>
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
        />
        <div className='flex items-center w-full my-3'>
          <input type='checkbox' name='Partner' id='1' className='mr-3' onChange={handleOnChange} />
          <label className='font-bold'>Partner</label>
        </div>
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Next
        </button>
      </AppForm>
    </div>
  );
};

export default Customer;
