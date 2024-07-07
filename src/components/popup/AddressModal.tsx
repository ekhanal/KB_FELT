import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";
import Transition from "../../lib/Transition";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { showErrorMessage } from "../../utils/toast";
import { getValue } from "../../utils/object";
import { useClickOutside } from "../../hooks/useClickOutside.hook";
import CustomInput from "../form/custom/CustomInput";
import { useCreateAccount } from "../../hooks/auth.hook";
import Button from "../common/Button/Button";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const AddressModal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  onClose,
  title,
}) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickOutside(modalContent, visible, setVisible);
  const { mutateAsync: registerUser } = useCreateAccount();

  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
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
                <h1 className="text-[#01548d] flex justify-center text-lg md:text-xl font-bold mt-2">
                  {title}
                </h1>
              </div>

              <div className="p-5">
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

                    <div className="flex gap-5">
                      <CustomInput
                        type="text"
                        name="street"
                        placeHolder="Street"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="City"
                        placeHolder="City"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>

                    <div className="flex gap-5">
                      <CustomInput
                        type="text"
                        name="Country"
                        placeHolder="Country"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="Number"
                        name="Contact no"
                        placeHolder="Contact no"
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <Button title="Submit" onClick={onClose} />
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

export default AddressModal;
