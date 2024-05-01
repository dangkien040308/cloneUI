import { FaArrowTrendUp } from "react-icons/fa6";
export default function Widget3({className}) {
   return (
    <div className={(className ? className : '') 
    + ' w-[28%] overflow-hidden rounded-lg shadow-md border-[0.15px] border-[#acabab] shadow-[#3E3AEF] py-4 px-5 bg-[#0B0420] '}>
       <div className="mb-5">
         <span className="text-[#fff] mb-2 block">New Leads</span>
         <span className="block rounded w-[120px] h-[8px] bg-[#1E1831]"></span>
       </div>
       <div className="flex items-center justify-between mt-8">
         <div className="flex items-start justify-start flex-col text-[#DDD6FE]">
          <span className="text-[40px] font-[400] block ">472</span>
          <span className="block mt-[-15px]">New calls</span>
         </div>
         <div className="flex items-start justify-start flex-col mt-3">
          <div className="mb-1"> <span className="text-[#4f46c7] font-medium">+156.10%</span> <FaArrowTrendUp className="inline ml-2 text-[#1E1831] font-medium" />  </div>
          <span className="block rounded w-[100px] h-[8px] bg-[#1E1831]"></span>
         </div>
       </div>
    </div>
   )
}