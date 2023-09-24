

const LandingTestimonials = () => {

    return(
        <div>
            <div className="flex justify-center flex-col items-center">
                <h4 className="font-bold text-2xl">Reviewed by People</h4>
                <h1 className="font-bold text-5xl text-center mt-3">Clients Testimonials</h1>
                <p className="text-left text-lg mt-7 text-gray-500 font-semibold w-[90%] sm:text-center lg:w-[50%]">
                    Discover the positive impact we've made on the our clients by reading through their 
                    testimonials. Our clients have experienced our service and results, and they're eager
                    to share their positive experiences with you
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20 items-center mx-auto justify-center ">
                <div className="review-container ">
                    <h1 className="text-xl text-gray-500">
                        "We rented a car from this website and had an amazing experience! The booking was easy and 
                        the rental rates were very affordable. "
                    </h1>
                    <div className="flex flex-col xsmall:flex-row mt-7 justify-between">
                        <div className="flex">
                        <img className="w-16 h-16 rounded-full mt-0.5" src="/images/luke.jpg" alt="" />
                        <div className="ml-3 mt-1.5">
                            <h1 className="font-bold text-lg">Sky Lukewalker</h1>
                            <p>Kentucky</p>
                        </div>
                        
                        </div>
                        <div>
                            
                            <img className="w-40 h-40 -mt-12 mx-auto xsmall:mx-0 xsmall:-mt-[3.8rem]" src="/images/star.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className=" review-container ">
                    <h1 className="text-xl text-gray-500">
                        "The car was in great condition and made our trip even better. Very affordable for any budget. Highly recommend this car rental website!"
                    </h1>
                    <div className="flex flex-col xsmall:flex-row mt-7 justify-between">
                        <div className="flex">
                        <img className="w-16 h-16 mt-0.5 rounded-full" src="/images/han.jpg" alt="" />
                        <div className="ml-3 mt-1.5">
                            <h1 className="font-bold text-lg">San Holo</h1>
                            <p>Ohio</p>
                        </div>
                        
                        </div>
                        <div>
                            
                            <img className="w-40 h-40 -mt-12 mx-auto xsmall:mx-0 xsmall:-mt-[3.8rem]" src="/images/star.png" alt="" />
                        </div>

                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default LandingTestimonials