import Widget1 from "../../components/Widget/widget1";
import Widget2 from "../../components/Widget/widget2";
import Widget3 from "../../components/Widget/widget3";
import { FaAngrycreative } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

export default function CTA(){
  return (
    <div className="px-[20px] py-[40px] bg-[#09011C]">

        <div className="flex items-center justify-between">
           <div className="text-[65px] leading-none text-[#F3F0F5] font-[500] w-[40%]">Turbo change your business with Rocketsales</div>  
           <div className="w-[40%]">
              <p className="text-[16px] text-[#93869E] text-left w-[60%] mb-4">Set your business up for success with Rocketsales, the Framer Template designed & built just for that.</p>
              <div className="flex items-center justify-between p-2 border-2 border-[#6d6c6c] rounded-2xl"> 
                <input type="text" placeholder="Your work email" className="outline-none p-2 w-[60%] bg-transparent placeholder:text-[#fff] text-[#fff]" />
                <div className="px-2 py-3 rounded-lg bg-[#3E3AF2] text-[#F3F0F5] hover:cursor-pointer hover:opacity-60 font-[500]">Create free account</div>
              </div>
           </div>   
        </div>

        <div className="mt-[300px] flex items-start justify-between px-8">
          <Widget1 className='-translate-y-6' />
          <Widget2 />
          <Widget3 className='-translate-y-20' />
        </div>
        
        <div className="pt-[40px] bg-[#09011D] border-t-[1px] border-[#c4c4c4] mt-[40px]"> 
           <div className="flex items-center justify-between w-10/12 mx-auto">
              <div className="flex items-center justify-around text-[#fff]">
                  <FaAngrycreative className="text-3xl" />
                  <span className="ml-3 text-lg font-medium">RocketSales</span>
              </div>
           <div>
              <ul  className="flex items-center justify-around text-[#463D62] text-base ">
                <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Products</li>
                <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Stories</li>
                <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Features</li>
                <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">Pricing</li>
                <li className="mr-3 hover:cursor-pointer hover:text-[#d4d3d3]">FAQ</li>
              </ul>
            </div>
            <div className=" text-[#978bbd]">
               @2024 - Made with < FaHeart className="inline mx-1 text-[#fff]" /> by <span className="text-[#fff]">Andrea Mantini and code UI : KenDev</span> 
            </div>
        </div>
      </div>
    </div>
  )
}