import { FaArrowTrendUp } from "react-icons/fa6";
export default function Widget1({className}) {
   return (
    <div className={(className ? className : '') 
    + ' w-[30%] overflow-hidden rounded-lg shadow-md border-[0.15px] border-[#acabab] shadow-[#3E3AEF] py-4 px-5 bg-[#0B0420] relative before:absolute before:w-[80px] before:h-[220px] before:bg-[#180F4F] before:rotate-[60deg] before:right-[-10px] before:bottom-[-90px]'}>
       <div className="mb-5">
         <span className="text-[#DDD6FE] mb-2 block">Revenue</span>
         <span className="block rounded w-[120px] h-[8px] bg-[#1E1831]"></span>
       </div>
       <div>
         <span className="text-3xl text-[#DDD6FE]">$78,442.80</span>
         <div className="flex items-center justify-start mt-1">
             <span className="block mr-2 text-[#4f46c7] font-medium">+12.46%</span> 
             <FaArrowTrendUp className="mr-2 text-[#1E1831]" />
             <span className="block rounded w-[110px] h-[8px] bg-[#1E1831]"></span>
          </div>
       </div>
    </div>
   )
}