import ContactBanner from "./ContactBanner"
import LandingTestimonials from "./LandingTestimonials"
import PageHeader from "./PageHeader"


const Testimonials = () => {

    return(
        <div>
            <div className="mt-20">
                <PageHeader />
            </div>
            <div className="mt-52">
                <LandingTestimonials />
            </div>
            <div>
                <ContactBanner />
            </div>
        </div>

    )
}

export default Testimonials