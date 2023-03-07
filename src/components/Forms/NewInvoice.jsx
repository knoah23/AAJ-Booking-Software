import React, { useState } from "react";
import { AppForm, AppFormField } from "..";
import * as yup from "yup";
import invoiceApi from "../../api/invoice";

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
  orderID: yup.string().required(),
});

const NewInvoice = () => {
  const [client, setClient] = useState();
  const [status, setStatus] = useState();
  const [paymentType, setPaymentType] = useState();
  const [branch, setBranch] = useState();
  const [created, setCreated] = useState(false);

  const handleOnSubmit = async ({
    shipTo,
    trackingNo,
    weight,
    rate,
    subTotal,
    tax,
    raisedBy,
    description,
    orderID,
  }) => {
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
      order: orderID,
    };
    const response = await invoiceApi.createInvoice(body);
    if (!response.ok) return console.log(response.data);
    setCreated(true);
  };

  if (created) {
    window.alert("Invoice Created Successfully");
  }

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <h1 className='font-bold text-3xl'>New Invoice</h1>
      <AppForm
        initialValues={{
          shipTo: "",
          trackingNo: "",
          weight: "",
          rate: "",
          subTotal: "",
          tax: "",
          total: "",
          raisedBy: "",
          description: "",
          orderID: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='orderID' title='Order ID' type='text' />
        <AppFormField name='description' title='Description' type='text' />

        <div className='flex items-center gap-4'>
          <div className='w-full text-left'>
            <label>Bill To</label>
            <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
              <select
                onChange={(e) => setClient(e.target.value)}
                name='client'
                className='w-full border-0 bg-none focus:outline-none'
              >
                <option value='select'>Customer</option>
                <option value='select'>Noah Ayodele</option>
                <option value='select'>David Omokanye</option>
              </select>
            </div>
          </div>
          <AppFormField name='shipTo' title='Ship To' type='text' />
        </div>
        <AppFormField name='trackingNo' title='Track Number' type='text' />
        <div className='w-full text-left'>
          <label>Status</label>
          <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
            <select
              onChange={(e) => setStatus(e.target.value)}
              name='client'
              className='w-full border-0 bg-none focus:outline-none'
            >
              <option value='select'>Status</option>
              <option value='1'>Active</option>
              <option value='2'>Due</option>
              <option value='3'>Pending</option>
            </select>
          </div>
        </div>
        {/* <div className='w-full text-left'>
          <label>Category</label>
          <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
            <select
              onChange={(e) => setStatus(e.target.value)}
              name='client'
              className='w-full border-0 bg-none focus:outline-none'
            >
              <option value='select'>Category</option>
              <option value='1'>Due</option>
              <option value='2'>Pending</option>
              <option value='3'>Pending</option>
            </select>
          </div>
        </div> */}
        <div className='flex gap-4 items-center'>
          <AppFormField name='actualWeight' title='Actual Weight' type='text' />
          <AppFormField
            name='dimensionalWeight'
            title='Dimensional Weight'
            type='text'
          />
        </div>
        <div className='w-full text-left'>
          <label>Branch Name</label>
          <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
            <select
              onChange={(e) => setBranch(e.target.value)}
              name='client'
              className='w-full border-0 bg-none focus:outline-none'
            >
              <option value='select'>Select</option>
              <option value='GB-Branch'>GB-Branch</option>
              <option value='YB-Branch'>YB-Branch</option>
              <option value='OYO-Branch'>OYO-Branch</option>
            </select>
          </div>
        </div>
        {/* <AppFormField name='rate' title='Rate' type='text' /> */}

        <AppFormField name='subTotal' title='Sub Total' type='text' />
        <AppFormField name='tax' title='Tax' type='text' />
        <AppFormField name='total' title='Total' type='text' />
        <AppFormField name='raisedBy' title='Raised By' type='text' />

        {/* <div className='w-full text-left'>
          <label>Payment Type</label>
          <div className='w-full p-4 rounded-md border border-gray5 text-gray3'>
            <select
              onChange={(e) => setPaymentType(e.target.value)}
              name='client'
              className='w-full border-0 bg-none focus:outline-none'
            >
              <option value='select'>Payment Type</option>
              <option value='1'>CASH</option>
              <option value='2'>POS</option>
              <option value='3'>TRANSFER</option>
            </select>
          </div>
        </div> */}
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          type='submit'
        >
          Create
        </button>
      </AppForm>
    </div>
  );
};

export default NewInvoice;
