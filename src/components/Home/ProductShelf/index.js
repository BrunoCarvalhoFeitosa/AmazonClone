import React from 'react';
import Categories from '../Categories';
import Product from '../Product';

const ProductShelf = ({ products }) => {
  return (
    <div>
      <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52 w-[97%] mx-auto'>
        {products
          .slice(1, 4)
          .map(({
            id,
            title,
            price,
            description,
            category,
            image
          }) => (
            <Product 
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='w-[100%]'>
        <Categories />
      </div>
      <div className='w-[100%] lg:mb-[62px]'>
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 w-[97%] mx-auto'>
            {products
              .slice(5, 50)
              .map(({
                id,
                title,
                price,
                description,
                category,
                image
              }) => (
                <Product 
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductShelf;