import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentRoute", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const savedRoute = localStorage.getItem("currentRoute");

    if (savedRoute) {
      navigate(savedRoute);
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
