import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";
import Transition from "../../lib/Transition";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Logo from "./../../assets/images/kb fent logo.svg";
import { showErrorMessage } from "../../utils/toast";
import { getValue } from "../../utils/object";
import { useClickOutside } from "../../hooks/useClickOutside.hook";
import CustomInput from "../form/custom/CustomInput";
import { useCreateAccount } from "../../hooks/auth.hook";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpModal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  onClose,
}) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickOutside(modalContent, visible, setVisible);
  const { mutateAsync: registerUser, isPending } = useCreateAccount();

  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      const response = await registerUser(data);
      if (response) {
        setVisible(false);
      }
    } catch (err) {
      showErrorMessage(getValue(err, "err"));
      console.error(err);
    }
  };

  return (
    <>
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 transition-opacity"
        show={visible}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      <Transition
        id={"category"}
        className="fixed inset-0 z-[100] overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={visible}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="relative bg-white border border-transparent dark:border-slate-700 overflow-auto w-[90%] lg:w-[50%] rounded-3xl shadow-lg pb-5 "
        >
          <button
            type="button"
            className="absolute right-2 bg-red-500 top-2 text-white rounded-full"
            data-modal-toggle="add-user-modal"
            onClick={onClose}
          >
            <IoCloseSharp className="text-xl" />
          </button>
          <div className="w-full flex justify-center items-center">
            <div className="w-[80%]">
              <div className="flex items-center flex-col">
                <img src={Logo} alt="Logo" className="h-24 md:h-32" />
                <h1 className="text-pink-400 flex justify-center text-lg md:text-2xl font-bold">
                  User SignUp
                </h1>
              </div>

              <div className="p-0 md:p-5">
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <CustomInput
                      type="text"
                      name="full_name"
                      placeHolder="Full name"
                      style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                    />

                    <div className="flex flex-col md:flex-row gap-5 md:gap-2">
                      <CustomInput
                        type="email"
                        name="email"
                        placeHolder="Email address"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />

                      <CustomInput
                        type="number"
                        name="number"
                        placeHolder="Mobile no."
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <div className="flex gap-2">
                      <CustomInput
                        type="password"
                        name="password"
                        placeHolder="Enter password"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="password"
                        name="Confirm password"
                        placeHolder="Confirm password"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <div className="flex gap-2">
                      <CustomInput
                        type="text"
                        name="DOB"
                        placeHolder="yyyy-mm-dd"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="gender"
                        placeHolder="Gender"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>

                    <button
                      className="uppercase bg-pink-400 text-white font-bold text-sm py-3 rounded-md"
                      disabled={isPending}
                    >
                      Sign Up
                    </button>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default SignUpModal;
