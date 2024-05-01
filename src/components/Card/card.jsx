import Button2 from "../Buttons/button2"
import SaleItem from "./salesItem"
import { FaArrowRight } from "react-icons/fa6";
export default function Card({title, des, price, sales, special , children ,time}) {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#eee] w-[29%]">
      <div className="px-6 pt-8 pb-6 border-b-[1px] border-[#eee] ">
        <div>
          <span className="text-[#1D054F] text-2xl font-[600] inline">{title}</span>
        { special ? 
          <span className="bg-[#EEF2FF] py-1 px-2 rounded-lg w-max ml-3">
             <span className=" mr-2 w-[6px] h-[6px] bg-[#3E3AF2] rounded-full inline-block mb-[2px]"></span> 
             <span className="text-[12px] tracking-widest font-[700] text-[#3E3AF2] mb-[5px] inline-block">Save 30%</span>  
          </span> : '' }
          
        </div>
         <div className="text-[16px] text-[#818181] mb-[10px] ">{des}</div>
      </div>
      <div className="bg-[#FCFCFD] w-[100%]">
       <div className="grid grid-cols-1 grid-rows-3 py-4 px-6">
          <div className="py-[10px] mb-[15px]"> <span className="text-[#1D054F] font-[600] text-5xl inline">{price}</span> <span className="inline text-[#1D054F] text-[16px]">{time}</span> </div>
          <div>
              {sales.map((item,key) => (
              <SaleItem content={item} key={key} />
            ))}
          </div>
           {
            special ? 
            <Button2 children={children} type='primary' icon={<FaArrowRight />} /> :
            <Button2 children={children} type='secondary'  icon={<FaArrowRight />} /> 
           }
       
      
        </div>
        
              
      </div>
    </div>
  )
}