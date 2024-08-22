import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Layout from "./layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PrivateRouteWrapper from "./layout/PrivateRouteWrapper";
// import PublicRouteWrapper from "./layout/PublicRouteWrapper";
import { PATH } from "./constants/path";
// import Login from "./pages/auth/Login";
import Navbar from "./components/header/Navbar";
import Header from "./components/header/Header";
import Dashboard from "./pages/home/Dashboard";
import ProductDetailPage from "./pages/products/ProductDetailsPage";
import Cart from "./pages/cart/Cart";
import ProductCategoryPage from "./pages/products/ProductCategoryPage";
import Payment from "./pages/payment/Payment";
import Wishlist from "./pages/wishlist/Wishlist";
import CategoryCardPage from "./pages/products/CategoryCardPage";
import Testimonials from "./components/footer/Testimonials";
import NewsLetter from "./components/footer/NewsLetter";
import Display from "./components/footer/Display";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./scroll/ScrollToTop";
import SearchPage from "./pages/products/SearchPage";
import PaymentMethod from "./pages/payment/PaymentMethod";
import Login from "./pages/auth/Login";
// import { useAuthContext } from "./hooks/contextConsumer.hook";

const App = () => {
  // const { isLoggedIn } = useAuthContext();
  return (
    <div className="relative">
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Header />

        <div className="overflow-x-hidden">
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
            <Route path={PATH.searchPage} element={<SearchPage />} />
            <Route path={PATH.paymentMethod} element={<PaymentMethod />} />
            <Route path={PATH.login} element={<Login />} />
          </Routes>
        </div>
        <Testimonials />
        <NewsLetter />
        <Display />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
