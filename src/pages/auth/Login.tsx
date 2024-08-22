import { Link, useNavigate } from "react-router-dom";
import AuthImg from "../../assets/images/login.jpg";
import { showErrorMessage } from "../../utils/toast";
import { useLoginAccount, useUserProfile } from "../../hooks/auth.hook";
import { setCookie } from "../../utils/cookie";
import { getValue } from "../../utils/object";
import { AUTH_COOKIE_CONFIG } from "../../constants/common";
import { PATH } from "../../constants/path";
import Button from "../../components/common/Button/Button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import CustomInput from "../../components/form/custom/CustomInput";

// import FacebookLoginComponent from "./FacebookComponent";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const methods = useForm();

  const { mutateAsync: loginAccount, isPending } = useLoginAccount();
  const { refetch: userdata } = useUserProfile();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const resData = {
        email: data.email,
        password: data.password,
      };

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

      userdata();
      navigate(PATH.dashboard);
    } catch (err) {
      showErrorMessage(getValue(err, "message"));
    }
  };

  return (
    <div className="relative w-full h-full bg-gray-100 z-10">
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="w-full flex flex-wrap justify-center lg:justify-center h-full px-6 lg:px-0 z-20">
        <div className="w-full md:w-7/12 flex justify-center my-16 bg-white shadow-xl z-20">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full flex flex-col p-5">
              <h2 className="text-xl md:text-2xl font-bold">
                Please Login! ✨
              </h2>

              <div className="w-full flex justify-center items-center mt-5">
                <div className="w-full text-black">
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                      <CustomInput
                        type="text"
                        name="email"
                        placeHolder="Enter Your Email"
                        required={true}
                        style="py-4"
                      />
                      <CustomInput
                        type="password"
                        name="password"
                        placeHolder="Enter Your Password"
                        required={true}
                        style="mt-4 py-4"
                      />
                      <div className="pt-5 flex justify-end">
                        <p className="text-gray-500 font-light text-xs md:text-sm">
                          <Link
                            to={PATH.forgotPassword}
                            className="pl-2 text-[#6366f1] hover:underline"
                          >
                            Forgot Password?
                          </Link>
                        </p>
                      </div>
                      <div className="mt-5">
                        <Button
                          title="Log In"
                          disabled={isPending}
                          styles="bg-[#6366f2]"
                        />
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
              <div>
                {" "}
                <div
                  id="googleSignInButton"
                  className="w-full my-3 flex justify-center "
                ></div>
                {/* <FacebookLoginComponent /> */}
              </div>
              <div className="flex justify-center w-full px-5 ">
                <div className="">
                  <p className="text-gray-500 font-light text-xs md:text-sm">
                    className="pl-2 text-[#6366f1] hover:underline" New member?
                    Register here
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-1/2 h-[440px]">
            <img
              src={AuthImg}
              alt="Authentication"
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
