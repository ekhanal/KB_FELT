import MoreProduct from "../../components/Products/MoreProduct";
import NewArrival from "../../components/Products/NewArrival";
// import TopProducts from "../../components/Products/TopProducts";
import TrendingProducts from "../../components/Products/TrendingProducts";
import ChooseBanner from "../../components/banner/ChooseBanner";
// import DiscountBanner from "../../components/banner/DiscountBanner";
// import OfferBanner from "../../components/banner/OfferBanner";
// import Sale from "../../components/banner/SaleBanner";
import Carosule from "../../components/carousel/Carousel";
import CategoriesCarosule from "../../components/carousel/CategoriesCarousel";
// import AllProducts from "../products/AllProducts";
import AllProduct from "../../components/Products/AllProduct";
import OffProduct from "../../components/Products/OffProduct";
import OfferPage from "../../components/Products/OfferPage";

const Dashboard = () => {
  return (
    <>
      <Carosule />
      <CategoriesCarosule />
      <NewArrival />
      <ChooseBanner />
      <TrendingProducts />
      <MoreProduct />
      <OffProduct />
      <OfferPage />
      <AllProduct />
    </>
  );
};

export default Dashboard;
