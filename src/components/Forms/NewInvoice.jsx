import React, { useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import invoiceApi from '../../api/invoice';

const validationSchema = yup.object().shape({
  shipTo: yup.string().required(),
  trackingNo: yup.string().required(),
  weight: yup.number().required(),
  rate: yup.number().required(),
  subTotal: yup.number().required(),
  tax: yup.number().required(),
  total: yup.number().required(),
  raisedBy: yup.string().required(),
  description: yup.string().required(),
  orderID: yup.string().required()
});

const NewInvoice = () => {
  const [client, setClient] = useState();
  const [status, setStatus] = useState();
  const [paymentType, setPaymentType] = useState();
  const [branch, setBranch] = useState();
  const [created, setCreated] = useState(false);

  const handleOnSubmit = async ({ shipTo, trackingNo, weight, rate, subTotal, tax, raisedBy, description, orderID }) => {
    const body = {
      ship_to: shipTo,
      tracking_no: trackingNo,
      weight,
      status,
      paymentType,
      bill_to: client,
      rate,
      sub_total: subTotal,
      tax,
      branch_name: branch,
      raise_by: raisedBy,
      description,
      order: orderID
    };
    const response = await invoiceApi.createInvoice(body);
    if (!response.ok) return console.log(response.data);
    setCreated(true);
  };

  if (created) {
    window.alert('Invoice Created Successfully');
  }

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <AppForm
        initialValues={{
          shipTo: '',
          trackingNo: '',
          weight: '',
          rate: '',
          subTotal: '',
          tax: '',
          total: '',
          raisedBy: '',
          description: '',
          orderID: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <div className='text-left my-4'>
          <label className='font-bold'>Bill To</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select onChange={(e) => setClient(e.target.value)} name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Customer</option>
              <option value='select'>Noah Ayodele</option>
              <option value='select'>David Omokanye</option>
            </select>
          </div>
        </div>
        <AppFormField name='shipTo' title='Ship To' type='text' />
        <AppFormField name='trackingNo' title='Track Number' type='text' />
        <div className='text-left my-4'>
          <label className='font-bold'>Status</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select onChange={(e) => setStatus(e.target.value)} name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Status</option>
              <option value='1'>Active</option>
              <option value='2'>Due</option>
              <option value='3'>Pending</option>
            </select>
          </div>
        </div>
        <div className='text-left my-4'>
          <label className='font-bold'>Category</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select onChange={(e) => setStatus(e.target.value)} name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Category</option>
              <option value='1'>Due</option>
              <option value='2'>Pending</option>
              <option value='3'>Pending</option>
            </select>
          </div>
        </div>
        <AppFormField name='weight' title='Weight' type='number' />
        <div className='text-left my-4'>
          <label className='font-bold'>Branch Name</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select onChange={(e) => setBranch(e.target.value)} name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Select</option>
              <option value='GB-Branch'>GB-Branch</option>
              <option value='YB-Branch'>YB-Branch</option>
              <option value='OYO-Branch'>OYO-Branch</option>
            </select>
          </div>
        </div>
        <AppFormField name='rate' title='Rate' type='number' />
        <AppFormField name='subTotal' title='Sub Total' type='number' />
        <AppFormField name='tax' title='Tax' type='number' />
        <AppFormField name='total' title='Total' type='number' />
        <AppFormField name='raisedBy' title='Raised By' type='text' />
        <AppFormField name='description' title='Description' type='text' />
        <AppFormField name='orderID' title='Order ID' type='text' />
        <div className='text-left my-4'>
          <label className='font-bold'>Payment Type</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md mt-3'>
            <select onChange={(e) => setPaymentType(e.target.value)} name='client' className='w-full bg-transparent border-0'>
              <option value='select'>Payment Type</option>
              <option value='1'>CASH</option>
              <option value='2'>POS</option>
              <option value='3'>TRANSFER</option>
            </select>
          </div>
        </div>
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

export default NewInvoice;
