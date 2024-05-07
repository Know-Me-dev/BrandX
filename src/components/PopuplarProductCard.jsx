import { star } from "../assets/icons"

const PopuplarProductCard = ({imgURL , name, price}) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full max-sm:items-center ">
        <img 
        src={imgURL} 
        alt={name} 
        className="w-[280px] h-[280px] cursor-pointer"
        />

        <div className="mt-8 flex gap-2.5 ">
            <img 
            src={star} 
            alt="rating" 
            width={24}
            height={24}
            />
            <p className="font-montserrat text-xl leading-normal text-slate-gray cursor-pointer">
                (4.5)
            </p>
        </div>

            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin cursor-pointer">
                {name}
            </h3>

            <p className="mt-2 font-montserrat font-semibold text-coral-red text-xl leading-normal cursor-pointer">
                {price}
            </p>

        
    </div>
  )
}

export default PopuplarProductCard