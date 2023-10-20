import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { routeParam } = useParams();

  useEffect(() => {
    if (routeParam) {
      localStorage.setItem("currentRouteParam", routeParam);
    }
  }, [routeParam]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
