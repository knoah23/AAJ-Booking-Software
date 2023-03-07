import React, { useEffect, useState } from 'react';

import { Button, OrderComponent, OrderModal } from '../components';
import ordersApi from '../api/orders';
import useApi from '../hooks/useApi';
import Loader from '../components/Loader';
import { BiSearch } from 'react-icons/bi';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [search, setSearch] = useState(false);
  const [searchedOrders, setSearchedOrders] = useState();
  const [isModal, setModal] = useState(false);
  const [orderInFocus, setOrderInFocus] = useState();

  const navigate = useNavigate();

  const {
    data,
    loading,
    request: loadOrders
  } = useApi(ordersApi.getOrders);

  useEffect(() => {
    loadOrders();
  }, []);

  const handleOnSearch = (e) => {
    setSearch(true);
    const value = e.target.value;
    const orders = data[0].payload.filter(item => {
      return item.packages[0].description.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedOrders(orders);
  };

  const handleOnClickOrder = (item) => {
    setModal(true);
    setOrderInFocus(item);
  };

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      {/* NATHANIEL MAKE THE ORDER HAVE THE ABILITY GO OPEN A MODAL CALLED (ORDERMODAL) IN THE COMPONENTS FILE */}
      <ReactModal
        isOpen={isModal}
        onRequestClose={() => setModal(false)}
      >
        <OrderModal data={orderInFocus} handleOnClose={() => setModal(false)} />
      </ReactModal>
      <div className='mx-32 my-20'>
        <div className='mb-10 gap-6 flex items-center'>
          <div className='w-full flex items-center gap-4 p-5 rounded-md  bg-[#F2F2F2] text-[#BDBDBD]'>
            <BiSearch size={20} className='text-[#BDBDBD]' />
            <input
              type='text'
              placeholder='Search for Shipments'
              className='w-full bg-transparent focus:outline-none'
              onChange={handleOnSearch}
            />
          </div>
          <Button
            onclick={() => navigate('/customerinfo?sender')}
            bgColor='black'
            text='Create'
            color='white'
            size='text-md'
            borderRadius='5px'
          />
        </div>
        <div>
          {!search
            ? data[0].payload.map((item) => (
              <OrderComponent key={item.id} item={item} handleOnClick={() => handleOnClickOrder(item)} />
            )
            )
            : (
                searchedOrders.map(item => (
                  <OrderComponent key={item.id} item={item} handleOnClick={() => handleOnClickOrder(item)} />
                ))
              )}
        </div>
      </div>
    </>
  );
};

export default Order;
