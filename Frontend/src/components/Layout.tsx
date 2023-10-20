import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Layout = () => {
  const { routeParam } = useParams();
 

  useEffect(() => {
    const currentRoute = window.location.pathname;
    localStorage.setItem("currentRoute", currentRoute);

    window.addEventListener("beforeunload", (event) => {
      if (event.type === 'beforeunload') {
        localStorage.setItem("currentRouteToNavigate", currentRoute);
      }
    });
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
