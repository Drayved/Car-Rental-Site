import ContactBanner from "./ContactBanned"
import PageHeader from "./PageHeader"
import PlanTrip from "./PlanTrip"
import { useLocation } from 'react-router-dom'


const About = () => {
    
    
    const location = useLocation();
    console.log(location.pathname.slice(1, 100))

    // Get a specific query parameter
    
  
    return(
        <div className="mt-52">
            
                <PageHeader />
            
            <div className="mt-72 gap-10 flex justify-center w-[90%] lg:w-[40%] mx-auto flex-col items-center lg:flex-row">
                <img className=" mx-auto w-[27rem] h-[33rem] md:min-w-[33rem]  min-w-[10rem]" src="/images/about-img.jpg" alt="" />
                <div className="flex flex-col items-center mr-20   w-[100%] sm:min-w-[25rem] sm:w-[25rem] ml-16">
                    <h4 className="text-lg font-bold">About Company</h4>
                    <h1 className="text-3xl font-bold">You start the engine and your adventure begins</h1>
                    <p className="text-gray-500 mt-3">
                        At Car Rental, we're not just in the business of providing vehicles; we're in the 
                        business of igniting your adventures. From the moment you start the engine, you 
                        embark on a journey filled with possibilities and freedom. Our commitment to 
                        delivering top-notch service, a diverse fleet of vehicles, and the seamless 
                        experience you deserve defines who we are. Whether it's a road trip, a family 
                        vacation, or a daily commute, we're here to ensure your drive is more than just 
                        transportation – it's the start of an unforgettable adventure.
                    </p>
                    <div className="flex flex-col md:flex-row mt-5 gap-12">
                        <div className="flex-col  ">
                            <img className="w-16 " src="/images/car.png" alt="" />
                            <div className="flex flex-col md:flex-row">
                                <h1  className="font-bold mt-5 text-5xl ">20 </h1>
                                <span className="md:mt-5 md:ml-2 font-normal text-gray-500">Car Types</span>
                            </div>
                            
                        </div>
                        <div className="flex-col  ">
                            <img className="w-16 " src="/images/outlet.png" alt="" />
                            <div className="flex flex-col md:flex-row">
                                <h1  className="text-5xl mt-5 font-bold ">85 </h1>
                                <span className="md:mt-5 md:ml-2 text-[16px] font-normal text-gray-500">Rental Outlets</span>
                            </div>
                            
                        </div>
                        <div className="flex-col  ">
                            <img className="w-16 " src="/images/garage.png" alt="" />
                            <div className="flex flex-col md:flex-row">
                                <h1 className="font-bold mt-5 text-5xl">75 </h1>
                                <span className="md:mt-5 md:ml-2 font-normal text-gray-500">Repair Shops</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-72">
                <PlanTrip />
            </div>

            <div className="mt-96 md:mt-0">
                <ContactBanner />
            </div>
            
        </div>
    )
}

export default About