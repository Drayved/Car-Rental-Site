import { useState } from "react"

interface Vehicle {
    name: string;
    imageSrc: string;
    details: {
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
        <div>
            <div className="text-center">
                <h1 className="text-2xl mb-4">Vehicle Models</h1>
                <h1 className="font-bold text-4xl mb-4">Our rental fleet</h1>
                <p className="max-w-2 w-[90%] md:w-96 mx-auto ">Choose from a variety of our amazing vehicles 
                    to rent for your next adventure or business trip
                </p>
            </div>
            
            <div className="flex flex-col justify-around text-left">
                <div className="mx-auto p-4 w-[100%] ">
                    
                    <ul>
                    {vehicles.map((vehicle, index) => (
                        <li key={index}>
                        <button className="w-[100%] pl-7 text-lg text-left bg-gray-200 h-[3.3rem] font-bold mb-1" onClick={() => handleVehicleSelect(vehicle)}>
                            {vehicle.name}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center md:flex-row justify-center gap-20">

                    
                    <img className=" car-imgs w-[100%] md:w-[80%] lg:w-[50%] max-w-[40rem]" src={selectedVehicle.imageSrc} alt={selectedVehicle.name} />
                    <div className=" flex flex-row justify-between ">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                    <th>Detail</th>
                                    <th>Value</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {Object.entries(selectedVehicle.details).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                            <button className="bg-blue-600 text-white h-10 w-28 font-bold rounded-sm shadow-blue-600 shadow-md">
                                Reserve Now
                            </button>
                        </div>
                    </div>
                </div>
                    
            </div>
            
        </div>
    )
}

export default ChooseCar