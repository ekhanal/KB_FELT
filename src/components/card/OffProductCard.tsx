interface Items {
  image: string;
  title: string;
  price: number;
  discountprice: number;
  description: string;
}

interface OffProductProps {
  items: Items;
}

const OffProductCard: React.FC<OffProductProps> = ({ items }) => {
  return (
    <>
      <div className="w-full rounded-md overflow-hidden border m-4">
        <div className="w-full flex flex-col items-center">
          <img
            src={items.image}
            alt={items.title}
            className="w-full rounded-t-md md:h-[300px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center p-2">
          <h3 className="text-gray-800 text-2xl font-bold text-center">
            {items.title}
          </h3>
          <p className="text-gray-800 text-sm md:text-base text-center min-h-16">
            {items.description}
          </p>
          <div className="flex items-center gap-2">
            {items.discountprice !== null && (
              <p className="text-xl">${items.discountprice}</p>
            )}
            <p
              className={`${
                items.discountprice
                  ? "line-through text-red-600 text-sm"
                  : "text-xl font-bold"
              }`}
            >
              ${items.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffProductCard;
