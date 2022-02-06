import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/react';
import { selectItems } from '../../../slices/basketSlice';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const router = useRouter();

  return (
    <header>
      <div className='flex items-center justify-between bg-amazon_blue py-[10px] px-[16px]'>
        <div className='flex items-center flex-grow'>
          <div className='relative top-[2px] mr-3 cursor-pointer'>
            <Link href="/">
              <Image
                src='/amazon-icon.png'
                width={45}
                height={45}
                objectFit='contain'
                alt='Amazon'
                title='Amazon'
                className='animate-pulse'
              />
            </Link>
          </div>
          <div className='hidden md:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
            <input type='text' className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' />
            <SearchIcon className='h-14 p-4' />
          </div>
        </div>
        <div className='flex justify-end ml-4 items-center text-amazon_primary-white'>
        <div className='flex flex-col mr-5 text-center'>
          {session ? (
            <img
              src={session.user?.image}
              alt={session.user?.name}
              title={session.user?.name}
              className='w-10 h-10 rounded-full'
            />
          ) : (
            null
          )}
        </div>
          <div className='flex flex-col mr-5 text-center' onClick={!session ? signIn : signOut}>
            <p className='text-[11px] md:text-[14px] h-[15px]'>
              {session ? `Hey, ${session.user?.name.split(' ')[0]}` : 'Sign In'}
            </p>
            <strong className='text-[13px] md:text-[15px] font-extrabold cursor-pointer'>Account & Lists</strong>
          </div>
          <div onClick={() => router.push('/orders')} className='flex flex-col mr-5 text-center'>
            <p className='text-[11px] md:text-[14px] h-[15px] cursor-pointer'>Returns</p>
            <strong className='text-[13px] md:text-[15px] font-extrabold cursor-pointer'>& Orders</strong>
          </div>
          <div className='flex justify-center items-center'>
            <Link href="/checkout">
              <ShoppingCartIcon className='h-8 cursor-pointer' />
            </Link>
            <div className='flex flex-col justify-center items-center font-extrabold w-4 h-4'>
              <div className='relative flex justify-center items-center rounded-full top-[-10px] right-[5px] text-[12px] text-amazon_blue w-[20px] h-[20px] bg-yellow-400'>
                {items.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-blue_light'>
        <ul className='flex items-center py-4 px-5 text-sm text-amazon_primary-white'>
          <li className='flex items center mr-6 cursor-pointer'>
              <Link href="/"><MenuIcon className='h-5 mr-1' /></Link>
              <Link href="/"><p>All</p></Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Best sellers</Link>
          </li>
          <li className='mr-6 hover:underline cursor-pointer'>
            <Link href="/">Prime</Link>
          </li>
          <li className='mr-6 hover:underline cursor-pointer'>
            <Link href="/">Clothes</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Sports</Link>
          </li>
          <li className='mr-6 hover:underline cursor-pointer'>
            <Link href="/">Home & Kitchen</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Eletronics</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Smart Home</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Toys & Games</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Books</Link>
          </li>
          <li className='hidden md:inline mr-6 hover:underline cursor-pointer'>
            <Link href="/">Music</Link>
          </li>
        </ul>
      </div>
      <div className='w-[100%] bg-yellow-400 py-[2px]' />
    </header>
  );
}

export default Header; 