import React, { useState } from "react";
import ReactStars from "react-stars";
import CustomTextArea from "../form/custom/CustomtextArea";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { showErrorMessage } from "../../utils/toast";
import { getValue } from "../../utils/object";
import { useGetAllComment, usePostComment } from "../../hooks/product.hook";
import { useUserProfile } from "../../hooks/auth.hook";

// Define the types for the props
interface ReviewProps {
  reviewData: {
    comment: string;
    rating: number;
  }[];
  id: any;
}

const Review: React.FC<ReviewProps> = ({ id }) => {
  // Receive productId as a prop
  const { mutateAsync: comment } = usePostComment();
  const { data: user } = useUserProfile();
  const { data: getcomment } = useGetAllComment({ product_id: id });

  const methods = useForm();
  const [rating, setRating] = useState<number>(4); // Maintain the rating state

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const reviewDataWithRating = {
        ...data,
        rating,
        product: id,
        user: user.user.id, // Include productId in the form data
      };
      console.log({ review: id });
      const response = await comment(reviewDataWithRating);
      if (response) {
        // Handle successful response
      }
    } catch (err) {
      showErrorMessage(getValue(err, "err"));
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <React.Fragment>
          {getcomment?.length > 0 ? (
            <>
              {getcomment.map((items: any) => (
                <>
                  <div>
                    <div className="flex gap-2 items-center">
                      <img
                        src={
                          items.user.avatar
                            ? getValue(items, "user.avatar")
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        }
                        alt="user"
                        className="h-8 w-8 rounded-full"
                      />
                      <span className="font-semibold text-lg">
                        {getValue(items, "user.name")}
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <ReactStars
                        count={5}
                        size={24}
                        value={getValue(items, "rating")}
                        color1={"#999999"}
                        color2={"#ffd700"}
                        edit={false}
                      />
                      <span className="text-gray-400">on Dec 30, 2023</span>
                    </div>
                    <div>
                      <span>{getValue(items, "comment")}</span>
                    </div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <span>No comment</span>
          )}
        </React.Fragment>

        <div className="w-full md:w-1/2">
          <span className="font-semibold text-sm">Give Stars</span>
          <ReactStars
            count={5}
            size={24}
            value={rating}
            color1={"#999999"}
            color2={"#ffd700"}
            edit={true}
            onChange={setRating} // Update rating state
          />
          <span className="font-semibold text-sm">Title</span>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CustomTextArea
                name="comment"
                placeHolder="Give Your Review"
                required={false}
              />
              <button
                type="submit"
                className="mt-4 p-2 primary-bg-colors text-white rounded"
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
