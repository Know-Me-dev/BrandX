import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
   <section className="flex xl:items-center  max-xl:flex-col-reverse gap-10 max-container">

    <div className="flex-1">
      <img src={offer} width={773} height={687} className="object-contain w-full" />
    </div>

    <div className="flex flex-1 flex-col">

      <h2 className=" text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
        
        <span className="text-coral-red"> Special
        </span> Offer
      </h2>

      <p className="mt-4 lg:max-w-3xl info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-3xl info-text">
          Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectaions. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button 
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-black hover:border-slate-gray"
          textColor="text-black hover:text-slate-gray"
          transition="duration-200"
          />
        </div>
      
    </div>

   </section>
  )
}

export default SpecialOffer