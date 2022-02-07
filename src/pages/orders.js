import React, { useEffect } from 'react';
import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import moment from 'moment';
import db from '../../firebase';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Order from '../components/Orders/Order';

const Orders = ({ orders }) => {
    const { data: session } = useSession();

    return (
        <div>
            <Head>
                <title>Amazon.com see all your orders</title>
            </Head>
            <Header />
            <main className='max-w-screen-lg mx-auto p-10'>
                <div>
                    <h1 className='mb-2 pb-2 border-b text-[22px] font-bold'>Your Orders</h1>
                </div>
                <div className='mt-2 mb-6'>
                    {session ? (
                        <h2 className='text-[13px]'>
                            {orders.length} {orders.length > 1 ? 'Orders' : 'Order'}
                        </h2>
                    ) : (
                        <h2 className='text-[13px]'>Please sign in to see your orders</h2>
                    )}
                </div>
                <div className=''>
                    {orders?.map(({
                        id,
                        amount,
                        amountShipping,
                        items,
                        timestamp,
                        images
                    }) => (
                        <Order
                           key={id}
                           id={id}
                           amount={amount}
                           amountShipping={amountShipping}
                           items={items}
                           timestamp={timestamp}
                           images={images}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
}