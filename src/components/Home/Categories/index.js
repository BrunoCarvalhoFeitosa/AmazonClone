import React from 'react';

const Categories = () => {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8'>
        <div className='relative flex justify-center items-center bg-gray-200 h-[250px] md:h-[300px] mb-6 md:mb-4 md:mr-[12px] overflow-hidden cursor-pointer' />
        <div className='relative flex justify-center items-center bg-gray-200 h-[250px] md:h-[300px] mb-6 md:mb-4 md:mr-[12px] overflow-hidden cursor-pointer' />
        <div className='relative flex justify-center items-center bg-gray-200 h-[250px] md:h-[300px] mb-6 md:mb-4 md:mr-[12px] overflow-hidden cursor-pointer' />
    </div>
  );
}

export default Categories;