

const Hero = () => {

    return(
        
        <div className="top-section-container  mx-auto text-left ">
            <img className="absolute right-0 top-0 z-10 pointer-events-none hidden md:flex h-[65%]  min-w-[30rem] opacity-50" src="/images/hero-bg.png" alt="" />
            <div className="flex ml-2">
                <div className="flex flex-col md:min-w-[25rem] relative z-10  md:mt-28">
                    <h3 className="text-2xl font-bold mb-3 z-20 relative">Plan your trip now</h3>
                    <h1 className="text-6xl font-bold z-20 relative w-[18rem] xs:w-[100%] mx-auto md:mx-0">Save <span className="text-[#00a8f3]">big</span> with our car rental</h1>
                    <div className="mt-8 text-gray-500 px-4  md:px-0 z-10 relative">
                        <p className=" text-gray-500 mx-auto text-left mb-4">
                            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                        </p>
                        
                    </div>
                </div>
                <div className="relative blue-car-container hidden md:flex z-10 w-screen bg-[#00a8f3] h-0  ">
                    <img className="blue-car absolute z-10 mx-auto w-[100%] mt-40 xl:mt-16 min-w-[22rem]  xl:max-w-[53rem] " src="/images/main-car-2.png" alt="" />
                </div>
                
            </div>   
            <div className="top-button-container flex items-center justify-center md:justify-start md:flex-row md:gap-10 md:mb-0">
                <button className="book-ride-btn z-10 md:w-40 ">
                    <div className="flex items-center justify-center">
                        Book Ride
                        <svg className="checkmark " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                    </div>
                </button>
                <button className="learn-more-btn z-10 md:w-40">
                    <div className="flex items-center justify-center">
                        Learn More 
                        <svg className="learn-btn-arrow " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Hero