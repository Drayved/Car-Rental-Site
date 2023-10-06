import PlanTrip from "./PlanTrip"
import BookForm from "./BookForm"
import ChooseCar from "./ChooseCar"
import ChooseUs from "./ChooseUs"
import Faq from "./Faq"
import Hero from "./Hero"
import LandingBanner from "./LandingBanner"
import LandingTestimonials from "./LandingTestimonials"
import MobileApp from "./MobileApp"
import ScrollToTopButton from "./ScrollToTopButton"

const Landing = () => {

    return(
            <>
                {/* Hero section */}
                <div className="mt-[5vh] md:mt-[20vh] md:ml-[10%] 2xl:ml-[20%]">
                    <Hero />
                </div>
                
                {/* Book form section */}

                <div id="book-form-section" className="flex flex-col justify-center  mt-32 sm:mt-[30rem]">
                    <BookForm />
                </div>

                {/* Plan your trip section */}

                <div className="mt-32 xl:mt-52">
                    <PlanTrip />
                </div>
                
                {/* Choose car section */}

                <div className="xl:mt-44 mt-32">
                    <ChooseCar />
                </div>

                {/* Save banner section */}

                <div className="mt-32 xl:mt-44 ">
                    <LandingBanner />
                </div>
                
                {/* Choose us section */}

                <div className="mt-24 xl:mt-44">
                    <ChooseUs />
                </div>

                {/* Testimonials */}

                <div className="mt-32 xl:mt-44">
                    <LandingTestimonials />
                </div>

                {/* FAQ section */}

                <div className="mt-32 xl:mt-44">
                    <Faq />
                </div>

                {/* App section */}

                <div className="mt-32 xl:mt-44">
                    <MobileApp />
                </div>
                <div>
                    <ScrollToTopButton />
                </div>
                
            </>
    )
   
}

export default Landing