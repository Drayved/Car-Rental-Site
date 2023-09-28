import ContactBanner from "./ContactBanner"
import PageHeader from "./PageHeader"
import { vehicles } from "./Vehicles"

const Models = () => {
   
    return(
        <div>
            <div className="mt-20">
                <PageHeader />
            </div>
            <div className="mt-48 xl:mt-64 flex flex-wrap justify-center mx-auto gap-10 lg:gap-16 max-w-[80rem]">
                {vehicles.map((vehicle, index) => (
                    <div className="w-96 border " key={index}>
                        <img className="h-52 mx-auto mt-2" src={vehicle.imageSrc }alt="" />
                        <div className="flex h-52 flex-col px-2 pb-5 mt-5 text-gray-500">
                            <div className="text-2xl text-black font-bold flex justify-between">
                                <div>
                                    {vehicle.name}
                                    <img className="w-20 -mt-7" src="/images/star.png" alt="" /> 
                                </div>
                                
                                <div className="flex flex-col text-3xl">
                                    {vehicle.details.Cost}
                                    <p className="font-normal text-lg text-gray-500">per day</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3">
                                <div className="flex">
                                    <img className="w-5" src="/images/car-icon.png" alt="car-icon" />
                                    <p className="ml-2">{vehicle.details.Year}</p>
                                </div>
                                <div className="flex">
                                    <p className="mr-2">{vehicle.details.Doors} Doors</p>
                                    <img className="w-5" src="/images/car-icon.png" alt="car-icon" />
                                </div>

                            </div>
                            <div className="flex justify-between mt-5">
                                <div className="flex">
                                    <img className="w-5" src="/images/car-icon.png" alt="car-icon" />
                                    <p className="ml-2">{vehicle.details.Transmission}</p>
                                </div>
                                
                                <div className="flex">
                                    <p className="mr-2">{vehicle.details.Fuel} </p> 
                                    <img className="w-5" src="/images/car-icon.png" alt="car-icon" />
                                      
                                </div>
                               
                            </div>
                            
                        </div> 
                        
                        <div className="flex justify-center pb-5 border-t w-[90%] mx-auto pt-5">
                            <button className="py-5 shadow-md shadow-blue-200 bg-blue-500 w-[90%] justify-center text-white text-2xl font-bold flex">Book Ride</button>
                        </div>
                    </div>   
                ))}
                <div>
                    
                </div>
            </div>
            <div>
                <ContactBanner />
            </div>
        </div>
    )
}

export default Models