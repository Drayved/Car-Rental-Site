import BookForm from "./BookForm"
import ChooseCar from "./ChooseCar"
import ChooseUs from "./ChooseUs"

const Landing = () => {

    return(
        <>

        {/* Hero section */}

            <div className="top-section-container w-[95%] mx-auto md:text-left md:ml-[10%] 2xl:ml-[25%]">
                <img className="absolute right-0 top-0 z-10 pointer-events-none hidden md:flex h-[65%]  min-w-[30rem] opacity-50" src="/images/hero-bg.png" alt="" />
                <div className="flex just">
                    <div className="flex flex-col md:min-w-[25rem] relative z-10">
                        <h3 className="text-2xl font-bold mb-3 z-20 relative">Plan your trip now</h3>
                        <h1 className="text-6xl font-bold z-20 relative w-[95%] mx-auto md:mx-0">Save <span className="text-blue-600">big</span> with our car rental</h1>
                        <div className="mt-8 text-gray-500 px-10 md:px-0 z-10 relative">
                            <p className="text-sm leading-6">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                            
                        </div>
                    </div>
                    <div className="relative hidden md:flex z-10 w-screen bg-blue-500 h-0">
                        <img className="absolute z-10 mx-auto w-[100%]   max-w-[45rem] " src="/images/main-car.png" alt="" />
                    </div>
                    
                </div>   
                <div className="top-button-container flex items-center justify-center md:justify-start md:flex-row md:gap-10 md:mb-0">
                    <button className="book-ride-btn z-10 md:w-40">
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

            {/* Book form section */}

            <div className="flex flex-col justify-center mt-40">
                <BookForm />
            </div>

            {/* Plan your trip section */}
            
            <div>
                <div className="text-center mt-44">
                    <h3 className="text-2xl mb-4">Plan your trip now</h3>
                    <h1 className="text-4xl">Quick & easy car rental</h1>
                </div>

                <div className="flex flex-col items-center md:flex-row justify-center mt-20 w">
                    <div className="flex flex-col justify-center items-center mb-20 md:w-[33%]">
                        <div className="first-img flex justify-center items-center flex-col">
                            <img className="mb-2 mr-2 " src="/images/select-car.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="mt-5 text-2xl font-bold mb-3">Select Car</h1>
                            <p className="text-gray-500 w-[70%] text-lg lg:w-[50%] mx-auto" >We offer a wide range of vehicles, so whatever your driving needs, you can find the perfect one for you</p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col justify-center items-center mb-20 md:w-[33%]">
                        <div className="second-img flex justify-center items-center">
                            <img className="mb-3" src="/images/agent.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="mt-5 text-2xl font-bold mb-3">Contact Operator</h1>
                            <p className="text-gray-500 w-[70%] text-lg lg:w-[50%] mx-auto">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center mb-20 md:w-[33%]">
                        <div className="third-img flex justify-center items-center">
                            <img className="mb-2" src="/images/drive-car.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="mt-5 text-2xl font-bold mb-3">Let's Drive</h1>
                            <p className="text-gray-500 w-[70%] lg:w-[50%] text-lg  mx-auto">Whether you're hitting the open road, or exploring nature we've got you covered with our wide range of cars</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Choose car section */}

            <div>
                <ChooseCar />
            </div>

            {/* Save banner section */}

            <div className="mt-48 bg-[#2d2d2d] text-white w-screen h-52 text-center flex flex-col justify-center">
                <h1 className="text-5xl">Save Big With Our Cheap Car Rental!</h1>
                <p className="text-2xl mt-5">Top Airports. Local Supplies. 
                    <span className="text-blue-600"> 24/7</span> Support
                </p>
            </div>

            {/* Choose us section */}

            <div className="mt-40">
                <ChooseUs />
            </div>
        </>
    )
   
}

export default Landing