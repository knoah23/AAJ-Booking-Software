import React, { useEffect, useState } from 'react';
import ReactSwap from 'react-swap';
import { AppForm, AppFormField } from '..';
import * as yup from 'yup';
import { Country, State, City } from 'country-state-city';

import { BiSearch } from 'react-icons/bi';
import AddressBook from '../AddressBook';
import { IoMdAdd } from 'react-icons/io';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import customerApi from '../../api/customer';
import useApi from '../../hooks/useApi';
import Loader from '../Loader';

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is Required'),
  address: yup.string().required('Address is Required'),
  email: yup.string().email('Must be a valid email address').required('Email is Required'),
  postcode: yup.number().required('Postal Code is Required')
});

const Customer = () => {
  const [value, setValue] = useState('off');
  const [country, setCountry] = useState(Country.getAllCountries()[0].isoCode);
  const [state, setState] = useState(State.getStatesOfCountry(country)[0].isoCode);
  const [city, setCity] = useState();
  const [isPartner, setIsPartner] = useState();
  const [search, setSearch] = useState(false);
  const [searchedCustomers, setSearchedCustomers] = useState();

  const { data, loading, request: loadCustomers } = useApi(customerApi.getCustomers);

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleOnSubmit = async ({
    fullName,
    address,
    email,
    postcode
  }) => {
    // const userData = await JSON.parse(window.localStorage.getItem('userData'));
    const cusType = window.location.href.split('?')[1];
    const result = await customerApi.createCustomer({
      email,
      full_name: fullName,
      phone_number: value,
      address,
      city,
      state,
      country: Country.getCountryByCode(country).name,
      code: country,
      postcode: postcode,
      credit: 0,
      partner: isPartner === 'on'
      // user: userData.payload.employee.id
    });
    if (!result.ok) return (console.log(result.data), window.alert('Customer could not be added to address box'));
    window.alert('Customer saved to address box');

    if (cusType === 'sender') {
      window.sessionStorage.setItem('sender', JSON.stringify({
        sender_name: fullName,
        sender_address: address,
        sender_phone: value,
        sender_country: Country.getCountryByCode(country).name,
        sender_city: city.name,
        sender_state: state,
        sender_postcode: postcode,
        sender_country_code: country,
        partner: isPartner === 'on',
        id: result.data.id
      }));
      window.location.replace('/customerinfo?receiver');
    }

    if (cusType === 'receiver') {
      window.sessionStorage.setItem('receiver', JSON.stringify({
        receiver_name: fullName,
        receiver_address: address,
        receiver_phone: value,
        receiver_country: Country.getCountryByCode(country).name,
        receiver_city: city,
        receiver_state: state,
        receiver_postcode: postcode,
        receiver_country_code: country,
        id: result.data.id
      }));
      window.location.replace('/packagesection');
    }
  };

  const handleOnClickUser = (item) => {
    const cusType = window.location.href.split('?')[1];

    if (cusType === 'sender') {
      window.sessionStorage.setItem('sender', JSON.stringify({
        sender_name: item.full_name,
        sender_address: item.address,
        sender_phone: item.phone_number,
        sender_country: Country.getAllCountries().find(country => country.name === item.country).name,
        sender_city: item.city,
        sender_state: item.state,
        sender_postcode: item.postcode,
        sender_country_code: Country.getAllCountries().find(country => country.name === item.country).isoCode,
        partner: item.partner,
        id: item.id
      }));
      window.location.replace('/customerinfo?receiver');
    }

    if (cusType === 'receiver') {
      window.sessionStorage.setItem('receiver', JSON.stringify({
        receiver_name: item.full_name,
        receiver_address: item.address,
        receiver_phone: item.phone_number,
        receiver_country: Country.getAllCountries().find(country => country.name === item.country).name,
        receiver_city: item.city,
        receiver_state: item.state,
        receiver_postcode: item.postcode,
        receiver_country_code: Country.getAllCountries().find(country => country.name === item.country).isoCode,
        id: item.id
      }));
      window.location.replace('/packagesection');
    }
  };

  if (loading || !data) return <Loader />;

  const handleOnSearch = (e) => {
    setSearch(true);
    const value = e.target.value;
    const customers = data.filter(item => {
      return item.full_name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedCustomers(customers);
  };

  return (
    <div className='flex text-center flex-col justify-evenly my-3 pb-8'>
      <AppForm
        initialValues={{
          fullName: '',
          address: '',
          email: '',
          postcode: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <ReactSwap>
          {/* Old Customer */}
          <div className='text-left flex gap-10 flex-col'>
            <div className='w-full flex items-center gap-4 p-4 rounded-md border border-gray5 text-gray3'>
              <BiSearch size={20} className='text-[#BDBDBD]' />
              <input
                type='text'
                placeholder='Search'
                className='w-full bg-transparent focus:outline-none'
                onChange={handleOnSearch}
              />
            </div>
            <div
              data-swap-handler
              className='flex items-center text-left justify-between w-full rounded-lg p-5 bg-gray-100 hover:bg-gray-300'
            >
              <div>
                <h1 className='font-bold'>New Customer</h1>
                <p>Add new address book</p>
              </div>
              <IoMdAdd size={20} />
            </div>

            <div>
              <h1 className='text-[#FF4D00] text-xl mb-2'>Address Books</h1>
              {!search
                ? (
                    data.map((item) => (
                      <AddressBook key={item.id} item={item} handleOnClick={() => handleOnClickUser(item)} />
                    ))
                  )
                : (
                    searchedCustomers.map((item) => (
                      <AddressBook key={item.id} item={item} handleOnClick={() => handleOnClickUser(item)} />
                    ))
                  )}
            </div>
          </div>
          {/* New Customer */}
          <div className='flex flex-col gap-10'>
            <div
              data-swap-handler
              className='bg-[#FF4D00] text-center justify-center text-white w-20 px-4 py-2 rounded-md cursor-pointer flex items-center gap-2'
            >
              Back
            </div>
            <AppFormField name='fullName' title='Full Name' type='text' />

            <AppFormField
              name='address'
              title='Address line'
              auto='address-line1'
              type='text'
            />

            <div className='flex gap-6 text-left'>
              <div className='w-full'>
                <label>City</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='city'
                    className='bg-transparent border-0 w-full focus:outline-none'
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  >
                    {City.getCitiesOfState(country, state).map((city) => (
                      <option key={city.name} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='w-full'>
                <label>State</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='client'
                    className=' bg-transparent border-0 w-full focus:outline-none'
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  >
                    {State.getStatesOfCountry(country).map((state) => (
                      <option key={state.name} value={state.isoCode}>{state.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className='flex gap-6 items-center text-left'>
              <div className='w-full'>
                <label>Country</label>
                <div className='flex w-full items-center justify-between  p-4 rounded-md border border-gray5 text-gray3'>
                  <select
                    name='country'
                    className='bg-transparent border-0 w-full focus:outline-none'
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  >
                    {Country.getAllCountries().map((country) => (
                      <option key={country.name} value={country.isoCode}>{country.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <AppFormField name='postcode' title='Postal Code' type='number' />
            </div>

            <PhoneInput
              className='w-full p-4 rounded-md border border-gray5 text-gray3 focus:outline-none'
              placeholder='Enter phone number'
              value={value}
              onChange={(e) => setValue(e)}
            />
            <AppFormField
              name='email'
              title='Email Address'
              type='email'
            />
            <div className='flex items-center w-full my-3'>
              <input onChange={(e) => setIsPartner(e.target.value)} type='checkbox' name='Save' id='1' className='mr-3' />
              <label>Partner</label>
            </div>
            <button
              className='bg-primary text-white py-4 px-10 rounded-full hover:bg-[#EE4700]'
              type='submit'
            >
              Continue
            </button>
          </div>
          ;
        </ReactSwap>
      </AppForm>
    </div>
  );
};

export default Customer;
