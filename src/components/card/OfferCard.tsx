interface Item {
  image: string;
  title: string;
  price: number;
  offer: string;
}
interface offerProductProps {
  item: Item;
}
const OfferCard: React.FC<offerProductProps> = ({ item }) => {
  return (
    <div className="relative w-full rounded-md overflow-hidden border m-4">
      <div className="w-full flex flex-col items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full rounded-t-md md:h-[300px] object-cover"
        />
        <div className="flex flex-col items-center p-2">
          <h3 className="text-gray-800 text-base text-center md:text-left">
            {item.title}
          </h3>
          <p className="text-gray-800 text-sm md:text-base font-bold text-center md:text-left">
            ${item.price}
          </p>
          <button className=" absolute top-2 right-2 border border-gray-300 bg-pink-400 py-1 px-2 rounded-md text-white">{item.offer} Off</button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
