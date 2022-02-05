import React from 'react';
import { useDispatch } from 'react-redux';
import Currency from 'react-currency-formatter';
import { addToBasket, removeFromBasket } from '../../../slices/basketSlice';
import { StarIcon } from '@heroicons/react/solid';

const ProductsInList = ({
    id,
    title,
    price,
    description,
    category,
    rating,
    image,
}) => {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            rating,
            image,
        };

        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 bg-amazon_primary-white p-8'>
            <div className='mx-auto transform transition duration-250 hover:scale-[1.1] cursor-pointer'>
                <img
                    loading='lazy'
                    src={image}
                    alt={title}
                    title={title}
                    width={200}
                    height={200}
                />
            </div>
            <div className='col-span-3 mx-5'>
                <div className='mb-3'>
                    <h3 className='text-center mt-4 md:mt-0 md:text-left italic'>{title}</h3>
                </div>
                <div>
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
                <div className='flex items-center'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <div className='my-2'>
                    <p className='text-xs md:text-sm line-clamp-3'>{description}</p>
                </div>
                <div className='text-[20px] font-extrabold'>
                    <Currency quantity={price} currency='GBP' />
                </div>
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Add to basket</button>
                <button onClick={removeItemFromBasket} className='button mt-auto'>Remove from basket</button>
            </div>
        </div> 
    );
}

export default ProductsInList;