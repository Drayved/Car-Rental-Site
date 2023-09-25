

const Footer = () => {

    return(
        <div className=" relative z-20 footer-container mt-48 pb-16 flex flex-wrap justify-between  pt-12 px-2 shadow-sm bg-white shadow-black mx-auto text-center">
            <div className="w-full md:w-[25%] mr-[-50px] lg:w-[25%] mb-12">
                <h1 className="mb-3 text-2xl"><span className="font-bold">CAR </span>Rental</h1>
                <p className="font-bold mb-2">(123)-456-7899</p>
                <p className="font-bold">car-rental@car-rentals.com</p>
            </div>
            <div className="w-full md:w-[25%] lg:w-[25%]] mb-12">
                <h1 className="text-2xl font-bold mb-4">COMPANY</h1>
                <p className="mb-2">Careers</p>
                <p className="mb-2">About</p>
                <p className="mb-2">Contact</p>
            </div>
            <div className="w-full md:w-[25%] lg:w-[25%] mb-12 ">
                <h1 className="text-2xl font-bold mb-4">WORKING HOURS</h1>
                <p className="mb-2">Mon - Fri: 9:00am - 9:00pm</p>
                <p className="mb-2">Sat: 9:00AM - 7:00pm</p>
                <p className="mb-2">Sun: Closed</p>
            </div>
            <div className="w-[90%] mx-auto md:w-[25%] lg:w-[25%] mb-2 ">
                <h1 className="text-2xl font-bold mb-4">SUBSCRIPTION</h1>
                <p className="mb-2">Subscribe to keep up to date with special offerings</p>
                <form className="flex flex-col items-center" action="">
                    <input placeholder="Enter Email Address" className="mt-3 py-3 px-5 md:w-[15rem] lg:w-[18rem] w-[90%] bg-gray-200" type="text" />
                    <button className="md:w-[15rem] lg:w-[18rem] w-[90%] bg-blue-500 text-white text-lg py-2 mt-2" type="submit">Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default Footer