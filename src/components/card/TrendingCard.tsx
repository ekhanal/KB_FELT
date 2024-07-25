// import { Link } from "react-router-dom";

interface Item {
  image: string;
  title: string;
  price: number;
}

interface TrendingCardProps {
  item: Item;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ item }) => {
  return (
    <div className="w-full  rounded-md overflow-hidden border m-4">
      {/* <Link to={"/productDetailsPage"}> */}
      <a href={"/productDetailsPage"}>
      <div className="w-full flex flex-col items-center">
        <img
          className="w-full rounded-t-md md:h-[300px] object-cover"
          src={item.image}
          alt={item.title}
        />
        <div className=" flex flex-col items-center  p-2">
          <h3 className="text-gray-800 text-lg font-semibold text-center min-h-16">
            {item.title}
          </h3>
          <p className="text-sm md:text-base font-bold text-center text-[#22787f]  '">
            ${item.price}
          </p>
        </div>
      </div>
      </a>
      {/* </Link> */}
    </div>
  );
};

export default TrendingCard;
