import React from 'react';
import Head from "next/head";
import Header from '../components/common/Header';
import Banner from '../components/Home/Banner';
import ProductShelf from '../components/Home/ProductShelf';
import Footer from '../components/common/Footer';

const Home = ({ products }) => {
  return (
    <div className='w-[100%] bg-gray-100 overflow-hidden'>
      <Head>
        <title>Amazon.com</title>
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        <div className='w-[100%]'>
          <Banner />
        </div>
        <div className='w-[100%]'>
          <ProductShelf products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

export default Home;