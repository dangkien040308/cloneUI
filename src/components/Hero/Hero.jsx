import Button from "../Buttons/buttons"
import Widget1 from "../Widget/widget1"
export default function Hero() {
  return (
    <div className="bg-[#09011D] p-5">
       <div className="flex items-center justify-center flex-col mt-[50px]">
          <div className="bg-[#1D064F] py-1 px-2 rounded-lg flex items-center justify-center"> <span className=" mr-2 w-2 h-2 bg-[#d1c8ee] rounded-full block"></span> <span className="text-[12px] tracking-widest font-medium text-[#d1c8ee]">BETA 1.5 AVAILABLE NOW</span>  </div>
          <div className="text-7xl font-medium text-[#fff] w-4/6 text-center my-5">Set your sales on cruise control </div>
          <div className="text-base text-center w-[40%] text-[#9c92b9]"> Enhance every aspect of your business sales, ensuring satisfaction, loyalty, and unparalleled service. Thanks to AI of course.</div>
          <div className="flex items-center justify-center mt-5">
            <Button type='primary' shape='big' className='mr-3'>Book your demo </Button>
            <Button type='secondary' shape='big' >Get start for free </Button>
          </div>
       </div>
       <div>
        <Widget1 />
       </div>
    </div>
  )
}