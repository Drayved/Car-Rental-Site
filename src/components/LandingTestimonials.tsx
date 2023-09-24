

const LandingTestimonials = () => {

    return(
        <div>
            <div className="flex justify-center flex-col items-center">
                <h4 className="font-bold text-2xl">Reviewed by People</h4>
                <h1 className="font-bold text-5xl text-center mt-3">Clients Testimonials</h1>
                <p className="text-left text-lg mt-4 text-gray-500 w-[90%] sm:text-center lg:w-[50%]">
                    Discover the positive impact we've made on the our clients by reading through their 
                    testimonials. Our clients have experienced our service and results, and they're eager
                    to share their positive experiences with you
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20 items-center mx-auto justify-center ">
                <div className="mt-20 w-[90%] sm:w-[30rem] h-auto shadow-md  p-6">
                    <h1 className="text-xl text-gray-500">
                        "We rented a car from this website and had an amazing experience! The booking was easy and 
                        the rental rates were very affordable. "
                    </h1>
                    <div className="flex mt-7 justify-between">
                        <h1>Sky Lukewalker</h1>
                        <h2>5 Stars</h2>
                    </div>
                </div>
                <div className="mt-20 w-[90%] sm:w-[30rem] h-auto shadow-md  p-6">
                    <h1 className="text-xl text-gray-500">
                        "The car was in great condition and made our trip even better. Very affordable for any budget. Highly recommend this car rental website!"
                    </h1>
                    <div className="flex mt-5 justify-between">
                        <h1>San Holo</h1>
                        <h2>5 Stars</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingTestimonials