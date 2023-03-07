import React from "react";
import { AppForm, AppFormField } from "..";
import * as yup from "yup";
import receiptApi from "../../api/reciepts";

const validationSchema = yup.object().shape({
  shipment: yup.string().required(),
  invoiceID: yup.string().required(),
  weight: yup.number().required(),
  amountPaid: yup.number().required(),
});

const NewReciept = () => {
  const handleOnSubmit = async ({
    shipment,
    invoiceID,
    weight,
    amountPaid,
  }) => {
    const body = {
      shipment,
      order: invoiceID,
      weight,
      served_by: `${
        JSON.parse(window.localStorage.getItem("userData")).payload.employee
          .first_name
      } ${
        JSON.parse(window.localStorage.getItem("userData")).payload.employee
          .last_name
      }`,
      amount_paid: amountPaid,
    };
    const response = await receiptApi.createReceipt(body);
    if (!response.ok) return console.log(response.data);
    window.alert("Receipt Created Successfully");
    window.location.reload();
  };

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <h1 className='font-bold text-3xl'>New Reciept</h1>
      <AppForm
        initialValues={{
          invoiceID: "",
          shipment: "",
          weight: 0,
          amountPaid: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField name='invoiceID' title='Order ID' type='text' />

        <AppFormField name='shipment' title='Shipment ID' type='text' />

        <div className='flex items-center gap-4'>
          <AppFormField name='actualWeight' title='Actual Weight' type='text' />
          <AppFormField
            name='dimensionalWeight'
            title='Dimensional Weight'
            type='text'
          />
        </div>

        <AppFormField name='amountPaid' title='Amount Paid' type='number' />

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

export default NewReciept;
