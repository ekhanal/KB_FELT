import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useGetAllSlider } from "../../hooks/product.hook";
import { getValue } from "../../utils/object";

const Carosule: React.FC = () => {
  const { data: carasoule } = useGetAllSlider();

  return (
    <div className=" z-10  w-full ">
      <Splide
        options={{
          type: "slide",
          perPage: 1,
          gap: 3,
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 1,
            },
            768: {
              perPage: 1,
            },
            640: {
              perPage: 1,
            },
          },
        }}
        className="splide"
      >
        {carasoule?.map((item: any) => (
          <SplideSlide>
            <div
              key={getValue(item, "id")}
              className="flex justify-center items-center"
              style={{ padding: "0px" }}
            >
              <div className="w-full max-h-52 md:max-h-full md:h-full      ">
                <img
                  src={getValue(item, "image")}
                  alt={getValue(item, "title")}
                  className="w-full min-h-20 max-h-96 object-contain md:object-cover  "
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carosule;
