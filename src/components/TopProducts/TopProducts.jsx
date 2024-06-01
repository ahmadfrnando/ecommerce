// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from '../../assets/shirt/shirt.png';
import img2 from '../../assets/shirt/shirt2.png';
import img3 from '../../assets/shirt/shirt3.png';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: 'Casual Wear',
    description: 'Discover our Casual Wear collection, designed for comfort and effortless style.',
  },
  {
    id: 2,
    img: img2,
    title: 'Printed Shirt',
    description: 'Make a statement with our Printed Shirts, featuring unique patterns and bold designs.',
  },
  {
    id: 3,
    img: img3,
    title: 'Women Shirt',
    description: 'Elevate your wardrobe with our Women Shirts collection, tailored for modern elegance and sophistication.',
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-left mb-20">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hot Picks Just for You
          </p>
        </div>
        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center">
          {ProductsData.map((data) => (
            <div
            key={data.id} 
            data-aos="zoom-in"
            className="rounded-2xl bg-white curesor-pointer dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              {/* image section */}
              <div className='h-[100px]'>
                <img src={data.img} alt="" 
                className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              {/* detail section */}
              <div className='p-4 text-center'>
                {/* star rating */}
                <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button
                className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                // onClick={handleOrderPopup}
                >Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
