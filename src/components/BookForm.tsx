

const BookForm = () => {

    return (
      <>
        <div className=" bg-form  px-2 w-[90%] py-8 mx-auto mt-96">
          <h1 className="text-2xl font-bold mb-5">Book a Car</h1>
          <form className="flex flex-wrap text-gray-500" action="">
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Select Your Car Type
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns"  name="Select your car type" id="">
                <option value="">Select your car type</option>
                <option value="">Audi A1 S-Line</option>
                <option value="">VW Golf 6</option>
                <option value="">Toyota Camry</option>
                <option value="">BMW 320 ModernLine</option>
                <option value="">Mercedes-Benz GLK</option>
                <option value="">VW Passat CC</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Pick-up Location
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns" name="Select your car type" id="">
                <option value="">Select pick up location</option>
                <option value="">Blue Ash</option>
                <option value="">Cincinnati</option>
                <option value="">Covington</option>
                <option value="">Columbus</option>
                <option value="">Dayton</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Drop-off Location
                <span className="asterisk">*</span>
              </label>
              <select className="book-dropdowns" name="Select your car type" id="">
                <option value="">Select drop off location</option>
                <option value="">Blue Ash</option>
                <option value="">Cincinnati</option>
                <option value="">Covington</option>
                <option value="">Columbus</option>
                <option value="">Dayton</option>
              </select>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Pick-up Date
                <span className="asterisk">*</span>
              </label>
              <input className="book-dropdowns" name="Select your car type" type="date"></input>
            </div>
            <div className="select-container">
              <label className="book-dropdown-text" htmlFor="">
                Drop-off Date
                <span className="asterisk">*</span>
              </label>
              <input className="book-dropdowns" name="Select your car type" type="date"></input>
            </div>
            <div className="select-container">
              <button className="form-btn">Search</button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default BookForm;
  