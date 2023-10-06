import ContactBanner from "./ContactBanner"
import PageHeader from "./PageHeader"


const Contact = () => {

    return(
        <div>
            <div className="mt-20 ">
                <PageHeader />
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:w-[90%]  2xl:w-[60%] mx-auto">
                <div className="flex flex-col w-[90%] mx-auto mt-48">
                    <h1 className="text-5xl font-bold">Need additional information?</h1>
                    <p className="text-gray-600 max-w-[26rem] md:max-w-[90%] mt-10">
                        Contact us and certified professional will get back to as soon as possible
                        to answer any questions or concerns you might have.
                    </p>
                    <div className="flex flex-col gap-5 mt-10 font-bold text-gray-600">
                        <div className="flex contact-phone-container hover:text-[#00a8f3] w-40">
                            <a className="flex" href="tel:+1234567899">
                                <img className="contact-phone w-6 h-6 mt-[19.5px] mr-2" src="/images/black-phone.png" alt="phone icon" />
                                <p className="mt-5">(123) 456-7899</p>
                            </a>
                        </div>
                        <div className="flex contact-email-container hover:text-[#00a8f3] w-60">
                            <a className="flex" href="mailto:car-rental@car-rentals.com">
                                <img className="contact-email w-6 h-6 mt-[19.5px] mr-2" src="/images/email.png" alt="" />
                                <p className="mt-5">car-rental@car-rentals.com</p>
                            </a>
                        </div>
                        <div className="flex contact-location-container hover:text-[#00a8f3] w-48">
                            <a className="flex" href="https://www.google.com/maps?q=Cincinnati,Ohio" target="_blank" rel="noopener noreferrer">
                                <img className="contact-location w-7 h-7 mt-[16px] mr-2" src="/images/location.png" alt="" />
                                <p className="mt-5">Cincinnati, Ohio</p>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div className="flex-col w-[90%] mx-auto mt-10 md:mt-44 ">
                    <form action="">
                        <div className="flex flex-col mt-5 ">
                            <label className="font-bold text-lg" htmlFor="">Full Name*</label>
                            <input className="border py-2 mt-1 pl-2 w-[100%] md:max-w-[35rem] focus:outline-none" type="text" placeholder="E.g: Joe Shmoe" />
                        </div>

                        <div className="flex flex-col mt-5">
                            <label className="text-gray-700 text-lg font-bold" htmlFor="email">Email*</label>
                            <input className="border py-2 mt-1 pl-2 w-[100%] md:max-w-[35rem] focus:outline-none" type="text" placeholder="youremail@example.com" />
                        </div>
                        
                        <div className="flex flex-col mt-5">
                            <label className="text-gray-700 text-lg font-bold" htmlFor="">Tell us about it*</label>
                            <input className="pb-24 border pl-2 mt-1 pt-1 w-[100%] md:max-w-[35rem] focus:outline-none" type="text" placeholder="Write your message here..."/>
                        </div>
                       <div>
                        
                       </div>
                       <button className="font-bold contact-btn-container py-5 w-[100%] md:max-w-[35rem] hover:bg-white hover:text-[#00a8f3] hover:border hover:border-[#00a8f3] mt-7 bg-[#00a8f3] text-white text-center" type="submit">
                            <div className="flex items-center justify-center">
                                <img className="contact-btn-img w-6 h-5 mr-2" src="/images/send-message.png" alt="" />
                                Send Message
                            </div>
                        </button>
                    </form>
                </div>
            </div>

            <div>
                <ContactBanner />
            </div>
        </div>
    )
}

export default Contact