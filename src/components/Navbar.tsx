import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
    const [showSignIn, setShowSignIn] = useState(false)
    const [registerClicked, setRegisterClicked] = useState(false)
    const [formData, setFormData] = useState({
      name: "",
      password: "",
    });

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

    const handleRegister = async () => {
      try {
        console.log(formData)
        await axios.post("http://localhost:3000/users", formData);
        
        console.log("User registered successfully");
      } catch (error) {
        console.error("Error registering user", error);
      }
    };
  
    const handleSignIn = async () => {
      try {
        const response = await axios.post("http://localhost:3000/users/login", formData);

        if (response.data === "Success") {
          console.log("User signed in successfully");
        } else {
          console.error("Sign-in failed. Server response:", response.data);
        }
      } catch (error) {
        console.error("Error signing in", error);
      }
    };


  return (
    <div>
    <div className="sticky top-0 left-0 right-0 z-20" >
      
        <div className="flex mt-5 ml-7 2xl:ml-[20%] md:ml-[5%]">
          
          <Link to="/">
            <div className="flex">
              <img className="w-[4rem] h-[3.4rem] mt-1.5 mr-3" src="/images/blue-car.png" alt="" />
              <div>
                <h1 className="text-2xl font-bold mt-3">CAR</h1>
                <h2 className="rental-logo text-lg mt-[-7px]">Rental</h2>
              </div>
            </div>
          </Link>
          
        </div>
      
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
            <div className="absolute  md:right-0 top-24 shadow-md bg-white rounded-sm p-5 h-80 w-[100%] md:w-[40rem]">
              <div className="border py-5 px-10 md:py-10 mx-auto w-[90%] ">
                <p className="absolute top-1 bg-white p-2">Sign In</p>
              
                <div className="flex flex-col gap-3 mb-5">
                  <label className="text-left mb-[-10px]">Username</label>
                  <input
                    className="p-2 shadow-sm shadow-black "
                    type="text" 
                    placeholder="Username" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label className="text-left mb-[-10px]">Password:</label>
                  <input
                    className="p-2 shadow-sm shadow-black"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                
                <button onClick={handleSignIn} className="mr-10 font-bold">Sign In</button>
                <button onClick={handleRegister} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">Register</button>
              </div>
            </div>
            
          )} 
      </div>
      ) : (
        <div className="absolute right-10 top-5 md:right-[5%] lg:right-[5%] 2xl:right-[18%]">
          <button onClick={toggleSignIn} className="mr-6 font-bold">Sign In</button>
          <button onClick={toggleRegister} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">Register</button>
          {showSignIn && (
            <div className="absolute right-0 top-24 shadow-sm bg-white rounded-sm p-5  w-[100%] md:w-[40rem]">
              <div className="border border-[#00a8f3] py-5 px-10 md:py-10 mx-auto  ">
                <p className="absolute top-1 bg-white p-2">{registerClicked ? "Sign up" : "Sign In"}</p>
              
                <div className="flex flex-col gap-3 mb-5">
                  <label className="text-left mb-[-10px]">Username:</label>
                  <input
                    className="p-2 shadow-sm shadow-gray-400"
                    type="text"
                    placeholder="Username"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label className="text-left mb-[-10px]">Password:</label>
                  <input
                    className="p-2 shadow-sm shadow-gray-400"
                    type="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
                <button onClick={registerClicked ? handleRegister : handleSignIn} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">{registerClicked ? "Sign Up" : "Sign In"}</button>
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