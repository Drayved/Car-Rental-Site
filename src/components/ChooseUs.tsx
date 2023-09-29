

const ChooseUs = () => {

    return(
        <div className="lg:flex flex-col mx-auto">
            <div className="flex justify-center">
                <img src="/images/multi-cars.png" alt="" />
            </div>

            <div className="flex flex-col lg:flex-row text-center lg:text-left lg: mx-auto">
                <div className="flex flex-col ">
                    <h4 className="font-semibold mb-2 text-xl lg:text-left">Why Choose Us</h4>
                    <h1 className="font-bold text-4xl mb-5 lg:w-[95%] lg:text-left">Best valued deals you will ever find</h1>
                    <p className="lg:w-[30rem] w-[90%] text-lg text-gray-500 mx-auto text-left">Discover the best deals you'll ever find with our unbeatable offers. 
                        We're dedicated to providing you with the best value for your money, 
                        so you can enjoy top-quality services and products without breaking 
                        the bank. Our deals are designed to give you the ultimate renting 
                        experience, so don't miss out on your chance to save big.
                    </p>
                    <button className="py-4 mx-auto lg:mx-0 mb-16 shadow-md shadow-blue-200 bg-[#00a8f3] text-white text-center w-40 mt-8">Find details</button>
                </div>
                
                <div className="w-[85%] mx-auto lg:mr-5">

                    <div className="mb-10 lg:flex"> 
                        <div className="w-28 h-28 bg-[#bee9fdaa] rounded-full mx-auto lg:mr-5 mb-5">
                            <img className="w-16 ml-[1.35rem] pt-5" src="/images/country.png" alt="" />
                        </div>
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-bold text-2xl mb-3">Cross Country Drive</h1>
                            <p className="text-left w-[85%] mx-auto lg:text-left lg:w-80">Take your driving experience to the next level with our top notch
                                vehicles for your cross-country adventures.
                            </p>
                        </div> 
                    </div>

                    <div  className="mb-10 lg:flex">
                        <div className="w-28 h-28 bg-[#bee9fdaa] rounded-full mx-auto lg:mr-5 mb-5">
                            <img className="w-16 mx-auto pt-[1.1rem]" src="/images/cash-car.png" alt="" />
                        </div>
                        <div className="lg:flex-col">
                            <h1 className="font-bold text-2xl mb-3">All Inclusive Pricing</h1>
                            <p className="text-left w-[85%] mx-auto lg:text-left lg:w-80">Get everything you need in one convenient, 
                                transparent price with our all-inclusive pricing policy.
                            </p>
                        </div>
                        
                    </div>
                    <div  className="mb-10 lg:flex">
                        <div className="w-28 h-28 bg-[#bee9fdaa] rounded-full mx-auto lg:mr-5 mb-5">
                            <img className="mx-auto w-20 pt-[1.1rem] pl-1" src="/images/hidden-charges.png" alt="" />
                        </div>
                        <div className="lg:flex lg:flex-col">
                            <h1 className="font-bold text-2xl mb-3">No Hidden Charges</h1>
                            <p className="text-left w-[85%] mx-auto lg:text-left lg:w-80">Enjoy peace of mind with our no hidden charges policy. 
                                We believe in transparent and honest pricing.
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs