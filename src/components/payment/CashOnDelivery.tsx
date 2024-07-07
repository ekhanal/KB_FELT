import ButtonLogin from "../common/Button/ButtonLogin";

const CashOnDelivery = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">
          Cash Collection Charges: Costs $20
        </span>
        <ButtonLogin title="Pay $10,00,000" styles="py-2" />
      </div>
    </>
  );
};

export default CashOnDelivery;
