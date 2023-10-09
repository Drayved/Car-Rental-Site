import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
    const [showSignIn, setShowSignIn] = useState(false)
    const [registerClicked, setRegisterClicked] = useState(false)
    const [signedIn, setSignedIn] = useState(false)
    const [formData, setFormData] = useState({
      name: "",
      password: "",
    });
    

    useEffect(() => {
      const handleResize = () => {
        setShowMenu(window.innerWidth >= 1024);
      };
  
      window.addEventListener("resize", handleResize);
  
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

    const handleAxiosError = (error: AxiosError) => {
      if (error.response) {
        if (error.response.status === 409) {
          alert("Username is taken. Please choose another.");
        } else {
          console.error("Error with response:", error.response.data);
        }
      } else if (error.request) {
        console.error("Error with no response:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    };
    

    const handleRegister = async () => {
      try {
        console.log(formData);
        const response = await axios.post("https://car-rental-site-72kb612n0-drayved.vercel.app/users", formData);
        if (response.status === 201) {
          alert("User registered successfully")
          console.log("User registered successfully");
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          handleAxiosError(error);
        } else {
          console.error("Unknown error:", error);
        }
      }
    };
  
    const handleSignIn = async () => {
      try {
        const response = await axios.post("https://car-rental-site-72kb612n0-drayved.vercel.app/users/login", formData);

        if (response.data === "Login successful") {
          console.log("User signed in successfully");
          setSignedIn(true)
        } else {
          console.error("Sign-in failed. Server response:", response.data);
        }
      } catch (error) {
        console.error("Error signing in", error);
      }
    };

    const handleSignOut = () => {
      setSignedIn(false)
    }

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
                    <div className="menu-btn-burger"></div>
                  </div>
            </div>

            
              <ul onClick={toggleMenu} className={`small-nav-container ${showMenu ? "active" : ""}`}>
                <li className="hover:text-[#00a8f3]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#00a8f3]" >
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-[#00a8f3]">
                  <Link to="/models">Vehicle Models</Link>
                </li>
                <li className="hover:text-[#00a8f3]">
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li className="hover:text-[#00a8f3]">
                  <Link to='/our-team'>Our Team</Link>
                </li>
                <li className="hover:text-[#00a8f3]">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            

           
           
        </div>
      ) : (
        <ul onClick={toggleMenu} className="nav-container -mt-7">
          <li  className="hover:text-[#00a8f3]">
            <Link to="/">Home</Link>
          </li>
          <li  className="hover:text-[#00a8f3]">
            <Link to="/about">About</Link>
          </li>
          <li  className="hover:text-[#00a8f3]">
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li  className="hover:text-[#00a8f3]">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li  className="hover:text-[#00a8f3]">
            <Link to='/our-team'>Our Team</Link>
          </li>
          <li  className="hover:text-[#00a8f3]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      {window.innerWidth < 1024 ? (
        <div>
          <img onClick={toggleSignIn} className="cursor-pointer w-7 absolute right-5  top-6" src="/images/user.png" title="user icons"/>
          {showSignIn && (
            <div className="absolute  md:right-0 top-24 shadow-md bg-white rounded-sm p-5 h-auto w-[100%] md:w-[40rem]">
              <div className="border border-[#00a8f3] py-5 h-full px-10 md:py-10 mx-auto w-[90%] ">
                <p className="absolute top-1 bg-white p-2">{signedIn ? `Signed in` : `Sign In` }</p>
              
                <div className={`flex flex-col gap-3 mb-5 ${signedIn ? "hidden" : ""}`}>
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
                <div className="flex">
                  {signedIn ? 
                  <div className="flex flex-col mx-auto">
                    <p className="text-[#00a8f3] font-bold mb-2">Signed in as {formData.name}</p>
                    <button onClick={handleSignOut} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">Sign Out</button>
                  </div>
                    :
                    <div>
                      <button onClick={handleSignIn} className="mr-10 font-bold mt-4 w-16 hover:text-[#00a8f3]">
                        Sign In
                      </button>
                      <button onClick={handleRegister} className="bg-[#00a8f3] hover:bg-white hover:border hover:border-[#00a8f3] hover:text-[#00a8f3] mt-5 text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">
                        Register
                      </button>
                     
                    </div>
                   
                  }
                    
                  
                </div>
              </div>
            </div>
            
          )} 
      </div>
      ) : (
        <div className="absolute right-10 top-5 md:right-[5%] lg:right-[5%] 2xl:right-[18%]">
          <button onClick={toggleSignIn} className="mr-6 font-bold hover:text-[#00a8f3] ">Sign In</button>
          <button onClick={toggleRegister} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm hover:bg-white hover:border hover:border-[#00a8f3] hover:text-[#00a8f3] ">
            Register
          </button>
          {showSignIn && (
            <div className="absolute right-0 top-24 shadow-sm bg-white rounded-sm p-5  w-[100%] md:w-[40rem]">
              <div className="border border-[#00a8f3] py-5 px-10 md:py-10 mx-auto  ">
                <p className="absolute top-1 bg-white p-2">{registerClicked ? "Sign up" : "Sign In"}</p>
              
                <div className={`flex flex-col gap-3 mb-5 ${signedIn ? "hidden" : "flex"}`}>
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
                 {signedIn ? 
                  <div className="flex flex-col mx-auto items-center">
                    <p className="text-[#00a8f3] font-bold text-center mb-2">Signed in as {formData.name}</p>
                    <button onClick={handleSignOut} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm hover:bg-white hover:border hover:border-[#00a8f3] hover:text-[#00a8f3]">
                      Sign Out
                    </button>
                  </div>
                  :
                  <button onClick={registerClicked ? handleRegister : handleSignIn} className="bg-[#00a8f3] hover:bg-white hover:border hover:border-[#00a8f3] hover:text-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm">
                    {registerClicked ? "Sign Up" : "Sign In"}
                  </button>
                }
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