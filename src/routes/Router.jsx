import { createBrowserRouter, useLocation } from "react-router-dom";
import Hero from "../pages/Hero";
import Header from "../components/nav/Header";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "./../pages/Register";
import Cart from "./../pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppStore } from "../../store/appStore";
import { useEffect } from "react";
import { DetailPage} from "../pages";
import Loader from "../components/Loader";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Shop from "../pages/Shop";
import ShopDetails from "../pages/ShopDetails"; // Import your ShopDetails component
const Layout = () => {
  const { pathname } = useLocation();
  const { loading } = useAppStore();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      {loading && <Loader />}
      <ToastContainer autoClose={500} />
      <Header />
      <Outlet />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <DetailPage />,
      },
      {
        path: "about", // ✅ ADD THIS ROUTE
        element: <AboutUs />,
      },
      {
        path: "contact", // ✅ ADD THIS ROUTE
        element: <ContactUs />,
      },
      {
        path: "shop", // ✅ ADD THIS ROUTE
        element: <Shop/>,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails />, // ShopDetails should match your import path
      }
      
    ],
    
    
  },
]);

export default routes;
