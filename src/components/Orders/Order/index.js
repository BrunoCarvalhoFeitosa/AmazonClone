import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';

const Order = ({
    id,
    amount,
    amountShipping,
    items,
    timestamp,
    images
}) => {
    return (
        <div className='relative border rounded-md mb-5'>
            <div className='flex items-center justify-between p-5 bg-gray-100 text-sm text-gray-500'>
                <div className='flex flex-col'>
                    <div>
                        <h3 className='uppercase font-bold'>ORDER PLACED</h3>
                    </div>
                    <div>
                        <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h3 className='uppercase font-bold'>TOTAL</h3>
                    </div>
                    <div>
                        <p>
                            <span className='mr-2'>
                                <Currency quantity={amount} currency='GBP' /> 
                            </span>
                            - Next-Day Delivery
                            <span className='ml-2'>
                                <Currency quantity={amountShipping} currency='GBP' /> 
                            </span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h3 className='w-40 md:w-80 truncate whitespace-nowrap'>Order #{id}</h3>
                    </div>
                    <div>
                        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
                            {items.length} {items.length > 1 ? 'items' : 'item'}
                        </p>
                    </div>
                </div>
           </div>
           <div className='p-5 md:p-10'>
               <div className='flex space-x-10 overflow-x-auto'>
                   {images.map(image => (
                       <img key={image} src={image} className='h-20 md:h32 object-contain' />
                   ))}
               </div>
           </div>
       </div>
    );
}

export default Order;