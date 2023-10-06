import { Link } from 'react-router-dom'
import { useState } from 'react';


const Footer = () => {
  const [email, setEmail] = useState('');
  

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address')
      return;
    }

    alert('Successfully Subscribed!');
  };
  

    return (
      <footer className="flex ">
        <div className="relative z-20 w-screen mt-32 bg-white shadow-sm shadow-black text-center">
          <div className="container mx-auto py-12 flex flex-wrap justify-between">
            <div className="-mr-16 md:pr-12 w-full md:w-1/4 mb-12 ">
              <h1 className="mb-3 text-2xl font-bold"><span className="font-bold">CAR </span>Rental</h1>
              
              <a href="tel:+1234567899">
                <p className="font-bold mb-2 hover:text-[#00a8f3]">(123)-456-7899</p>
              </a>

              <a href="mailto:car-rental@car-rentals.com">
                <p className="font-bold hover:text-[#00a8f3]">car-rental@car-rentals.com</p>
              </a>

            </div>
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="text-2xl font-bold mb-4">COMPANY</h1>
              <Link to="/careers">
                <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto hover:text-[#00a8f3]">Careers</p>
              </Link>
              <Link to="/about">
                <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto hover:text-[#00a8f3]">About</p>
              </Link>
              <Link to="/contact">
                <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto hover:text-[#00a8f3]">Contact</p>
              </Link>
            </div>
            <div className="w-full md:w-1/4 mb-12 flex flex-wrap flex-col">
              <h1 className="text-2xl font-bold mb-4">WORKING HOURS</h1>
              <p className="mb-2 ">Mon - Fri: 9:00am - 9:00pm</p>
              <p className="mb-2">Sat: 9:00AM - 7:00pm</p>
              <p className="mb-2">Sun: Closed</p>
            </div>
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="text-2xl font-bold mb-4">SUBSCRIPTION</h1>
              <p className="mb-2">Subscribe to keep up to date with special offerings</p>
              <form className="flex flex-col items-center" action="">
                <input
                  placeholder="Enter Email Address"
                  className="mt-3 py-3 px-5 w-full md:w-[12rem] lg:w-[18rem] bg-gray-200"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  className="w-full md:w-[12rem] lg:w-[18rem] bg-[#00a8f3] text-white text-lg py-2 mt-2 font-bold hover:bg-white hover:text-[#00a8f3] hover:border hover:border-[#00a8f3]"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  