import HandiCraftBag from "../../assets/images/Handicraftbag.jpg";

const ChooseBanner = () => {
  return (
    <div className="p-4 bg-blue-50">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="">
          <img
            src={HandiCraftBag}
            alt="image"
            className="w-full md:w-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseBanner;
