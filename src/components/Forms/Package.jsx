import React, { useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import Modal from 'react-modal';

const validationSchema = yup.object().shape({
  packageDescription: yup.string().required(),
  value: yup.number().required(),
  quantity: yup.number().required(),
  actualWeight: yup.number().required(),
  dimensionalWeight: yup.number().required()
});

const validationSchemaItems = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required()
});

const Package = () => {
  const [categories, setCategories] = useState();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [packageNumber, setPackageNumber] = useState(0);
  const [inputed, setInputed] = useState([]);
  const [items, setItems] = useState([]);
  const [itemNumber, setItemNumber] = useState(0);

  const handleOnClickNext = () => {
    window.sessionStorage.setItem('packages', JSON.stringify(inputed));
    window.location.replace('/shipmentsection');
  };

  const handleOnSubmit = ({ packageDescription, value, quantity, actualWeight, dimensionalWeight }, { resetForm }) => {
    const body = {
      description: packageDescription,
      itemsValue: value,
      quantity,
      actualWeight: actualWeight,
      dimensionWeight: dimensionalWeight,
      items,
      category: categories
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AppForm
          initialValues={{ name: '', price: 0, quantity: 0 }}
          validationSchema={validationSchemaItems}
          onSubmit={handleOnSubmitItem}
        >
          <p>Add Items</p>
          <AppFormField name='name' title='Name' type='text' />
          <AppFormField name='price' title='Price' type='number' />
          <AppFormField name='quantity' title='Quantity' type='number' />
          <button
            className='text-[#001E4A] bg-[#a4dff5] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
            type='submit'
          >
            Add Item
          </button>
        </AppForm>
      </Modal>
      <div
        className='flex gap-2'
      >
        <div className='flex self-start'>
          Inputed Package(s) {packageNumber}/{packageNumber === 0 ? packageNumber + 1 : packageNumber}
        </div>
        <div className='flex self-start'>
          Inputed Items(s) {itemNumber}/{itemNumber === 0 ? itemNumber + 1 : itemNumber}
        </div>
      </div>
      <AppForm
        initialValues={{
          packageDescription: '',
          value: 0,
          quantity: 0,
          actualWeight: 0,
          dimensionalWeight: 0
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <AppFormField
          name='packageDescription'
          title='Package Description'
          type='text'
        />
        <AppFormField name='value' title='Value' type='number' />
        <AppFormField name='quantity' title='Quanitity' type='number' />

        <AppFormField name='actualWeight' title='Actual Weight' type='number' />
        <AppFormField
          name='dimensionalWeight'
          title='Dimensional Weight'
          type='number'
        />

        {/* Category */}
        <div className='text-left my-4'>
          <label className='font-bold'>Category</label>
          <div className='flex items-center justify-between bg-slate-200 p-2 rounded-md my-3'>
            <select
              name='categories'
              className='w-full bg-transparent border-0'
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value='select'>Category</option>
              <option value='select'>Plumbing</option>
              <option value='select'>Domestic</option>
            </select>
          </div>
        </div>
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          onClick={() => setIsModalOpen(true)}
        >
          Add Item
        </button>
        <button
          className='text-[#001E4A] bg-[#a4dff5] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          type='submit'
        >
          Add Package
        </button>
        <button
          className='text-white bg-[#001E4A] py-3 border-0 font-bold m-1 cursor-pointer rounded-md'
          onClick={handleOnClickNext}
        >
          Next
        </button>
      </AppForm>
    </div>
  );
};

export default Package;
