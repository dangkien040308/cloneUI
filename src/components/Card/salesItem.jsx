import { BsCloudArrowDown } from "react-icons/bs";
export default function SaleItem({content}) {
  return (
    <div className="mb-[5px]">
       <BsCloudArrowDown className="inline mr-2 text-[#7C3AED]" />
       <span className="text-[16px] text-[#6e6d6d]">{content}</span>
    </div>
  )
}