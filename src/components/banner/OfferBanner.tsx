import banner from "./../../assets/images/banner3.jpg";
const OfferBanner = () => {
  return (
    <>
      <div className="my-5 mx-5 lg:mx-20 ">
        <img
          src={banner}
          alt="banner"
          className="w-full h-44 lg:h-96 object-cover rounded-xl "
        />
      </div>
    </>
  );
};

export default OfferBanner;
