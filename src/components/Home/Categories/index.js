import React from 'react';

const Categories = () => {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[94%] mx-auto xl:grid-cols-4 my-[100px]'>
        <div className='md:mb-4 md:mr-[12px] cursor-pointer overflow-hidden'>
          <div className='overflow-hidden'>
            <img src="/home-categorie-clothes.jpg" className='mx-auto object-contain transform transition duration-250 hover:scale-[1.1]'/>
          </div>
          <div className='w-[100%] mt-2'>
            <h4 className='text-center italic font-semibold'>All of Clothes</h4>
          </div>
        </div>
        <div className='mb-[50px] md:mb-4 md:mr-[12px] cursor-pointer overflow-hidden'>
          <div className='overflow-hidden'>
            <img src="/home-categorie-tech.jpg" className='mx-auto object-contain transform transition duration-250 hover:scale-[1.1]' />
          </div>
          <div className='w-[100%] mt-2'>
            <h4 className='text-center italic font-semibold'>All of Technologie</h4>
          </div>
        </div>
        <div className='md:mb-4 md:mr-[12px] cursor-pointer overflow-hidden'>
          <div className='overflow-hidden'>
            <img src="/home-categorie-health.jpg" className='mx-auto object-contain transform transition duration-250 hover:scale-[1.1]'/>
          </div>
          <div className='w-[100%] mt-2'>
            <h4 className='text-center italic font-semibold'>All of Health</h4>
          </div>
        </div>
        <div className='mb-[50px] md:mb-4 md:mr-[12px] cursor-pointer overflow-hidden'>
          <div className='overflow-hidden'>
            <img src="/home-categorie-pets.jpg" className='mx-auto object-contain transform transition duration-250 hover:scale-[1.1]' />
          </div>
          <div className='w-[100%] mt-2'>
            <h4 className='text-center italic font-semibold'>All of Pets</h4>
          </div>
        </div>
    </div>
  );
}

export default Categories;