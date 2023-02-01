import React from "react";
import { Package, Header } from "../components";

const PackageSection = () => {
  return (
    <div className='w-full h-full px-5 my-5'>
      <Header category='Package Info' title='Create Order' />
      <Package />
    </div>
  );
};

export default PackageSection;
