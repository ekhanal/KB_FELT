import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";
import Transition from "../../lib/Transition";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { useLoginAccount, useUserProfile } from "../../hooks/auth.hook";
import { showErrorMessage } from "../../utils/toast";
import Logo from "./../../assets/images/kb fent logo.svg";

import { AUTH_COOKIE_CONFIG } from "../../constants/common";
import { getValue } from "../../utils/object";
import { useAuthContext } from "../../hooks/contextConsumer.hook";
import { setCookie } from "../../utils/cookie";
import CustomInput from "../form/custom/CustomInput";
import { useClickOutside } from "../../hooks/useClickOutside.hook";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: React.FC<ModalProps> = ({ visible, setVisible, onClose }) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickOutside(modalContent, visible, setVisible);
  const methods = useForm();

  const { mutateAsync: loginAccount } = useLoginAccount();
  const { setIsLoggedIn } = useAuthContext();
  const { refetch: userdata } = useUserProfile();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        email: data.email,
        password: data.password,
      };

      console.log(resData);
      const response = await loginAccount(resData);
      const refresh = getValue(response.token, "refresh");
      const access = getValue(response.token, "access");
      console.log(response);

      setCookie({
        cookieName: AUTH_COOKIE_CONFIG.loggedInCookie,
        value: "true",
        expiresIn: 1,
      });
      setCookie({
        cookieName: AUTH_COOKIE_CONFIG.ACCESS_TOKEN,
        value: access,
        expiresIn: 1,
      });
      setCookie({
        cookieName: AUTH_COOKIE_CONFIG.REFRESH_TOKEN,
        value: refresh,
        expiresIn: 1,
      });
      setIsLoggedIn(true);

      userdata();
    } catch (err) {
      showErrorMessage(getValue(err, "message"));
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
          className="relative bg-white  border border-transparent dark:border-slate-700 overflow-auto w-[90%] lg:w-[50%]  rounded-3xl shadow-lg pb-5"
        >
          <button
            type="button"
            className="absolute right-2 top-2 bg-red-500 text-white rounded-full"
            data-modal-toggle="add-user-modal"
            onClick={onClose}
          >
            <IoCloseSharp className="text-xl" />
          </button>
          <div className="w-full flex justify-center items-center ">
            <div className="w-[80%]  ">
              <div className=" flex items-center flex-col">
                <img src={Logo} alt="Logo" className="h-24 md:h-32" />
                <h1 className="text-pink-400 flex justify-center text-2xl md:text-3xl font-bold ">
                  User Login
                </h1>
              </div>

              <div className="p-5 ">
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <CustomInput
                      type="email"
                      name="email"
                      placeHolder="Email Address"
                      style="py-3 text-sm md:text-xl rounded-xl"
                    />

                    <CustomInput
                      type="password"
                      name="password"
                      placeHolder="Password"
                      style="py-3 text-sm md:text-xl  rounded-xl"
                    />
                    <span className="text-pink-400 flex self-end text-sm md:text-base ">
                      Forgot Password?
                    </span>
                    <button className="uppercase bg-pink-400 text-white font-bold text-sm md:text-base py-2 md:py-3 rounded-md ">
                      Login
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

export default LoginModal;
