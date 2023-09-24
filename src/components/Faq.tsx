import { useState, } from "react";

const Faq = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);




  const handleSelect = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center small:text-center w-[90%] mx-auto">
        <h3 className="text-2xl font-bold mb-3">FAQ</h3>
        <h1 className="text-5xl font-bold mb-5 leading-[3.5rem]">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-lg max-w-[50rem] text-left small:text-center mx-auto">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="w-[90%] faq-shadow mx-auto mt-12  max-w-[50rem]">
        <div
          onClick={() => handleSelect("option1")}
          className={`faq-item  ${
            selectedOption === "option1" ? "open h-[25.5rem] xxs:h-[24rem] xs:h-[22rem] xsmall:h-[20rem] small:h-[18.5rem] medium:h-[15.5rem] sm:h-[15.3rem] md:h-[14rem] " : ""
          }`}
        >
          <label className={`${selectedOption === "option1" ? "text-white bg-blue-500 shadow-blue-300 shadow-md " : ""}`}>
            1. What is special about comparing rental car deals?
            </label>
            {selectedOption === "option1" && (
            
              <p className=" flex items-center justify-center ml-5 mt-3 xs:mt-5 small:mt-5 sm:mt-7 lg:mt-8 z-50 text-base text-gray-500 font-normal w-[90%] pb-5">
                Comparing rental car deals is important as it helps find the best deal that
                fits your budget and requirements, ensuring you get the most value for your
                money. By comparing various options, you can find deals that offer lower
                prices, additional services, or better car models. You can find car rental
                deals by researching online and comparing prices from different rental
                companies.
              </p>
            
            )}
          
        
          
        </div>
        <div
          onClick={() => handleSelect("option2")}
          className={`faq-item ${
            selectedOption === "option2" ? "open  h-[25.5rem] xxs:h-[24rem] xs:h-[22rem] xsmall:h-[20rem] small:h-[18.5rem] medium:h-[15.5rem] sm:h-[15.3rem] md:h-[14rem]" : ""
          }`}
        >
            <label className={`${selectedOption === "option2" ? "text-white bg-blue-500 shadow-md shadow-blue-200" : ""}`}>
                2. How do I find the car rental deals?
            </label>
          {selectedOption === "option2" && (
            <div className="dropdown">
            <p className=" flex items-center justify-center ml-5 mt-3 xs:mt-5 small:mt-5 sm:mt-7 lg:mt-8 z-50 text-base text-gray-500 font-normal w-[90%] pb-5">
                You can find car rental deals by researching online and comparing prices from different rental companies. 
                Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available
                rental options. It is also recommended to sign up for email newsletters and follow rental car 
                companies on social media to be informed of any special deals or promotions.
            </p>
            </div>
          )}
        </div>
        <div
          onClick={() => handleSelect("option3")}
          className={`faq-item ${
            selectedOption === "option3" ? "open h-[28.5rem] xxs:h-[25rem] xs:h-[25rem] xsmall:h-[22rem] small:h-[19rem] medium:h-[17rem] sm:h-[16rem] " : ""
          }`}
        >
        <label className={`${selectedOption === "option3" ? "text-white   bg-blue-500 shadow-md shadow-blue-200" : ""}`}>
            3. How do I find the lowest rental car prices?
        </label>
          {selectedOption === "option3" && (
            <div className="dropdown ">
            <p className="flex items-center justify-center ml-5 mt-3 xs:mt-5 small:mt-5 sm:mt-7 lg:mt-8 z-50 text-base text-gray-500 font-normal w-[90%] pb-5">
                Book in advance: Booking your rental car ahead of time can often result in lower prices.
                Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity
                to compare prices from multiple rental car companies. Look for discount codes and 
                coupons: Search for discount codes and coupons that you can use to lower the rental 
                price. Renting from an off-airport location can sometimes result in lower prices.
            </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
