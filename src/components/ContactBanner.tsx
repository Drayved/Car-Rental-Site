

const ContactBanner = () => {

    return(
        <div className="bg-[url('/images/black-car.jpg')] bg-repeat bg-center relative top-32 md:top-[7.95rem] lg:top-[7.95rem] xl:top-[9.3rem] w-screen py-20 lg:py-28 flex justify-center items-center">
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