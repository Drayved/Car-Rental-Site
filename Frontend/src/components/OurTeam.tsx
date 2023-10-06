import PageHeader from "./PageHeader"
import ContactBanner from "./ContactBanner"


const team = [
    {
        name: "Luke Miller",
        imageSrc: "/images/luke.png",
        role: "Salesman"
    },
    {
        name: "Michael Diaz",
        imageSrc: '/images/michael.png',
        role: "Business Owner"
    },
    {
        name: "Briana Ross",
        imageSrc: "/images/briana.png",
        role: "Photographer"
    },
    {
        name: "Lauren Rivera",
        imageSrc: "/images/lauren.png",
        role: "Car Detailist"
    },
    {
        name: "Martin Rizz",
        imageSrc: "/images/martin.png",
        role: "Mechanic"
    },
    {
        name: "Caitlyn Hunt",
        imageSrc: "/images/caitlyn.png",
        role: "Manager"
    }
        

]
const OurTeam = () => {


    return (
        <div>
            <div className="mt-20">
                <PageHeader />
            </div>
            <div className="max-w-[60%] gap-10 2xl:gap-20 mt-48 flex  items-center justify-center text-center  flex-wrap mx-auto">
                {team.map((member, index) => (
                    <div className="team-container" key={index}>
                        <img src={member.imageSrc} alt="" />
                        <div className="py-6">
                            <h1 className="text-2xl font-bold">{member.name}</h1>
                            <p>{member.role}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
            <div>
                <ContactBanner />
            </div>
        </div>
    )
}

export default OurTeam