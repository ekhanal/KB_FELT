// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import { PATH } from "../constants/path";
import Dashboard from "../pages/home/Dashboard";
import Navbar from "../components/header/Navbar";
// import TopNavbar from "../components/header/TopNavbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductDetailPage from "../pages/products/ProductDetailsPage";
import Cart from "../pages/cart/Cart";
// import PaymentMethod from "../pages/payment/PaymentMethod";
import Payment from "../pages/payment/Payment";
import Wishlist from "../pages/wishlist/Wishlist";
// import MobileFooter from "../components/footer/MobileFooter";
import CategoryCardPage from "../pages/products/CategoryCardPage";
import Testimonials from "../components/footer/Testimonials";
import NewsLetter from "../components/footer/NewsLetter";
import Display from "../components/footer/Display";
import ProductCategoryPage from "../pages/products/ProductCategoryPage";

const Layout = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className=" relative flex h-screen overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          {/* <TopNavbar /> */}
          <Navbar />
          <Header />
          <Main>
            <Routes>
              <Route path={PATH.dashboard} element={<Dashboard />} />
              <Route
                path={PATH.productDetailsPage}
                element={<ProductDetailPage />}
              />
              <Route path={PATH.cart} element={<Cart />} />
              <Route
                path={`${PATH.productCategoryPage}/:product`}
                element={<ProductCategoryPage />}
              />
              <Route path={PATH.payment} element={<Payment />} />
              <Route path={PATH.wishlist} element={<Wishlist />} />
              <Route
                path={PATH.categoryCardPage}
                element={<CategoryCardPage />}
              />
            </Routes>
          </Main>
          <Testimonials />  
          <NewsLetter />
          <Display/>
          <Footer />
          {/* <MobileFooter /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
