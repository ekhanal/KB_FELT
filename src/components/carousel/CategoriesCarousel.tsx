import { useGetAllCategory } from "../../hooks/product.hook";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { getValue } from "../../utils/object";
import { Link } from "react-router-dom";
const CategoriesCarosule = () => {
  const { data: category } = useGetAllCategory();

  return (
    <div className=" md:-mt-0 z-40 bg-white pt-8">
      <div className="text-center">
        <h1 className="text-base md:text-2xl font-semibold text-pink-400">
          CRAFT SUPPLIES
        </h1>
        <p className="text-[#22787f] ">
          Over 500+ unique designs with customization
        </p>
      </div>
      <div className="my-5 px-5 sm:px-6 lg:px-20 max-p-7xl z-20">
        <Splide
          options={{
            type: "slide",
            perPage: 8,
            arrows: false,
            gap: 3,
            rewind: true,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 5,
              },
              768: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
            },
          }}
          className="splide"
        >
          {category?.map((item: string) => (
            <SplideSlide>
              <Link
                to={`/ProductCategoryPage/${getValue(item, "category_slug")}`}
              >
                <div
                  key={item}
                  className=" justify-items-end   w-full  py-2 px-2 "
                >
                  <div className="flex justify-center  ">
                    <img
                      src={getValue(item, "category_image")}
                      alt="carousel item"
                      className="  flex cursor-pointer   h-9 w-9 md:h-20 md:w-20 object-cover hover:scale-105 duration-300 "
                    />
                  </div>
                  <span
                    className=" mt-2 flex justify-center text-[10px] md:text-[11px]  text-center line-clamp-1 md:line-clamp-2"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {getValue(item, "category_name")}
                  </span>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default CategoriesCarosule;
