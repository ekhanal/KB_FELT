const Wallet = () => {
  return (
    <>
      {Array(5)
        .fill(5)
        .map((index) => (
          <>
            <div
              className="flex justify-between items-center border-b py-2 "
              key={index}
            >
              <div className="flex gap-2 items-center">
                <img
                  src="https://i.ibb.co/0Vq4v0d/wallet.png"
                  alt="wallet"
                  className="w-10 h-10 rounded-full"
                />
                <span>PayPhone</span>
              </div>
              <div>
                <input type="radio" />
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default Wallet;
