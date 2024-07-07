import ReactStars from "react-stars";
import CustomTextArea from "../form/custom/CustomtextArea";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useCreateAccount } from "../../hooks/auth.hook";
import { showErrorMessage } from "../../utils/toast";
import { getValue } from "../../utils/object";

const Review = () => {
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
      <div className="flex flex-col md:flex-row  gap-5 justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="user"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold text-lg ">User</span>
          </div>
          <div className="flex items-center gap-5">
            <ReactStars
              count={5}
              size={24}
              value={4}
              color1={"#999999"}
              color2={"#ffd700"}
              edit={false}
            />
            <span className="text-gray-400">on Dec 30, 2023</span>
          </div>
          <div>
            <span>nice</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="font-semibold text-sm">Give Stars</span>
          <ReactStars
            count={5}
            size={24}
            value={4}
            color1={"#999999"}
            color2={"#ffd700"}
            edit={true}
          />
          <span className="font-semibold text-sm">Title</span>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CustomTextArea
                name="title"
                placeHolder="Give Your Review"
                required={false}
              />
              <button
                type="submit"
                className="mt-4 p-2 bg-blue-900 text-white rounded"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default Review;
