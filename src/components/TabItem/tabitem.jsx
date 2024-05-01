import { FaArrowRight } from "react-icons/fa6";
export default function TabItem({ title, des, isActive }) {
  return (
    <div className={(isActive && 'bg-[#E1DDE4]') + " flex items-stretch justify-start flex-col p-7 mt-5 w-[90%] rounded-[20px] hover:bg-[#E1DDE4] hover:cursor-pointer"}>
      <div className="text-[#35235c] font-[500] text-lg">{title}</div>
      <div className="text-[#5a595a] font-[400] mt-3  w-[90%] flex-1 mb-auto block">{des}</div>
      <div className="mt-4">
        <div className="border-b-[1px] py-2 border-[#414040] inline mr-3 ">Learn more</div>
        <FaArrowRight className="inline" />
      </div>
    </div>
  )
}