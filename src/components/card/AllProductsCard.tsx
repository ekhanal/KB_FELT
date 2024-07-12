import React from 'react';
interface Items {
  image: string;
  title: string;
  description: string;
  price:number;
}

interface AllProductsProps {
  items: Items;
}
const AllProductsCard: React.FC<AllProductsProps> = ({ items }) => {
  return (
    <div className="w-full  rounded-md overflow-hidden border m-4 ">
      <div className="w-full flex flex-col items-center">
      <img
        className=" w-full rounded-t-md md:h-[300px] object-cover"
        src={items.image}
        alt={items.title}
      />
      </div>
      <div className="flex flex-col items-center  p-2">
        <h3 className="text-gray-800 text-2xl font-bold text-center  ">
          {items.title}
        </h3>
        <p className="text-gray-800 text-sm md:text-base text-center">
          {items.description}
        </p>
        <p className='text-gray-800 text-sm md:text-base font-bold text-center'>
            ${items.price}
        </p>
      </div>
    </div>
  );
};

export default AllProductsCard;
