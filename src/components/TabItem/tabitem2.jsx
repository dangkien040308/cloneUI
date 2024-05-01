import { FaArrowRight } from "react-icons/fa6";

export default function TabItem2({ icon , title , des , className}) {
  return (
    <div className="w-[30%] pr-[20px] hover:cursor-pointer hover:bg-[rgba(53,52,52,0.3)] p-5 rounded-lg">
      <div className={ className +' mb-[20px] text-[30px] p-3 rounded-lg border-[1px] w-max ' }>
        {icon}
      </div>
      <div className="text-2xl text-[#EBE8EE] mb-[13px] font-[500]">{title}</div>
      <div className="text-[16px] text-[#95889F] mb-5 w-[80%]">{des}</div>
      <div className="text-[#EBE8EE]"> <span className="pb-1 border-b-[2px] border-[#38394C] font-[500]">Learn more</span> <FaArrowRight className="inline" /> </div>
    </div>
  )
}