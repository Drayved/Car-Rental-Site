import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useEffect } from "react";



const Layout = () => {

    const navigate = useNavigate();

    useEffect(() => {
    // Save the current route path to local storage
    localStorage.setItem("savedRoutePath", location.pathname);
    }, [navigate]);

    
    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout