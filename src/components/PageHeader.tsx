import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const PageHeader = () => {
    const location = useLocation()

    return(
        <div className="relative">
            <div className=" ml-5 2xl:ml-[20%] md:ml-[5%]">
                <h1 className="font-bold text-3xl capitalize">{location.pathname.slice(1,50).replace(/[^\w\s]/gi, ' ')}</h1>
                <button className="font-semibold text-md mt-5">
                    <Link to="/">Home</Link> /<span className="capitalize">{location.pathname.slice(1,50).replace(/[^\w\s]/gi, ' ')}</span>
                </button>
                    
                
            </div>
            <div className="absolute w-screen pointer-events-none">
                <img className="w-[100%] relative left-0 right-0 lg:left-72 h-[20rem] min-w-[100rem] z-0  -top-56 opacity-10" src="/images/page-header.jpg" alt="" />
            </div>
        </div>
    )
}

export default PageHeader