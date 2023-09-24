import { useState, useEffect } from "react";

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
    <div className="z-20 absolute right-0 left-0 mx-auto  top-0 flex ">
      <div className="absolute mt-5 ml-5 2xl:ml-[20%] md:ml-[5%] flex">
        <img className="w-[4.3rem] mt-1 mr-2 " src="/images/blue-car.png" alt="" />
        <div>
          <h1 className="text-2xl font-bold mt-3">CAR</h1>
          <h2 className="font-semibold text-lg mt-[-7px]">Rental</h2>
        </div>
      </div>
      {window.innerWidth < 1024 ? (
        <div>
          {showMenu ? (
            <div className="">
              
              <button className="fixed right-5 top-5 text-2xl z-50" onClick={toggleMenu}>X</button>
              <ul className="small-nav-container ">
                <li>Home</li>
                <li>About</li>
                <li>Vehicle Models</li>
                <li>Testimonials</li>
                <li>Our Team</li>
                <li>Contact</li>
              </ul>
            </div>
          ) : (
            <div className="absolute top-10 right-8 mr-10 ">
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
      {window.innerWidth < 1024 ? (
        <div>
          <img onClick={toggleSignIn} className="cursor-pointer w-7 absolute right-5  top-10" src="/images/user.png" title="user icons"/>
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
        <div className="absolute right-10 top-10 md:right-[5%] lg:right-[5%] 2xl:right-[20%]">
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
  );
};

export default Navbar;
