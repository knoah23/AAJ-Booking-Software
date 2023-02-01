import React from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import receiptApi from '../../api/reciepts';

const validationSchema = yup.object().shape({
  shipment: yup.string().required(),
  invoiceID: yup.string().required(),
  weight: yup.number().required(),
  amountPaid: yup.number().required()
});

const NewReciept = () => {
  const handleOnSubmit = async ({ shipment, invoiceID, weight, amountPaid }) => {
    const body = {
      shipment,
      order: invoiceID,
      weight,
      served_by: `${JSON.parse(window.localStorage.getItem('userData')).payload.employee.first_name} ${JSON.parse(window.localStorage.getItem('userData')).payload.employee.last_name}`,
      amount_paid: amountPaid
    };
    const response = await receiptApi.createReceipt(body);
    if (!response.ok) return console.log(response.data);
    window.alert('Receipt Created Successfully');
    window.location.reload();
  };

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <AppForm
        initialValues={{
          invoiceID: '',
          shipment: '',
          weight: 0,
          amountPaid: 0
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='invoiceID' title='Order ID' type='text' />

        <AppFormField name='shipment' title='Shipment ID' type='text' />

        <AppFormField name='weight' title='Weight' type='number' />

        <AppFormField name='amountPaid' title='Amount Paid' type='number' />

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

export default NewReciept;
