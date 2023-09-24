import { useState } from "react"

interface Vehicle {
    name: string;
    imageSrc: string;
    details: {
      Cost: string;
      Make: string;
      Model: string;
      Year: number;
      Doors: number;
      Transmission: string;
      Fuel: string;     
    };
  }

const vehicles = [
    {
      name: "Toyota Camry",
      imageSrc: "/images/camry.jpg",
      details: {
        Cost: "$35",
        Make: "Toyota",
        Model: "Camry",
        Year: 2006,
        Doors: 4,
        Transmission: "Automatic",
        Fuel: "Hybrid"
      },
    },
    {
        name: "VW Golf 6",
        imageSrc: "/images/vw-golf.jpg",
        details: {
          Cost: "$40",
          Make: "Golf 6",
          Model: "Volkswagen",
          Year: 2008,
          Doors: 4,
          Transmission: "Manual",
          Fuel: "Gasoline"
        },
      },
      {
        name: "Audi A1 S-Line",
        imageSrc: "/images/audi.jpg",
        details: {
          Cost: "$50",
          Make: "Audi",
          Model: "A1",
          Year: 2012,
          Doors: 4,
          Transmission: "Manual",
          Fuel: "Gasoline"
        },
      },
      {
        name: "BMW 320 MorderLine",
        imageSrc: "/images/bmw.jpg",
        details: {
          Cost: "$65",
          Make: "BMW",
          Model: "320",
          Year: 2012,
          Doors: 4,
          Transmission: "Manual",
          Fuel: "Gasoline"
        },
      },
      {
        name: "Mercedes-Benz GLK",
        imageSrc: "/images/benz.jpg",
        details: {
          Cost: "$70",
          Make: "Mercedes-Benz",
          Model: "GLK",
          Year: 2006,
          Doors: 4,
          Transmission: "Manual",
          Fuel: "Gasoline"
        },
      },
      {
        name: "VW Passat CC",
        imageSrc: "/images/passat.jpg",
        details: {
          Cost: "$45",
          Make: "Volkswagen",
          Model: "Passat CC",
          Year: 2008,
          Doors: 4,
          Transmission: "Automatic",
          Fuel: "Gasoline"
        },
      },
    // Add more vehicle objects here...
  ];

const ChooseCar = () => {

    const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

    const handleVehicleSelect = (vehicle: Vehicle) => {
      setSelectedVehicle(vehicle);
    };

    return(
        <div className="w-screen mt-28">
            <div className="text-center">
                <h1 className="text-3xl mb-4 text-gray-700 font-semibold">Vehicle Models</h1>
                <h1 className="font-bold text-5xl mb-4">Our rental fleet</h1>
                <p className="max-w-2 text-lg text-gray-500 w-[90%] md:w-[35rem] mx-auto ">Choose from a variety of our amazing vehicles 
                    to rent for your next adventure or business trip
                </p>
            </div>

            <div className="mt-20 flex justify-center xl:max-w-[120rem] mx-auto flex-wrap">
              <div className="w-[90%] flex flex-col text-left xl:flex-row ">  
                <ul className="">
                  {vehicles.map((vehicle, index) => (
                      <li className="my-1" key={index}>
                      <button className="vehicle-btns w-[100%] pl-7 xl:w-72 text-xl text-left bg-gray-100 shadow-sm shadow-gray-300 h-[4rem] font-bold mb-1" onClick={() => handleVehicleSelect(vehicle)}>
                          {vehicle.name}
                      </button>
                      </li>
                  ))}
                </ul>
                <div>
                  
                </div>
                <div className="w-full flex flex-col md:flex-row">

                <div className="w-full sm:mt-0 h-full mb-6  flex md:items-start xl:mr:0 xl:mb-0">
                  <img className="xl:flex car-imgs mx-auto my-auto mt-12 md:mt-32 w-[100%] max-w-[40rem] " src={selectedVehicle.imageSrc} alt={selectedVehicle.name} />  
                </div>
                
                                
                  <div className="flex flex-col items-center justify-center ">
                              
                    
                      <div className=" xl:relative w-full xl:right-36 mt-1">      

                        <table className="relative xl:ml-[65%] w-full mt-12 xl:mt-[-4px]">
                          <div className="text-left w-full">
                            <div className="flex w-[100%]  ">
                              <p className="bg-blue-500 pl-10 text-white py-2  pr-2 text-3xl font-bold ">
                                {selectedVehicle.details.Cost}
                              </p>
                              <p className="bg-blue-500 text-white pt-1.5   w-full text-2xl  font-normal"><span className="text-3xl font-light relative top-0.5">/ </span>rent per day</p>
                            </div>
                            
                            <tbody className="">
                              {Object.entries(selectedVehicle.details).map(([key, value]) => (
                              <tr key={key} className="border-l-2 border-r-2 border-b-2 border-black text-center text-lg xl:text-md w-full">
                                  <td className="px-3 py-3 w-[50%] xl:w-44 ">{key}</td>
                                  <td className=" w-screen md:w-52">
                                    <div className="border-l-2 border-black text-center  ">{value}</div>
                                  </td>
                              </tr>
                              ))} 
                            </tbody>

                            <button className="bg-blue-500 mt-3 w-full text-white h-12 text-2xl shadow-md shadow-black font-bold rounded-sm ">
                                Reserve Now
                            </button>
                          </div>  
                        </table>    
                        
                      </div>
                    </div>    
                </div>         
              </div>
          </div>
        </div>
    )
}

export default ChooseCar