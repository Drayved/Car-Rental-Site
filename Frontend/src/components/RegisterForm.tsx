
type RegisterFormProps = {
    onClose: () => void; 
  };

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-70 bg-black z-50">
      <div className="bg-white rounded-lg p-8 w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <button
          onClick={onClose}
          className="text-white bg-red-500 rounded-full py-2 px-4 hover:bg-red-600 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
