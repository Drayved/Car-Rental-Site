import { useState, useEffect } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 800);

    useEffect(() => {
      const handleResize = () => {
        setShowMenu(window.innerWidth >= 800);
      };
  
      // Listen for window resize events
      window.addEventListener("resize", handleResize);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <div className="z-20 relative">
      <div className="absolute top-3 flex ml-3">
        <img className="w-20 mr-2 " src="/images/blue-car.png" alt="" />
        <div>
          <h1 className="text-2xl font-bold mt-3">CAR</h1>
          <h2 className="font-semibold text-lg mt-[-7px]">Rental</h2>
        </div>
      </div>
      {window.innerWidth < 800 ? (
        <div>
          {showMenu ? (
            <div className="">
              
              <button className="absolute right-5 top-5 text-2xl z-20" onClick={toggleMenu}>X</button>
              <ul className="small-nav-container absolute z-10">
                <li>Home</li>
                <li>About</li>
                <li>Vehicle Models</li>
                <li>Testimonials</li>
                <li>Our Team</li>
                <li>Contact</li>
              </ul>
            </div>
          ) : (
            <div className="flex justify-end mt-10 mr-10">
                <button className="menu-button" onClick={toggleMenu}>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                </button>
            </div>
            
          )}
        </div>
      ) : (
        <ul className="nav-container ">
          <li>Home</li>
          <li>About</li>
          <li>Vehicle Models</li>
          <li>Testimonials</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
