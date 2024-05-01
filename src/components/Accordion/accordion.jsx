import { FaPlus } from "react-icons/fa6"

export default function Accordion({title , des}) {
  return (
    <div className="px-4 py-5 rounded-xl hover:bg-[#140F21] hover:cursor-pointer flex items-start justify-between">
       <div>
         <span className="text-[20px] font-[500] text-[#beb9b9]">{title}</span>
         <p className="inline-block mt-2 text-[#978AA1]">{des}</p>
       </div>
       <div>
         <FaPlus  className="text-[#fff]"/>
       </div>
    </div>
  )
}