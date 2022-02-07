import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Success = () => {
    const router = useRouter();

    return (
        <div className='bg-gray-100 h-screen'>
            <Head>
                <title>Amazon.com your order has been confirmed</title>
            </Head>
            <Header />
            <main className='max-w-screen-lg mx-auto my-16'>
                <div className='flex flex-col p-10 bg-amazon_primary-white'>
                    <div className='flex justify-center items-center'>
                        <div className='mr-3'>
                            <CheckCircleIcon className='text-green-500 h-10' />
                        </div>
                        <div>
                            <h1 className='text-[25px]'>Thank you, your order has been confirmed!</h1>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center'>Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below.</p>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button
                            onClick={() => router.push('/orders')}
                            className='button w-[250px] font-semibold rounded-md'
                        >
                            Go to my orders
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Success;