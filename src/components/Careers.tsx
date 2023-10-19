import ContactBanner from "./ContactBanner"
import PageHeader from "./PageHeader"


const Careers = () => {

    return(
        <div className="mt-20">
            <div>
                <PageHeader />
            </div>
            <div className="mt-28 hidden  lg:flex  justify-center">
                <form action="" className="flex">
                    <div className="flex flex-col">
                        <label htmlFor="">Keywords</label>
                        <input className="border mr-5 h-8 p-1.5 rounded-sm text-xs w-52" type="text" placeholder="Enter a Keyword to Search" />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="">Location</label>
                        <input className="border mr-5 h-8 p-1.5 rounded-sm text-xs w-52" type="text" placeholder="City, State or Zip" />
                    </div>
                   
                    <div className="flex flex-col">
                        <label htmlFor="Radius">Radius</label>
                        <select className="border mr-5 h-8 px-1.5 rounded-sm text-xs w-52" placeholder="Select Radius">
                            <option value="any">Select Radius</option>
                            <option value="5">5 Miles</option>
                            <option value="10">10 Miles</option>
                            <option value="20">20 Miles</option>
                            <option value="50">50 Miles</option>
                            <option value="100">100 Miles</option>
                        </select>
                        
                    </div>
                    <button className="border border-[#00a8f3] bg-[#00a8f3] text-white font-bold text-lg h-8 mt-6 rounded-sm w-52" >SEARCH</button>
                </form>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:max-w-[70rem]  gap-10 mx-auto mt-24">
                <div className="bg-blue-900  text-white  h-[30rem] lg:w-[35rem] lg:h-[35rem] ">
                    
                    <h3 className="text-center italic mr-48 pt-16 text-2xl transform -rotate-10 mt-20 xl:mt-28 " style={{ transform: 'rotate(-5deg)', transformOrigin: 'left bottom' } as React.CSSProperties}>Never Miss an</h3>
                    <h1 className="text-center italic font-extrabold text-5xl mb-10 transform -rotate-10 " style={{ transform: 'rotate(-5deg)', transformOrigin: 'left bottom' } as React.CSSProperties}>
                        <span className="relative inlin-block">
                            <img className="absolute -left-12" src="/images/checkmark.png" alt="" />
                            Opportunity
                        </span>
                        
                    </h1>
                    <p className="border-t border-b relative  py-5 w-[20rem] mx-auto">
                        Join our talent community and we'll send our
                        latest roles straight to your inbox
                    </p>
                </div>

                <div className="max-w-[35rem] px-5 lg:px-0 lg:max-w-[30rem] mx-auto">
                    <h1 className="text-2xl text-blue-900 font-bold mt-10 lg:mt-0">Job Alerts</h1>
                    <p className="text-gray-500 mt-2 mb-5 font-bold">Fill out the form, and we'll take care of the rest.</p>
                    <form action="">
                        <div className="flex border-b pt-1 border-black my-5">
                            <label className="mr-10 w-32" htmlFor="">First Name*</label>
                            <input className="border w-full" type="text" />
                        </div>
                        <div className="flex border-b border-black my-5">
                            <label className="mr-10 w-32 pt-1" htmlFor="">Last Name*</label>
                            <input className="border w-full" type="text" />
                        </div>
                        <div className="flex border-b border-black">
                            <label className="mr-4 lg:mr-[1.1rem] w-40 pt-1" htmlFor="">Email Address*</label>
                            <input className="border w-full" type="email" />
                        </div>
                        <div className="mt-7">
                            <h1 className="font-bold text-blue-900 mb-3">Areas of Interest*</h1>
                            <p className="text-xs lg:text-sm">
                                Select a job category from the list of options. Search for a location 
                                and select one from the list of suggestions. Finally, click “Add” to 
                                create your job alert.
                            </p>
                        </div>
                        <div className="mt-3 ">
                            <div className="border-b border-black py-0.5 my-5">
                                <label className="mr-5 " htmlFor="">Job Category*</label>
                                <select className="text-sm w-full text-gray-400" name="" id="">
                                    <option className="text-gray-100 " value="">Select a Job Category</option>
                                </select>
                            </div>
                           
                            
                                <div className="border-b border-black py-0.5 flex justify-between">
                                    <div>
                                        <label className="mr-5" htmlFor="">Location*</label>
                                        <input className="text-sm flex-grow w-full" type="text" placeholder="Type to search for a Location" />
                                    </div>
                                   
                                    <button className=" h-8 mt-4 border-2 border-gray-700 font-bold px-2 text-gray-800">Add</button>
                                </div>
                                
                            
                            <p className="text-gray-400 text-xs my-3">
                                Once you’ve selected all of your areas of interest, 
                                click “subscribe” to set up email alerts.
                            </p>
                           <button className="bg-blue-900 text-white w-full py-1">SUBSCRIBE</button>
                        </div>
                    </form>
                    
                   
                </div>
            </div>

            <div className="max-w-[55rem] lg:max-w-[73rem] mx-auto px-5 pt-12">
                <h1 className="text-blue-900 font-bold text-2xl mt-10">Careers at Enterprise Holdings</h1>
                <h4 className="text-blue-900 font-bold mt-2">We’re here to take your talents to new heights.</h4>
                <p className="text-sm text-gray-500 lg:text-base mt-1">
                    Just what is it that you’re looking for from your career? Whether it’s constant 
                    growth and development, meaningful work, opportunities for promotion or just 
                    colleagues you can have fun with along the way, one thing is for certain; 
                    you’ll find it all (and much more) here at Enterprise Holdings. All you need 
                    to do is bring your personality, enthusiasm, talent and team spirit along for 
                    the ride, and we’ll help with the rest. After all, we are the experts in 
                    helping people get to where they want to be.
                </p>
            </div>

            <div>
                <ContactBanner />
            </div>
        </div>
    )
}

export default Careers