import React, { useEffect, useState } from 'react';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import useApi from '../../hooks/useApi';
import ordersApi from '../../api/orders';
import Loader from '../Loader';
import numbers from '../../assets/numbers';
import AddOn from './AddOn';

const validationSchema = yup.object().shape({
  itemsValue: yup.number().required(),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required(),
      quantity: yup.number().required(),
      value: yup.number().required(),
      hsCode: yup.number().required()
    })
  ),
  packages: yup.array().of(
    yup.object().shape({
      description: yup.string().required(),
      category: yup.string().required(),
      actualWeight: yup.number().required(),
      dimensionWeight: yup.number().required()
    })
  ),
  addOns: yup.array().of(
    yup.object().shape({
      id: yup.number().required(),
      quantity: yup.number().required()
    })
  )
});

const Package = () => {
  const [noOfPackages, setNoOfPackages] = useState(0);
  const [formPackages, setPackages] = useState({
    itemsValue: '',
    items: [{ name: '', quantity: '', value: '', hsCode: '' }],
    packages: [],
    addOns: [{ id: 0, quantity: '' }]
  });

  const {
    data: addons,
    loading,
    request: loadAddons
  } = useApi(ordersApi.getAddons);

  const addPackages = (number) => {
    const updatedPackages = formPackages;
    const packages = [];
    for (let i = 0; i < number; i++) {
      packages.push({
        description: '',
        category: '',
        dimensionWeight: '',
        actualWeight: ''
      });
    }
    updatedPackages.packages = packages;
    setPackages(updatedPackages);
  };

  useEffect(() => {
    loadAddons();
  }, []);

  if (loading || !addons) {
    return <Loader />;
  }

  const addNewItem = () => {
    const updatedPackages = { ...formPackages };
    updatedPackages.items.push({ name: '', quantity: '', value: '' });
    setPackages(updatedPackages);
  };

  const addAddOns = () => {
    const updatedPackages = { ...formPackages };
    updatedPackages.addOns.push({ id: '', quantity: '' });
    setPackages(updatedPackages);
  };

  const removeItem = (index) => {
    const updatedPackages = { ...formPackages };
    delete updatedPackages.items[index];
    setPackages(updatedPackages);
  };

  const removeAddOn = (index) => {
    const updatedPackages = { ...formPackages };
    delete updatedPackages.addOns[index];
    setPackages(updatedPackages);
  };

  const handleOnSubmit = (body) => {
    window.sessionStorage.setItem('packages', JSON.stringify(body));
    window.location.replace('/shipmentsection');
  };

  return (
    <div className='flex text-center flex-col justify-evenly pb-8 my-3'>
      <AppForm
        initialValues={formPackages}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <div className='flex items-center justify-between bg-gray-300 p-3 rounded-sm '>
          <h1 className='font-bold text-xl text-left'>Package information</h1>
          <div className='flex w-full items-center justify-end gap-2'>
            <label>Number of Packages</label>
            <select
              className='flex items-center gap-2 p-2 bg-white rounded-md'
              value={noOfPackages}
              onChange={(e) => (
                setNoOfPackages(e.target.value), addPackages(e.target.value)
              )}
            >
              {numbers.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
        </div>
        <AppFormField
          name='itemsValue'
          title='Total Value'
          type='number'
        />
        <div>
          {formPackages.packages.map((packageItem, index) => (
            <div key={index} className='flex flex-col mt-10 items-end'>
              <AppFormField
                name={`packages[${index}].description`}
                title='Package Description'
                type='text'
              />
              <AppFormField
                name={`packages[${index}].category`}
                title='Category'
                type='text'
              />
              <div className='flex items-center gap-4 w-full pt-4 mt-8 border-t-1 border-gray-200'>
                <AppFormField
                  name={`packages[${index}].actualWeight`}
                  title='Actual Weight (Kg)'
                  type='number'
                />
                <AppFormField
                  name={`packages[${index}].dimensionWeight`}
                  title='Dimension Weight (Kg)'
                  type='number'
                />
              </div>
            </div>
          ))}

          {formPackages.items.map((item, itemIndex) => (
            <div className='flex flex-col items-end mt-16' key={itemIndex}>
              <div className='flex items-center justify-between bg-gray-300 p-3 rounded-sm w-full'>
                <h1 className='font-bold text-xl text-left'>Item</h1>
                {itemIndex > 0 && (
                  <button onClick={() => removeItem(itemIndex)} type='button'>
                    <IoMdClose size={20} />
                  </button>
                )}
              </div>
              <div className='my-8 w-full'>
                <AppFormField
                  name={`items[${itemIndex}].name`}
                  title='Name'
                  type='text'
                />
                <div className='flex items-center w-full gap-6 mt-8'>
                  <AppFormField
                    name={`items[${itemIndex}].quantity`}
                    title='Quanitity'
                    type='number'
                  />
                  <AppFormField
                    name={`items[${itemIndex}].value`}
                    title='Value'
                    type='number'
                  />
                  <AppFormField
                    name={`items[${itemIndex}].hsCode`}
                    title='HS Code'
                    type='number'
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            className='bg-black hover:bg-gray-900 text-white text-xl flex items-center justify-between border-0 p-5 m-1 cursor-pointer rounded-md'
            onClick={() => addNewItem()}
            type='button'
          >
            <p>Add another item</p>
            <IoMdAdd size={20} />
          </button>
          {formPackages.addOns.map((addOn, index) => (
            <div
              key={index}
              className='flex flex-col items-end mt-16 border-gray-200'
            >
              <div className='flex items-center justify-between bg-gray-300 p-3 rounded-sm w-full'>
                <h1 className='font-bold text-xl text-left'>Add Ons</h1>
                {index > 0 && (
                  <button onClick={() => removeAddOn(index)} type='button'>
                    <IoMdClose size={20} />
                  </button>
                )}
              </div>

              <div className='flex w-full items-center gap-4 my-8'>
                <AddOn name={`addOns[${index}].id`} title='Add On'>
                  {addons[0].payload.map((addon) => (
                    <option key={addon.id} value={+addon.id}>
                      {addon.name}
                    </option>
                  ))}
                </AddOn>
                <AppFormField
                  name={`addOns[${index}].quantity`}
                  title='Quantity'
                  type='number'
                />
              </div>
            </div>
          ))}
          <button
            className='bg-black hover:bg-gray-900 text-white text-xl flex items-center justify-between border-0 p-5 m-1 cursor-pointer rounded-md'
            onClick={() => addAddOns()}
            type='button'
          >
            <p>Add another Add On</p>
            <IoMdAdd size={20} />
          </button>
          <div style={{ height: '1px' }} className='bg-gray-200 w-full my-5' />
        </div>
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
