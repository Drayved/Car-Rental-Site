
export interface Vehicle {
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

export  const vehicles: Vehicle[] = [
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
];

