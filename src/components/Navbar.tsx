import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
    const [showSignIn, setShowSignIn] = useState(false)
    const [registerClicked, setRegisterClicked] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setShowMenu(window.innerWidth >= 1024);
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

    const toggleSignIn = () => {
      setRegisterClicked(false)
      setShowSignIn(true)
      if(showSignIn && !registerClicked){
        setShowSignIn(false)
      }
    }

    const toggleRegister = () => {
      setShowSignIn(true)
      setRegisterClicked(true)
      if(registerClicked && showSignIn){
        setRegisterClicked(false)
        setShowSignIn(false)
      }
    }

  return (
    <div>
    <div className="sticky top-0 left-0 right-0 z-20">
      <Link to="/">
        <div className="flex mt-5 ml-3 2xl:ml-[20%] md:ml-[5%]">
          <img className="w-[4rem] mt-1.5 mr-2 " src="/images/blue-car.png" alt="" />
          <div>
            <h1 className="text-2xl font-bold mt-3">CAR</h1>
            <h2 className="font-semibold text-lg mt-[-7px]">Rental</h2>
          </div>
        </div>
      </Link>
      {window.innerWidth < 1024 ? (
        <div>
           <div className="absolute top-6 right-8 mr-10 z-50">
                  <div className={`menu-btn ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                    {/* <div className={`menu-line ${showMenu ? "menu-line-1" : ""}`}></div>
                    <div className={`menu-line ${showMenu ? "menu-line-2" : ""}`}></div>
                    <div className={`menu-line ${showMenu ? "menu-line-3" : ""}`}></div> */}
                    <div className="menu-btn-burger"></div>
                  </div>
            </div>

            <div className="">
              <ul onClick={toggleMenu} className={`small-nav-container ${showMenu ? "active" : ""}`}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/models">Vehicle Models</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to='/our-team'>Our Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

           
           
        </div>
      ) : (
        <ul onClick={toggleMenu} className="nav-container -mt-7">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to='/our-team'>Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      {window.innerWidth < 1024 ? (
        <div>
          <img onClick={toggleSignIn} className="cursor-pointer w-7 absolute right-5  top-6" src="/images/user.png" title="user icons"/>
          {showSignIn && (
            <div className="absolute right-0 md:right-24 top-24 shadow-md bg-white rounded-sm p-5 h-80 w-[100%] md:w-96">
              <div className="border py-5 px-10 md:py-10 mx-auto w-[90%] ">
                <p className="absolute top-1 bg-white p-2">Sign In</p>
              
                <div className="flex flex-col gap-3 mb-5">
                  <label htmlFor="Email Address" className="text-left mb-[-10px]">Email Address:</label>
                  <input className="p-2 shadow-sm shadow-black " type="email" placeholder="Email" />
                  <label htmlFor="" className="text-left mb-[-10px]">Password:</label>
                  <input className="p-2 shadow-sm shadow-black" type="password" placeholder="Password" />
                </div>
                
                <button className="mr-10 font-bold">Sign In</button>
                <button className="bg-blue-500 text-white h-10 w-28 font-bold rounded-sm shadow-blue-500 shadow-md">Register</button>
              </div>
            </div>
            
          )} 
      </div>
      ) : (
        <div className="absolute right-10 top-5 md:right-[5%] lg:right-[5%] 2xl:right-[18%]">
          <button onClick={toggleSignIn} className="mr-6 font-bold">Sign In</button>
          <button onClick={toggleRegister} className="bg-blue-500 text-white h-10 w-28 font-bold rounded-sm shadow-blue-500 shadow-md">Register</button>
          {showSignIn && (
            <div className="absolute right-0 md:right-24 top-24 shadow-md bg-white rounded-sm p-5 h-80 w-[100%] md:w-96">
              <div className="border py-5 px-10 md:py-10 mx-auto w-[90%] ">
                <p className="absolute top-1 bg-white p-2">{registerClicked ? "Sign up" : "Sign In"}</p>
              
                <div className="flex flex-col gap-3 mb-5">
                  <label htmlFor="Email Address" className="text-left mb-[-10px]">Email Address:</label>
                  <input className="p-2 shadow-sm shadow-black " type="email" placeholder="Email" />
                  <label htmlFor="" className="text-left mb-[-10px]">Password:</label>
                  <input className="p-2 shadow-sm shadow-black" type="password" placeholder="Password" />
                </div>
                <button className="bg-blue-500 text-white h-10 w-28 font-bold rounded-sm shadow-blue-500 shadow-md">{registerClicked ? "Sign Up" : "Sign In"}</button>
              </div>
            </div>
            
          )} 
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
