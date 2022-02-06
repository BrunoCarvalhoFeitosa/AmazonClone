import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Currency from 'react-currency-formatter';
import { addToBasket } from '../../../slices/basketSlice';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image
}) => {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToBasket = () => {
    let product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <div className='absolute top-2 right-2'>
        <h4 className='text-[13px] capitalize italic'>{category}</h4>
      </div>
      <div className='mx-auto cursor-pointer transform transition duration-250 hover:scale-[1.1]'>
        <img
          src={image}
          loading='lazy'
          className='w-[150px] h-[150px] object-contain'
        />
      </div>
      <div className='box-border'>
        <div className='my-3'>
          <h3 className='text-w[14px] italic line-clamp-1'>{title}</h3>
        </div>
        <div>
          <div className='flex items-center'>
            <img 
              loading='lazy'
              src='/amazon-icon-thin.png'
              width={25}
              height={25}
              title='FREE to delivery'
              alt='Amazon Prime'
              className='cursor-pointer'
            />
          </div>
        </div>
        <div className='flex items-center'>
          {Array(rating).fill().map((_, index) => (
            <div key={index}>
              <StarIcon className='h-5 text-yellow-500' />
            </div>
          ))}
        </div>
        <div className='my-2'>
          <p className='text-[14px] line-clamp-2'>{description}</p>
        </div>
        <div className='mb-3 text-[22px] font-extrabold'>
          <Currency quantity={price} currency='GBP' />
        </div>
        <div className='flex justify-center mt-5 w-[100%]'>
          <button onClick={() => addItemToBasket()} className='w-[100%] button'>Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;