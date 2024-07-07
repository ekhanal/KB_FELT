import TopProducts from "../../components/Products/TopProducts";
import TrendingProducts from "../../components/Products/TrendingProducts";
import DiscountBanner from "../../components/banner/DiscountBanner";
import OfferBanner from "../../components/banner/OfferBanner";
import Sale from "../../components/banner/SaleBanner";
import Carosule from "../../components/carousel/Carousel";
import CategoriesCarosule from "../../components/carousel/CategoriesCarousel";
import AllProducts from "../products/AllProducts";

const Dashboard = () => {
  return (
    <>
      <Carosule />
      <CategoriesCarosule />
      <Sale />
      <TopProducts />
      <DiscountBanner />
      <TopProducts />
      <OfferBanner />
      <TrendingProducts />
      <AllProducts />
    </>
  );
};

export default Dashboard;
