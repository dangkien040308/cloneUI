import { FaArrowTrendUp } from "react-icons/fa6";
export default function Module({mainText,extraText,item,type}) {
  return (
    <div className="py-[120px] px-[50px] rounded-md border-[1px] border-[#acabab] flex items-center justify-between mt-[70px]">
       {type === 'right' ? (<div className="w-[50%]">
          <div className=" text-5xl text-[#fff]"><p>{mainText}</p> <p className="text-[#90859c]">{extraText}</p></div>
          <div className="px-3 py-2 rounded-lg hover:cursor-pointer hover:opacity-60 text-[#fff] mt-7 border-2 border-[#d8d6d6] w-max">
             <span className="mr-4">Learn more</span>
             < FaArrowTrendUp className="inline text-[20px]" />
          </div>
       </div>) : ''}
       {item}
       {type === 'left' ? (<div className="w-[50%]">
          <div className=" text-5xl text-[#fff]"> <p>{mainText}</p> <p className="text-[#90859c]">{extraText}</p></div>
          <div className="px-3 py-2 rounded-lg hover:cursor-pointer hover:opacity-60 text-[#fff] mt-7 border-2 border-[#d8d6d6] w-max">
             <span className="mr-4">Learn more</span>
             < FaArrowTrendUp className="inline text-[20px]" />
          </div>
       </div>) : ''}
    </div>
  )
}