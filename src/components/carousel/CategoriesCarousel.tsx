import Slider from "react-slick";
import { Link } from "react-router-dom";
import shoes from "./../../assets/images/motors3.png";
import { useEffect } from "react";
import axios from "axios";

const CategoriesCarosule = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://127.0.0.1:8000/api/v1/product/all/categories/"
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const { data: category } = useGetAllCategory();
  // console.log(category);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    draggable: true,
    swipeToSlide: true,
    nextArrow: null,
    prevArrow: null,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" -mt-20 md:-mt-0 z-40  md:bg-transparent">
      <div className="my-5 px-5 sm:px-6 lg:px-20 max-p-7xl z-20  ">
        <Slider
          className="bg-white md:bg-transparent rounded-lg z-40"
          {...settings}
        >
          {Array(50)
            .fill(50)
            .map((item) => (
              <Link to={"/ProductCategoryPage"}>
                <div key={item} className=" justify-items-end   w-full ">
                  <div className="flex justify-center ">
                    <img
                      src={shoes}
                      alt="carousel item"
                      className="  flex cursor-pointer  rounded-full h-14 w-14 md:h-28 md:w-28 object-cover "
                    />
                  </div>
                  <span className=" mt-1 flex justify-center text-xs md:text-sm">
                    Heading
                  </span>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesCarosule;
