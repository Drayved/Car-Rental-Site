import { useState, useEffect, useRef } from "react";

const Faq = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(selectedOption === "option1" ? contentRef.current.clientHeight : 0);
    }
  }, [selectedOption]);

  const handleSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center w-[90%] mx-auto">
        <h3 className="text-2xl font-bold mb-3">FAQ</h3>
        <h1 className="text-5xl font-bold mb-5 leading-[3.5rem]">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-lg max-w-[50rem] mx-auto">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-12 shadow-md shadow-black max-w-[50rem]">
        <div
          onClick={() => handleSelect("option1")}
          className={`faq-item h-20 ${
            selectedOption === "option1" ? "open h-[21.5rem] xl:h-[15rem] xxs:h-[19.8rem] xs:h-[17rem] sm:h-[14rem]" : ""
          }`}
        >
          <label className={`${selectedOption === "option1" ? "text-white bg-blue-500 h-[4.75rem] shadow-xl " : ""}`}>
            What is special about comparing rental car deals?
            {selectedOption === "option1" && (
            
              <p className="xxs:mt-10 small:mt-16 sm:mt-16 lg:mt-16 z-50 text-base text-gray-500 font-normal w-[90%] pb-5  k">
                Comparing rental car deals is important as it helps find the best deal that
                fits your budget and requirements, ensuring you get the most value for your
                money. By comparing various options, you can find deals that offer lower
                prices, additional services, or better car models. You can find car rental
                deals by researching online and comparing prices from different rental
                companies.
              </p>
            
            )}
          </label>
        
          
        </div>
        <div
          onClick={() => handleSelect("option2")}
          className={`faq-item ${
            selectedOption === "option2" ? "open bg-blue-600" : ""
          }`}
        >
            <label className={`${selectedOption === "option2" ? "text-white" : ""}`}>
                 How do I find the car rental deals?
            </label>
          {selectedOption === "option2" && (
            <div className="dropdown">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          )}
        </div>
        <div
          onClick={() => handleSelect("option3")}
          className={`faq-item ${
            selectedOption === "option3" ? "open bg-blue-600" : ""
          }`}
        >
        <label className={`${selectedOption === "option3" ? "text-white" : ""}`}>
            How do I find the lowest rental car prices?
        </label>
          {selectedOption === "option3" && (
            <div className="dropdown">
              <p>This is the information about finding the lowest rental car prices.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
