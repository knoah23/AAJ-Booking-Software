import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import * as yup from 'yup';
import ordersApi from '../../api/orders';
import AppForm from '../AppForm';
import AppFormField from '../AppFormField';
import Loader from '../Loader';
import TempQuote from '../TempQuote';
import AddOn from './AddOn';
import { Country } from 'country-state-city';
import useApi from '../../hooks/useApi';
import { IoMdAdd, IoMdClose } from 'react-icons/io';

const validationSchema = yup.object().shape({
  sender_country: yup.string().required('The origin country is required'),
  receiver_country: yup.string().required('The destination country is required'),
  weight: yup.number().required('The weight is required'),
  type: yup.string().required('The Shipment Type is required'),
  addOns: yup.array().of(
    yup.object().shape({
      id: yup.number().required(),
      quantity: yup.number().required()
    })
  )
});

const GetQuote = () => {
  const [formData, setFormData] = useState({
    sender_country: 'NG',
    receiver_country: 'US',
    weight: '',
    type: 'IN',
    addOns: [{ id: '', quantity: '' }]
  });
  const [fishShipment, setFishShipment] = useState('off');
  const [partner, setPartner] = useState('off');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState();

  const { data: addons, loading: isLoading, request: loadAddons } = useApi(ordersApi.getAddons);

  useEffect(() => {
    loadAddons();
  }, []);

  const addAddOns = () => {
    const updatedFormData = { ...formData };
    updatedFormData.addOns.push({ id: '', quantity: '' });
    setFormData(updatedFormData);
  };

  const removeAddOn = (index) => {
    const updatedFormData = { ...formData };
    delete updatedFormData.addOns[index];
    setFormData(updatedFormData);
  };

  const handleOnSubmit = async (data) => {
    setIsModalOpen(true);
    setLoading(true);
    const dataPassed = {
      ...data,
      fish_shipment: fishShipment === 'on',
      partner: partner === 'on',
      location: data.receiver_country
    };

    const response = await ordersApi.createOrder(dataPassed);
    if (!response.ok) return (console.log(response.data), setLoading(false), setIsModalOpen(false));
    setQuoteData(response.data);
    setLoading(false);
  };

  if (isLoading || !addons) return <Loader />;

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        {loading ? <Loader /> : <TempQuote data={quoteData} />}
      </ReactModal>
      <AppForm
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <div className='flex gap-6'>
          <AddOn
            name='sender_country'
            title='From'
          >
            {Country.getAllCountries().map((country, index) => (
              <option key={index} value={country.isoCode}>{country.name}</option>
            ))}
          </AddOn>

          <AddOn
            name='receiver_country'
            title='To'
          >
            {Country.getAllCountries().map((country, index) => (
              <option key={index} value={country.isoCode}>{country.name}</option>
            ))}
          </AddOn>
        </div>

        <AppFormField name='weight' title='Weight' type='number' />

        <AddOn
          name='type'
          title='Shipment Type'
        >
          <option value='IN'>International</option>
          <option value='LC'>National</option>
        </AddOn>

        {formData.addOns.map((addOn, index) => (
          <div
            key={index}
            className='flex flex-col items-end border-gray-200'
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
          className='bg-black hover:bg-gray-900 text-white text-xl flex items-center justify-between border-0 p-5 cursor-pointer rounded-md'
          onClick={() => addAddOns()}
          type='button'
        >
          <p>Add another Add On</p>
          <IoMdAdd size={20} />
        </button>

        <div className='flex w-full items-center gap-4'>
          <div className='flex items-center w-full'>
            <input onChange={(e) => setPartner(e.target.value)} value={partner} type='checkbox' name='partner' id='1' className='mr-3' />
            <label>Partner</label>
          </div>
          <div className='flex items-center w-full'>
            <input onChange={(e) => setFishShipment(e.target.value)} value={fishShipment} type='checkbox' name='fishShipment' id='2' className='mr-3' />
            <label>Fish Shipment</label>
          </div>
        </div>

        <button
          type='submit'
          value='Get Quote'
          className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
        >Submit
        </button>
      </AppForm>
    </>
  );
};

export default GetQuote;
