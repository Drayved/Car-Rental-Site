import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser, signInUser, signUserOut } from '../../auth'
import { FirebaseError } from "firebase/app";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 1024);
    const [showSignIn, setShowSignIn] = useState(false)
    const [registerClicked, setRegisterClicked] = useState(false)
    const [signedIn, setSignedIn] = useState(false)
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    
    const clearMessages = () => {
      setSuccessMessage('')
      setErrorMessage('')
    }

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
      setShowSignIn(!showSignIn)
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
      const { email, password } = formData;
      try {
        await registerUser(email, password);

        setSuccessMessage('User successfully registered');
        setErrorMessage('')

        await signInUser(email, password);
        setSignedIn(true);

        
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/email-already-in-use') {
            // Handle the 'email already in use' error
            setErrorMessage('An account with that email has already been registered');
            setSuccessMessage('');
          } else {
            // Handle other Firebase authentication errors
            console.error('Firebase Authentication error:', error);
          }
        } else {
          // Handle other unknown errors
          console.error('Unknown error:', error);
        }
      }
    };
    
  
    const handleSignIn = async () => {
      const { email, password } = formData;
      try {
        await signInUser(email, password);
        setSignedIn(true);
        clearMessages();
      } catch (error) {
        if (error instanceof Error && error.name === 'MyCustomError') {
          console.error(error.message);
        } else {
          console.error('Unknown error:', error);
        }
      }
    };
  
    const handleSignOut = () => {
      signUserOut();
      setSignedIn(false);
      clearMessages()
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

                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

                <div className={`flex flex-col gap-3 mb-5 ${signedIn ? "hidden" : ""}`}>
                  <label className="text-left mb-[-10px]">Email</label>
                  <input
                    className="p-2 shadow-sm shadow-black "
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    <p className="text-[#00a8f3] font-bold mb-2">Signed in as {formData.email}</p>
                    {registerClicked && <p>User registered successfully</p>}
                    <button onClick={handleSignOut} className="bg-[#00a8f3] text-white h-10 w-28 font-bold rounded-sm shadow-[#00a8f3] shadow-sm mx-auto">Sign Out</button>
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
                  <label className="text-left mb-[-10px]">Email:</label>
                  <input
                    className="p-2 shadow-sm shadow-gray-400"
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    <p className="text-[#00a8f3] font-bold text-center mb-2">Signed in as {formData.email}</p>
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