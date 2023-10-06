import ContactBanner from "./ContactBanner"
import PageHeader from "./PageHeader"
import PlanTrip from "./PlanTrip"
import { useLocation } from 'react-router-dom'


const About = () => {
    const location = useLocation();
    console.log(location.pathname.slice(1, 100))

    // Get a specific query parameter
    
  
    return(
        <div className="mt-20 about-container">
            
                <PageHeader />
            
            <div className="mt-52 gap-10 flex justify-center w-[95%] md:w-[60%]  mx-auto flex-col items-center xl:flex-row">
                <img className="  w-[100%]  h-[33rem] md:min-w-[33rem] md:w-[33rem]  min-w-[20rem]" src="/images/about-img.jpg" alt="" />
                <div className="flex flex-col    w-[100%]  md:w-[33rem] ">
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
                    <div className="flex flex-col xsmall:flex-row mt-5 gap-28">
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
            <div className="mt-44">
                <PlanTrip />
            </div>

            <div >
                <ContactBanner />
            </div>
            
        </div>
    )
}

export default About