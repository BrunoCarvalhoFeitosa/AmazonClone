import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import Currency from 'react-currency-formatter';
import axios from 'axios';
import Header from '../components/common/Header';
import ProductsInList from '../components/Checkout/ProducsIntList';
import Footer from '../components/common/Footer';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

console.log('stripePromise', stripePromise);

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session',
    {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    result.error && alert(result.error.message);
  };

  return (
    <div className='w-[100%] bg-gray-100 overflow-hidden'>
      <Head>
        <title>Amazon.com finish your purchase</title>
      </Head>
      <Header />
      <main className='flex flex-col mx-auto w-[95%] lg:items-start lg:flex-row lg-w[100%] max-w-screen-2xl'>
        <div className='flex flex-col py-8 space-y-10 lg:w-[80%]'>
          <h1 className='pb-2 text-[22px] font-bold border-b'>
              {items.length === 0 ? (
                <span>
                  Your Amazon Basket is empty, 
                  <Link href="/" className='text-blue-500'>
                    <span className='text-yellow-400 mx-1 cursor-pointer'>back</span>
                  </Link> 
                  to store and enjoy our products.
                </span>
              ) : (
                <span>Shopping Basket</span>
              )}
          </h1>
          <div className='shadow-md'>
            {items.map((item, i) => (
              <ProductsInList
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className={`flex flex-col justify-center items-center ${items.length && 'flex-grow py-10 lg:ml-6'} bg-amazon_primary-white shadow-md lg:mt-[119px]`}>
          {items.length > 0 && (
            <>
              <div className='whitespace-nowrap'>
                <h2>
                  <strong>Basket items: </strong>
                  {items.length}
                </h2>
                <h2>
                  <strong>Basket Subtotal: </strong>
                  <Currency quantity={total} currency='GBP' />
                </h2>
              </div>
              <div className='mt-3'>
                <button
                  role='link'
                  onClick={createCheckoutSession}
                  disabled={!session}
                  className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                >
                  {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;