import { useState, useEffect } from "react";
import { Vehicle, vehicles } from './Vehicles'

type RegisterFormProps = {
    onClose: () => void; 
    carType: string;
    pickupLocation: string;
    dropOffLocation: string;
    pickupDate: string;
    dropOffDate: string;
    handleButtonClicked: () => void;
    buttonClicked: boolean,
    
  };

  type FormFields = {
    [key: string]: string;
  };

const RegisterForm: React.FC<RegisterFormProps> = ({
   onClose,
   carType,
   pickupLocation,
   dropOffLocation,
   pickupDate,
   dropOffDate,
   handleButtonClicked,
   
  }) => {

  const [agreeTerms, setAgreeTerms] = useState(false);
  const selectedVehicle: Vehicle | undefined = vehicles.find((vehicle: Vehicle) => vehicle.name === carType);
  
  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const [formFields, setFormFields] = useState<FormFields>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    email: "",
    streetAddress: "",
    city: "",
    zipCode: ""
  });

  
  const handleFieldChange = (fieldName: string, value: string) => {
    setFormFields({
      ...formFields,
      [fieldName]: value
    });
  };

  const isPartOfFormValid = () => {
    for (const field in formFields) {
      if (formFields[field] === "") {
        return false;
      }
    }
    return true;
  };

 
  useEffect(() => {
    document.body.classList.add("scroll-lock");
  
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, []);


  

  return (
    <div className="fixed z-50 overflow-y-auto top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-70 bg-black ">
      <div className="bg-white p-0.5 w-[90vw] h-[95vh] overflow-y-auto lg:mx-auto lg:w-[52rem] lg:items-center lg:justify-center">
        <div className="w-full text-white p-2 h-auto flex items-center bg-blue-500 justify-between">
            <h2 className="text-2xl font-bold ">COMPLETE RESERVATION</h2>

            <button
              onClick={onClose}
              className="text-white  py-2 px-4 hover:text-red-600 cursor-pointer text-2xl"
              >
              X
            </button>
           
        </div>

        <div className="bg-blue-100 p-5 ">
            <h3 className="text-xl text-blue-800 font-bold mb-4">Upon completing this reservation enquiry, you will receive:</h3>
            <h4 className="text-bold text-lg text-gray-500">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</h4>
        </div>

        <div className="border-b w-full border-gray-600">
          <div className="ml-5">

         
            <div className="flex gap-52 py-5 px-10 ">
                <h2 className="text-xl text-blue-700 font-bold">Location & Date</h2>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col">
                <div className="p-3 clock-input">
                  <div className="flex -ml-2">
                    <img className="w-6 mr-2" src="/images/location.png" alt="" />
                    <h4 className="font-bold">Pick-up Date & Time</h4>
                  </div>
                  
                  <div className="flex ml-6">
                    <p className="mt-0.5">{pickupDate} <span className="text-xl">/</span></p>
                    <input
                      name="Select your car type"
                      type="time"
                      className="block mt-1 px-1 ml-3 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </div>                                  
                </div>

                <div className="p-3 clock-input">
                  <div className="flex -ml-2">
                    <img className="w-6 mr-2" src="/images/location.png" alt="" />
                    <h4 className="font-bold">Drop-off Date & Time</h4>
                  </div>
                  
                  <div className="flex ml-6">
                    <p className="mt-0.5">{dropOffDate} <span className="text-xl">/</span></p>
                    <input
                      name="Select your car type"
                      type="time"
                      className="block mt-1 px-1 ml-3 border border-gray-300 rounded-md focus:outline-none"
                    />
                  </div>                                  
                </div>

                <div className="p-3 clock-input">
                  <div className="flex -ml-2">
                    <img className="w-6 mr-2" src="/images/location.png" alt="" />
                    <h4 className="font-bold">Pick-up Location</h4>
                  </div>
                  
                  <div className="flex ml-6">
                    <p className="mt-0.5">{pickupLocation}</p> 
                  </div>                                  
                </div>

                <div className="p-3 clock-input">
                  <div className="flex -ml-2">
                    <img className="w-6 mr-2" src="/images/location.png" alt="" />
                    <h4 className="font-bold">Drop-off Location</h4>
                  </div>
                  
                  <div className="flex ml-6">
                    <p className="mt-0.5">{dropOffLocation}</p> 
                  </div>                                  
                </div>
              </div>
                  
              <div className="mr-12">
                <h2 className="text-xl relative top-5 md:-top-[3rem] text-center  font-bold">Car - <span className="text-blue-700">{carType}</span></h2>
                <img className="w-96 mx-auto mt-10 md:mt-0" src={selectedVehicle?.imageSrc} alt="" />
              </div>

            </div>
          </div>
        </div>

        <div className="mt-5 w-[90%] mx-auto">
          
            <h2 className="text-blue-700 font-bold text-xl">Personal Information</h2>
            <form action="">

              <div className="lg:flex-row lg:justify-between flex flex-col mt-8">
                <div className="flex-col flex lg:w-[22rem]">
                  <label htmlFor="">First Name
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required
                    className="bg-gray-100 p-2 "
                    type="text"
                    placeholder="Enter your first name"
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                  />
                </div>

                <div className="flex flex-col lg:w-[22rem] mt-8 lg:mt-0">
                  <label htmlFor="">Last Name
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required 
                    className="bg-gray-100 p-2 " 
                    type="text" 
                    placeholder="Enter your last name" 
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                  />
                </div>
              </div>

             <div className="lg:flex-row lg:justify-between flex flex-col mt-8">
              <div className="flex flex-col lg:w-[22rem]">
                  <label htmlFor="">Phone Number
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required 
                    className="bg-gray-100 p-2 " 
                    type="text"
                    placeholder="Enter your phone number" 
                    onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
                  />
                </div>

                <div className="flex flex-col lg:w-[22rem] mt-8 lg:mt-0">
                  <label htmlFor="">Age
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required
                    className="bg-gray-100 p-2 " 
                    type="text" 
                    placeholder="Enter your age" 
                    onChange={(e) => handleFieldChange('age', e.target.value)}
                  />
                </div>
             </div>
              
              
              <div className="flex flex-col mt-8">
                <label htmlFor="">Email
                  <span className="text-blue-700 font-bold text-xl"> *</span>
                </label>
                <input
                  required
                  className="bg-gray-100 p-2 " 
                  type="text" 
                  placeholder="Enter your email" 
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                />
              </div>

              <div className="flex flex-col mt-8">
                <label htmlFor="">Street Address
                  <span className="text-blue-700 font-bold text-xl"> *</span>
                </label>
                <input 
                  required 
                  className="bg-gray-100 p-2 " 
                  type="text" 
                  placeholder="Enter your street address" 
                  onChange={(e) => handleFieldChange('streetAddress', e.target.value)}
                />
              </div>
              
              <div className="lg:flex-row lg:justify-between flex flex-col mt-8">
                <div className="flex flex-col lg:w-[22rem]">
                  <label htmlFor="">City
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required
                    className="bg-gray-100 p-2 "
                    type="text"
                    placeholder="Enter your city"
                    onChange={(e) => handleFieldChange('city', e.target.value)}
                  />
                </div>

                <div className="flex flex-col lg:w-[22rem] mt-8 lg:mt-0">
                  <label htmlFor="">Zip Code
                    <span className="text-blue-700 font-bold text-xl"> *</span>
                  </label>
                  <input
                    required
                    className="bg-gray-100 p-2 " 
                    type="text" 
                    placeholder="Enter your zip code" 
                    onChange={(e) => handleFieldChange('zipCode', e.target.value)}
                  />
                </div>
              </div>
              

            </form>
        </div>
        <div className="flex flex-col ml-10 mt-5">
          <label htmlFor="agreeTerms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              required
            />
            <span className="ml-2">Please send me latest news and updates</span>
          </label>
        </div>
        <div className="h-20 bg-gray-100 flex justify-center items-center mt-5">
        <a href="#book-form-section">
          <button
            onClick={() => {
              if (isPartOfFormValid()) {
                handleButtonClicked();
              }
            }}
            className={`px-5 py-2 shadow-md shadow-blue-200 text-white text-xl ${
              !isPartOfFormValid() ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
            }`}
            disabled={!isPartOfFormValid()}
            
          >
              Reserve Now
          </button>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default RegisterForm;
