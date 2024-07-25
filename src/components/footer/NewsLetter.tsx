const NewsLetter = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-white p-4">
        <h3 className="text-2xl text-[#4d5357] font-semibold text-center">
          Subscribe To Our Newsletter
        </h3>
        <p className="text-lg text-[#4d5357] text-center">
          Subscribe today to receive future updates and information from The
          Felt Store. You can unsubscribe at any time
        </p>
        <div className="w-fit flex items-center justify-center m-4 border">
          <input type="email" placeholder="Enter your email" className="focus:outline-none px-2 py-2 w-full sm:w-auto "/>
          <div>
            <button className=" text-white bg-pink-400  px-6 py-2">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
