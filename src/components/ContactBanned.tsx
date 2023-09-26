

const ContactBanner = () => {

    return(
        <div className="bg-[url('/images/black-car.jpg')] bg-repeat bg-center relative bottom-[13.65rem] xs:bottom-48 md:top-[19.55rem] lg:top-[21rem] w-screen h-auto lg:h-52 py-20 flex justify-center items-center">
            <div className="flex flex-col lg:flex-row items-center">
                <h1 className="text-white mb-5 lg:mb-0 text-3xl w-[95%] text-center sm:w-screen lg:w-full md:text-3xl font-bold px-1">Call us today and book the perfect car for you</h1>
                <div className="flex items-center">
                    <img className="w-9 mt-0.5  mr-2" src="/images/phone.png" alt="" />
                    <p className="text-[#3182ce] lg:w-[16rem] text-3xl md:text-3xl font-bold">(123) 456-7869</p>
                </div>
               
            </div>
        </div>
    )
}

export default ContactBanner