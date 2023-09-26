

const PlanTrip = () => {

    return(
        <div>
            <div className="text-center ">
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
                        <p className="text-gray-500 w-[80%] text-left text-lg lg:w-[50%] mx-auto" >
                            We offer a wide range of vehicles, so whatever your driving needs, you can find the perfect one for you
                        </p>
                    </div>
                    
                </div>

                <div className="flex flex-col justify-center items-center mb-20 md:w-[33%]">
                    <div className="second-img flex justify-center items-center">
                        <img className="mb-3" src="/images/agent.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="mt-5 text-2xl font-bold mb-3">Contact Operator</h1>
                        <p className="text-gray-500 w-[80%] text-lg text-left lg:w-[50%] mx-auto">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mb-20 md:w-[33%]">
                    <div className="third-img flex justify-center items-center">
                        <img className="mb-2" src="/images/drive-car.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="mt-5 text-2xl font-bold mb-3">Let's Drive</h1>
                        <p className="text-gray-500 w-[80%]  text-left lg:w-[50%] text-lg  mx-auto">Whether you're hitting the open road, or exploring nature we've got you covered with our wide range of cars</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PlanTrip