import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { ChangeEvent } from "react";
import { useRef } from "react"

const BookForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false)
  const [formFilledOut, setFormFilledOut] = useState(true);
  const bookFormRef = useRef(null) as React.RefObject<HTMLDivElement>

  const handleSearch = () => {
    if (!carType || !pickupLocation || !dropOffLocation || !pickupDate || !dropOffDate) {
      setFormFilledOut(false);
    } else {
      setFormFilledOut(true);
      setShowRegisterForm(true);
    }
  };

  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  };

  const handleCarTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCarType(e.target.value);
  };

  const handlePickupLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickupLocation(e.target.value);
  };

  const handleDropOffLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropOffLocation(e.target.value);
    console.log(dropOffLocation)
  };

  const handlePickupDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPickupDate(e.target.value);
    console.log(pickupDate)
  };

  const handleDropOffDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDropOffDate(e.target.value);
  };

  const handleButtonClicked = () => {
    setButtonClicked(true);
    setShowRegisterForm(false);
  
    // Get the position of the BookForm component
    if (bookFormRef.current) {
      const bookFormPosition = bookFormRef.current.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      // Calculate the position relative to the entire page's height
      const absolutePosition = scrollTop + bookFormPosition;
  
      // Scroll back to the calculated position
      window.scrollTo({
        top: absolutePosition,
        behavior: "smooth",
      });
    }
  };

    return (
      <>
        <div ref={bookFormRef} className="form px-2 w-[90%] py-8 mx-auto">
          <h1 className="text-2xl font-bold ml-4 mb-5">Book a Car</h1>
          <form className="flex flex-wrap text-gray-500" action="">
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Select Your Car Type
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns"  name="Select your car type" onChange={handleCarTypeChange} id="">
                <option value="">Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Pick-up Location
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns" name="Select your car type" onChange={handlePickupLocationChange} id="">
                <option value="">Select drop off location</option>
                <option value="Blue Ash">Blue Ash</option>
                <option value="Cincinnati">Cincinnati</option>
                <option value="Covington">Covington</option>
                <option value="Columbus">Columbus</option>
                <option value="Dayton">Dayton</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Drop-off Location
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns" name="Select your car type" onChange={handleDropOffLocationChange} id="">
                <option value="">Select drop off location</option>
                <option value="Blue Ash">Blue Ash</option>
                <option value="Cincinnati">Cincinnati</option>
                <option value="Covington">Covington</option>
                <option value="Columbus">Columbus</option>
                <option value="Dayton">Dayton</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Pick-up Date
                <span className="asterisk">*</span>
              </label>
              <input 
                className="book-dropdowns" 
                defaultValue={pickupDate}  
                name="Select your car type" 
                onChange={handlePickupDateChange} 
                type="date"
                >

              </input>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Drop-off Date
                <span className="asterisk">*</span>
              </label>
              <input
                className="book-dropdowns"
                defaultValue={dropOffDate}
                name="Select your car type"
                onChange={handleDropOffDateChange}
                type="date"
                >
              </input>
            </div>
            <div className="select-container">
              <button 
                type="button" 
                className="mt-8 h-11 text-center py-[0.7rem] text-white font-bold w-[100%] rounded-sm shadow-md shadow-blue-200  bg-[#00a8f3]" 
                onClick={handleSearch}
                >
                Search
              </button>
            </div>
          </form>
        </div>

        {formFilledOut ? (
          showRegisterForm && (
            <div>
              <RegisterForm
                onClose={closeRegisterForm}
                carType={carType}
                pickupLocation={pickupLocation}
                dropOffLocation={dropOffLocation}
                pickupDate={pickupDate}
                dropOffDate={dropOffDate}
                handleButtonClicked={handleButtonClicked}
                buttonClicked={buttonClicked}
              />
            </div>
          )
        ) : (
          <div className="text-red-500 bg-red-100 text-center w-[90%] md:w-72 mx-auto mt-2">
            All forms must be filled out.
          </div>
        )}
        {buttonClicked && (
        <div className="text-green-500 bg-green-100 text-center w-[90%] md:w-96 mx-auto mt-2">
          Check your email for your reservation confirmation.
        </div>
      )}
      </>
    );
  };
  
  export default BookForm;
  