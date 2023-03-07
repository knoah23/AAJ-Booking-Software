import React, { useEffect, useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import { IoMdAdd } from 'react-icons/io';
import useApi from '../../hooks/useApi';
import ordersApi from '../../api/orders';
import Loader from '../Loader';

const validationSchema = yup.object().shape({
  description: yup.string().required(),
  itemsValue: yup.number().required(),
  items: yup.array().of(yup.object().shape({
    name: yup.string().required(),
    quantity: yup.number().required(),
    value: yup.number().required()
  })),
  actualWeight: yup.number().required(),
  dimensionWeight: yup.number().required()
});

const Package = () => {
  const [formPackages, setPackages] = useState([
    {
      description: '',
      itemsValue: '',
      items: [{ name: '', quantity: '', value: '' }],
      actualWeight: '',
      dimensionWeight: ''
    }
  ]);

  const {
    data: addons,
    loading,
    request: loadAddons
  } = useApi(ordersApi.getAddons);

  useEffect(() => {
    loadAddons();
  }, []);

  if (loading || !addons) {
    return <Loader />;
  }

  const addPackage = () => {
    setPackages([
      ...formPackages,
      {
        description: '',
        itemsValue: '',
        items: [{ name: '', quantity: '', value: '' }],
        actualWeight: '',
        dimensionWeight: ''
      }
    ]);
  };

  const addNewItem = (index) => {
    const updatedPackages = [...formPackages];
    updatedPackages[index].items.push({ name: '', quantity: '', value: '' });
    setPackages(updatedPackages);
  };

  const handleOnSubmit = (body) => {
    window.sessionStorage.setItem('packages', JSON.stringify(body.formPackages));
    window.location.replace('/shipmentsection');
  };

  return (
    <div className='flex text-center flex-col justify-evenly pb-8 my-3'>
      <AppForm
        initialValues={formPackages}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <div className='flex w-full items-center justify-end '>
          <button className='flex items-center gap-2 p-4 bg-gray-200 rounded-md' type='button' onClick={addPackage}>
            <IoMdAdd size={20} /> Add New Package
          </button>
        </div>
        {formPackages.map((formPackage, index) => (
          <div key={index}>
            <AppFormField
              name={`formPackages[${index}].description`}
              title='Description'
              type='text'
            />
            {formPackage.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <AppFormField name={`formPackages[${index}].items[${itemIndex}].name`} title='Name' type='text' />
                <div className='flex items-center gap-6'>
                  <AppFormField name={`formPackages[${index}].items[${itemIndex}].quantity`} title='Quanitity' type='number' />
                  <AppFormField name={`formPackages[${index}].items[${itemIndex}].value`} title='Value' type='number' />
                </div>
              </div>
            ))}
            <button
              className='bg-gray-200 hover:bg-gray-300 text-xl flex items-center justify-between border-0 p-5 m-1 cursor-pointer rounded-md'
              onClick={() => addNewItem(index)}
              type='button'
            >
              <p>Add another item</p>
              <IoMdAdd size={20} />
            </button>
            <AppFormField name={`formPackages[${index}].itemsValue`} title='Package Value' type='number' />
            <div className='flex items-center gap-4 pt-8 border-t-1 border-gray-200'>
              <AppFormField
                name={`formPackages[${index}].actualWeight`}
                title='Actual Weight (Kg)'
                type='number'
              />
              <AppFormField
                name={`formPackages[${index}].dimensionWeight`}
                title='Dimension Weight (Kg)'
                type='number'
              />
            </div>
          </div>
        ))}
        <button
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
          type='submit'
        >
          Continue
        </button>
      </AppForm>
    </div>
  );
};

export default Package;
