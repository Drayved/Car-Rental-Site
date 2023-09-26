

const MobileApp = () => {

    return(
        <>
        <div className="flex flex-col">
            <div className=" w-[99%]  flex flex-col ">
                <div className="2xl:w-[30%]  w-[95%] md:w-[80%]  flex flex-col items-center 2xl:items-start 2xl:text-left mx-auto 2xl:ml-[20%]">
                    <h1 className="text-5xl font-bold">Download our app for special offers and rewards</h1>
                    <p className="mt-5   md:mx-0 mx-auto">
                        Earn rewards that you can spend on gift cards, 
                        flight discounts, and more! We also offer special rates
                        if you book your car through our app! 
                    </p>
                    <div className=" mt-10 gap-2 small:gap-7 flex flex-col sm:justify-start items-start xsmall:flex-row ">
                        <img className="w-52" src="/images/google-store.svg" alt="" />
                        <img className="w-52" src="/images/apple-store.svg" alt="" />
                    </div>
                </div>
                

            
            </div>
            <div className="relative ">
                <img className=" absolute w-[60rem] -top-[27rem] hidden 2xl:flex  -right-52  z-10 " src="/images/mobile-app.png" alt="" />
            </div>
           
        </div>
        
               
           
        </>
    )
}

export default MobileApp