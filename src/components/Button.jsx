
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, transition , fullWidth}) => {
  return (
    <button className={`group flex justify-center items-center sm:px-7 sm:py-4 border px-5 py-4
               font-montserrat text-lg leading-none
               ${backgroundColor
                  ? `${backgroundColor} ${textColor} ${borderColor} ${transition}`
                  : "bg-coral-red text-white border-transparent relative overflow-hidden hover:bg-transparent hover:text-coral-red duration-200 hover:border-coral-red"} 
                  rounded-full 
                   ${fullWidth && `w-full`}
                   "}`}>

             {label}

              { iconURL && <img
                  src={iconURL}
                  alt="arrow right icon"
                  className="ml-2 rounded-full w-6 h-6  duration-300 group-hover:translate-x-3"
                /> }
    </button>
  );
};

export default Button;

