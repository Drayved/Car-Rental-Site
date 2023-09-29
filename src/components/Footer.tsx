const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="relative z-20 w-screen mt-32 bg-white shadow-sm shadow-black text-center">
          <div className="container mx-auto py-12 flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="mb-3 text-2xl font-bold"><span className="font-bold">CAR </span>Rental</h1>
              <p className="font-bold mb-2">(123)-456-7899</p>
              <p className="font-bold">car-rental@car-rentals.com</p>
            </div>
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="text-2xl font-bold mb-4">COMPANY</h1>
              <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto ">Careers</p>
              <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto ">About</p>
              <p className="mb-2 cursor-pointer max-w-[3.5rem] mx-auto ">Contact</p>
            </div>
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="text-2xl font-bold mb-4">WORKING HOURS</h1>
              <p className="mb-2">Mon - Fri: 9:00am - 9:00pm</p>
              <p className="mb-2">Sat: 9:00AM - 7:00pm</p>
              <p className="mb-2">Sun: Closed</p>
            </div>
            <div className="w-full md:w-1/4 mb-12">
              <h1 className="text-2xl font-bold mb-4">SUBSCRIPTION</h1>
              <p className="mb-2">Subscribe to keep up to date with special offerings</p>
              <form className="flex flex-col items-center" action="">
                <input
                  placeholder="Enter Email Address"
                  className="mt-3 py-3 px-5 w-full md:w-[15rem] lg:w-[18rem] bg-gray-200"
                  type="text"
                />
                <button
                  className="w-full md:w-[15rem] lg:w-[18rem] bg-[#00a8f3] text-white text-lg py-2 mt-2"
                  type="submit"
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
  