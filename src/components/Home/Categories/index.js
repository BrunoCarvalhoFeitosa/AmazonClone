import React from 'react';

const Categories = () => {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[94%] mx-auto xl:grid-cols-4 my-[100px]'>
        <div className='flex justify-center items-center bg-bold_yellow h-[250px] mb-[50px] md:mb-4 md:mr-[12px] cursor-pointer'>
          <img src="/home-categorie-eletro.png" className='w-[284px] md:w-auto' />
        </div>
        <div className='flex justify-center items-center bg-bold_yellow h-[250px] mb-[50px] md:mb-4 md:mr-[12px] cursor-pointer'>
          <img src="/home-categorie-stove.png" className='w-[284px] md:w-auto' />
        </div>
        <div className='flex justify-center items-center bg-bold_yellow h-[250px] md:mb-4 md:mr-[12px] md:hidden lg:flex cursor-pointer'>
          <img src="/home-categorie-eletro.png" className='w-[284px] md:w-auto'/>
        </div>
    </div>
  );
}

export default Categories;