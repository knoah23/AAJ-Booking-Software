import React, { useEffect, useState } from "react";
import { Button } from "../components";
import OrderComponent from "../components/OrderComponent";
import ordersApi from "../api/orders";
import useApi from "../hooks/useApi";
import Loader from "../components/Loader";

import { BiSearch } from "react-icons/bi";

const Order = () => {
  const {
    data,
    loading,
    error,
    request: loadOrders,
  } = useApi(ordersApi.getOrders);

  useEffect(() => {
    loadOrders();
  }, []);

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <>
      <div className='mx-32 my-20'>
        <div className='mb-10 gap-6 flex items-center'>
          <div className='w-full flex items-center gap-4 p-5 rounded-md  bg-[#F2F2F2] text-[#BDBDBD]'>
            <BiSearch size={20} className='text-[#BDBDBD]' />
            <input
              type='text'
              placeholder='Search for Shipments'
              className='w-full bg-transparent focus:outline-none'
            />
          </div>
          <Button
            onclick={() => window.location.replace("/customerinfo")}
            bgColor='black'
            text='Create'
            color='white'
            size='text-md'
            borderRadius='5px'
          />
        </div>
        <div>
          {data[0].payload.map((item) => (
            <OrderComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
