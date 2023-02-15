import React, { useState } from "react";
import { AppForm, AppFormField } from "..";
import * as yup from "yup";
import Modal from "react-modal";

import { IoMdAdd } from "react-icons/io";

const validationSchema = yup.object().shape({
  packageDescription: yup.string().required(),
  value: yup.number().required(),
  quantity: yup.number().required(),
  actualWeight: yup.number().required(),
  dimensionalWeight: yup.number().required(),
});

const validationSchemaItems = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
});

const Package = () => {
  const [categories, setCategories] = useState();
  const [packageNumber, setPackageNumber] = useState(0);
  const [inputed, setInputed] = useState([]);
  const [items, setItems] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);

  const handleOnClickNext = () => {
    window.sessionStorage.setItem("packages", JSON.stringify(inputed));
    window.location.replace("/shipmentsection");
  };

  const handleOnSubmit = (
    { packageDescription, value, quantity, actualWeight, dimensionalWeight },
    { resetForm }
  ) => {
    const body = {
      description: packageDescription,
      itemsValue: value,
      quantity,
      actualWeight: actualWeight,
      dimensionWeight: dimensionalWeight,
      items,
      category: categories,
    };
    setInputed([body, ...inputed]);
    setItems([]);
    setItemNumber(0);
    setPackageNumber(packageNumber + 1);
    resetForm();
  };

  console.log(inputed.length);
  console.log(packageNumber);
  console.log(inputed);

  const handleOnSubmitItem = (body, { resetForm }) => {
    setItems([body, ...items]);
    setItemNumber(itemNumber + 1);
    resetForm();
  };

  return (
    <div className='flex text-center flex-col justify-evenly mt-6'>
      <div className='flex gap-2'>
        <div className='flex self-start'>
          Inputed Package(s) {packageNumber}/
          {packageNumber === 0 ? packageNumber + 1 : packageNumber}
        </div>
        <div className='flex self-start'>
          Inputed Items(s) {itemNumber}/
          {itemNumber === 0 ? itemNumber + 1 : itemNumber}
        </div>
      </div>
      <AppForm
        initialValues={{
          packageDescription: "",
          value: 0,
          quantity: 0,
          actualWeight: 0,
          dimensionalWeight: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField
          name='packageDescription'
          title='Package Description'
          type='text'
        />
        <div className='flex items-center gap-6'>
          <AppFormField name='quantity' title='Quanitity' type='text' />
          <AppFormField name='value' title='Value' type='text' />
        </div>

        <AppFormField
          name='dimensionalWeight'
          title='Weight (Kg)'
          type='text'
        />

        <button className='bg-gray-200 hover:bg-gray-300 text-xl flex items-center justify-between border-0 p-5 m-1 cursor-pointer rounded-md'>
          <p>Add another item</p>
          <IoMdAdd size={20} />
        </button>
        {/* <button
          className='text-[#001E4A] bg-[#a4dff5] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Add Package
        </button> */}
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          onClick={handleOnClickNext}
        >
          Continue
        </button>
      </AppForm>
    </div>
  );
};

export default Package;
