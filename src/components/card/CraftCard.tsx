interface Item {
  image: string;
  Heading: string;
}

interface CraftCardProps {
  data: Item;
}

const CraftCard: React.FC<CraftCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg w-full sm:max-w-xs md:max-w-sm lg:max-w-md m-2 flex-grow">
      <img
        src={data.image}
        alt={data.Heading}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md"
      />
      <p className="mt-2 text-center text-sm font-medium text-gray-600 flex-grow">
        {data.Heading}
      </p>
    </div>
  );
};

export default CraftCard;
