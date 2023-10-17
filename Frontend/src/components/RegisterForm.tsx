
type RegisterFormProps = {
    onClose: () => void; 
  };

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-70 bg-black z-50">
      <div className="bg-white p-0.5 w-[90%] ">
        <div className="w-full text-white p-2 h-auto flex items-center bg-blue-500 justify-between">
            <h2 className="text-2xl font-bold ">COMPLETE RESERVATION</h2>

            <button
            onClick={onClose}
            className="text-white bg-red-500 rounded-full py-2 px-4 hover:bg-red-600 cursor-pointer"
            >
            X
            </button>
           
        </div>

        <div className="bg-blue-100 p-5">
            <h3 className="text-xl text-blue-800 font-bold mb-4">Upon completing this reservation enquiry, you will receive:</h3>
            <h4 className="text-bold text-lg text-gray-500">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</h4>
        </div>

        <div>
            <div className="flex gap-52 py-5 px-10 ">
                <h2 className="text-xl text-blue-700 font-bold">Location & Date</h2>
                <h2 className="text-xl  font-bold">car - <span className="text-blue-700">car name</span></h2>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="p-3">
                    <h4>Pic-up Date & Time</h4>
                </div>

                <div>
                    <img className="w-72" src="/images/main-car.png" alt="" />
                </div>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterForm;
