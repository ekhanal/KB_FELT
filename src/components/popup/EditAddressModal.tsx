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

import Button from "../common/Button/Button";
import {
  // useAddAddress,
  useEditAddress,
  // useGetAllAddress,
  useGetAllAddressById,
} from "../../hooks/cart.hook";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  addressId: any;
}

const EditAddressModal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  onClose,
  title,
  addressId,
}) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickOutside(modalContent, visible, setVisible);

  const { mutateAsync: createAddress } = useEditAddress({
    id: addressId,
  });

  const { data: address } = useGetAllAddressById({ id: addressId });
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await createAddress(data);
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
                    <div className="flex gap-5">
                      <CustomInput
                        type="text"
                        name="first_name"
                        placeHolder="first name"
                        defaultValue={getValue(address, "0.first_name")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="last_name"
                        placeHolder="last name"
                        defaultValue={getValue(address, "0.last_name")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <div className="flex gap-5">
                      <CustomInput
                        type="Number"
                        name="phone"
                        placeHolder="Contact no"
                        defaultValue={getValue(address, "0.phone")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="email"
                        name="email"
                        placeHolder="email"
                        defaultValue={getValue(address, "0.email")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <div className="flex gap-5">
                      <CustomInput
                        type="text"
                        name="company_name"
                        placeHolder="company name"
                        defaultValue={getValue(address, "0.company_name")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="street_address"
                        placeHolder="Street"
                        defaultValue={getValue(address, "0.street_address")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>

                    <div className="flex gap-5">
                      <CustomInput
                        type="text"
                        name="town_city"
                        placeHolder="City"
                        defaultValue={getValue(address, "0.town_city")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="state"
                        placeHolder="state"
                        defaultValue={getValue(address, "0.state")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                      <CustomInput
                        type="text"
                        name="country_region"
                        placeHolder="country_region"
                        defaultValue={getValue(address, "0.country_region")}
                        style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                      />
                    </div>
                    <CustomInput
                      type="text"
                      name="zip_code"
                      placeHolder="zip_code"
                      defaultValue={getValue(address, "0.zip_code")}
                      style="py-2 md:py-3 text-sm md:text-base rounded-xl"
                    />
                    <div className="flex gap-5"></div>
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

export default EditAddressModal;
