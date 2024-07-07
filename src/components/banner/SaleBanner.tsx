import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sale from "./../../assets/images/sale.png";

const Sale = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-5 lg:mx-20 my-5 md:my-10">
      <Slider className="custom-slider" {...settings}>
        {Array(3)
          .fill(3)
          .map((item) => (
            <div key={item} className="rounded-lg pr-0 md:pr-5 outline-none ">
              <img src={sale} alt="Sale item" className="w-full" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Sale;
