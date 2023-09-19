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
    <div>
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
            <div className="flex justify-end mt-5 mr-5">
                <button  onClick={toggleMenu}>Toggle Menu</button>
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
