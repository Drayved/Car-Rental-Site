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
            <div>
              <button onClick={toggleMenu}>Close Menu</button>
              <ul className="small-nav-container">
                <li>Home</li>
                <li>About</li>
                <li>Vehicle Models</li>
                <li>Testimonials</li>
                <li>Our Team</li>
                <li>Contact</li>
              </ul>
            </div>
          ) : (
            <button onClick={toggleMenu}>Toggle Menu</button>
          )}
        </div>
      ) : (
        <ul className="nav-container">
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
