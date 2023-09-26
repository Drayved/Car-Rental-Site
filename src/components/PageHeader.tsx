

const PageHeader = () => {

    return(
        <div className="">
            <div className="absolute ml-5 2xl:ml-[20%] md:ml-[5%]">
                <h1 className="font-bold text-3xl">Page Name</h1>
                <button className="font-semibold text-md mt-5">Home /<span>Page Name</span></button>
                <img className=" w-[120rem] left-52  h-80 z-0 relative -top-52 opacity-5" src="/images/blue-car-2.jpg" alt="" />
            </div>
            
        </div>
    )
}

export default PageHeader