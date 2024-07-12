import React from 'react';

interface Items {
  image: string;
  title: string;
  description: string;
}

interface ShopMoreCardProps {
  items: Items;
}

const ShopMoreCard: React.FC<ShopMoreCardProps> = ({ items }) => {
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
        <h3 className="text-gray-800 text-2xl font-bold text-center min-h-16">
          {items.title}
        </h3>
        <p className="text-gray-800 text-sm md:text-base text-center">
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default ShopMoreCard;
