import { FaAngrycreative } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
export default function Nav() {
  return (
    <div className="py-5 bg-[#09011D] border-b-[1px] border-[#c4c4c4]"> 
    <div className="flex items-center justify-between w-10/12 mx-auto">
       <div className="flex items-center justify-around text-[#fff]">
          <FaAngrycreative className="text-3xl" />
          <span className="ml-3 text-lg font-medium">RocketSales</span>
       </div>
       <div>
          <ul  className="flex items-center justify-around text-[#463D62] text-base ">
            <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Products</li>
            <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Use Case</li>
            <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Benefits</li>
            <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Pricing</li>
            <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">FAQ</li>
          </ul>
       </div>
       <div className="flex items-center justify-center p-2 border-[1px] border-[#c7c7c7] rounded hover:bg-[rgba(87,87,87,0.2)] hover:cursor-pointer">
          <span className="text-[#cfcfcf] mr-3 text-sm font-bold">Get This Template</span>
          <FaArrowTrendUp className="text-[#fff]" />
       </div>
    </div>
    </div>
  )
}