import React from "react";
import { Package, BackHeader } from "../components";

const PackageSection = () => {
  return (
    <div className='w-full px-96 text-center flex mt-36 flex-col justify-center'>
      <BackHeader />
      <h1 className='font-bold text-3xl'>Package</h1>
      <Package />
    </div>
  );
};

export default PackageSection;
