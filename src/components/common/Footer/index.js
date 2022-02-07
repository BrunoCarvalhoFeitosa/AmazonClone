import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Footer = () => {
  const { data: session } = useSession();

  const handleScrollTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
      <footer className='w-[100%] mt-8'>
        <div className='w-[100%] py-8 bg-white'>
          <div className='flex flex-col justify-center items-center'>
            <h5 className='text-[15px]'>See personalized recommendations</h5>
            <button 
              onClick={signIn}
              className='button my-2 w-[250px] rounded-md border border-yellow-500 font-semibold'
            >
              Sign in
            </button>
            <h5 className='text-[15px]'>
              New customer?
              <Link href='/'>
                <span className='ml-[4px] text-blue-500 cursor-pointer'>Start here.</span>
              </Link>  
            </h5>
          </div>
        </div>
        <div className='w-[100%]'>
          <button onClick={handleScrollTop} className='w-[100%] py-4 bg-blue_medium text-white cursor-pointer hover:opacity-90 focus:border-0 focus:outline-none'>Back to top</button>
        </div>
        <div className='bg-blue_light py-10'>
          <div className='grid grid-flow-row-dense md:grid-cols-3 w-[76%] mx-auto'>
            <div className='mb-10 md:mb-0'>
              <h4 className='mb-2 text-[20px] font-bold text-center text-white'>Most searched categories</h4>
              <ul className='text-center'>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Clothes to men</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Clothes to women</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Clothes to kids</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Clothes to sports</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Furniture</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Eletronics</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Smart Home</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Home & Kitchen</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Toy & Games</li>
              </ul>
            </div>
            <div className='mb-10 md:mb-0'>
              <h4 className='mb-2 text-[20px] font-bold text-center text-white'>Institutional guides</h4>
              <ul className='text-center'>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Account access</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Orders access</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Login access</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Register access</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Institutional</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Delivery</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Privacy policy</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Terms and conditions</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Our stores</li>
              </ul>
            </div>
            <div>
              <h4 className='mb-2 text-[20px] font-bold text-center text-white'>Attendance and support</h4>
              <ul className='text-center'>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Common questions</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Chat online</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Send a mensagem</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Buy by phone</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Track order</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Pickup in store</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Payment reversal</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Defective product</li>
                <li className='text-[14px] text-gray-300 mb-[6px] hover:underline cursor-pointer'>Lost delivery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-blue_light py-[30px] border-t-[1px] border-gray-700'>
          <div className='w-[100%]'>
            <ul className='flex justify-center items-center w-[80% mx-auto]'>
              <li className='hidden md:inline mr-5 text-white text-[13px] hover:underline cursor-pointer'>Conditions of Use</li>
              <li className='hidden md:inline mr-5 text-white text-[13px] hover:underline cursor-pointer'>Privacy Notice</li>
              <li className='hidden md:inline mr-5 text-white text-[13px] hover:underline cursor-pointer'>Interest-Based Ads</li>
              <li className='mr-5 text-white text-[13px]'>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center w-[100%] bg-amazon_blue py-[15px] px-[20px] border-b-[2px] border-yellow-400'>
          <div>
            <div className='cursor-pointer'>
              <Link href="/">
                <img
                  src='/amazon-icon.png'
                  loading='lazy'
                  alt='Amazon'
                  title='Amazon'  
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;