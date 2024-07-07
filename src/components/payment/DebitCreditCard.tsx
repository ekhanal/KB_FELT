import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useCreateAccount } from "../../hooks/auth.hook";
import { showErrorMessage } from "../../utils/toast";
import { getValue } from "../../utils/object";
import CustomInput from "../form/custom/CustomInput";
import ButtonLogin from "../common/Button/ButtonLogin";
import mastercard from "./../../assets/images/mastercard.png";
import rupay from "./../../assets/images/rupay.png";
import visa from "./../../assets/images/visa.png";
import american from "./../../assets/images/american.png";
const DebitCreditCard = () => {
  const methods = useForm();
  const { mutateAsync: registerUser } = useCreateAccount();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await registerUser(data);
      if (response) {
      }
    } catch (err) {
      showErrorMessage(getValue(err, "err"));
      console.error(err);
    }
  };
  return (
    <>
      <div>
        <div className="flex gap-5 justify-end mb-2">
          <img src={mastercard} alt="master card" className="w-10 h-10" />
          <img src={visa} alt="master card" className="w-10 h-10" />
          <img src={rupay} alt="master card" className="w-12 h-8" />
          <img src={american} alt="master card" className="w-10 h-10" />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <CustomInput placeHolder="Name on card " type="text" name="card" />
            <CustomInput
              placeHolder="xxxx xxxx xxxx xxxx"
              type="number"
              name="card"
            />{" "}
            <div className="flex gap-5">
              <CustomInput
                placeHolder="Month / Year "
                type="number"
                name="card"
              />{" "}
              <CustomInput placeHolder="CVV" type="number" name="card" />
            </div>
          </form>
        </FormProvider>
        <div className="flex items-center gap-2 mt-8 font-semibold ">
          <input type="checkbox" />
          <span>Save card details for later</span>
        </div>
        <span className="text-rose-500 text-xs ">
          This transaction you make is totally secure. we don’t save your CVV
          number
        </span>
        <ButtonLogin title="Pay $10,00,000" styles="w-full py-2 mt-2" />
      </div>
    </>
  );
};

export default DebitCreditCard;
