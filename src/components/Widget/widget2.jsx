import './widget2.css'
export default function Widget2({className}) {
  return (
   <div className={(className ? className : '') 
   + ' w-[33%] shadow-md shadow-[#3E3AEF] rounded-lg border-[0.15px] border-[#acabab] py-4 px-5 bg-[#0B0420] relative '}>
      <span className="text-[#DDD6FE] mb-2 block">Opportunities</span>
      <div className="rounded w-[120px] h-[8px] bg-[#1E1831]"></div>
      <div className="flex items-center justify-between  mt-5">
        <div className="flex items-center justify-start w-[55%] flex-wrap gap-3">
          <div className="rounded-lg bg-[#1E1831] flex flex-col item-start justify-center px-4 py-1 text-[#DDD6FE] w-[40%]">
            <span className="block w-[7px] h-[7px] bg-[#3F3BF2] rounded-full"></span>
            <div className="text-[30px] mb-[-10px] mt-[-2px]">157</div>
            <div className='text-sm'>Done</div>
          </div>
          <div className="rounded-lg bg-[#1E1831] flex flex-col item-start justify-center px-4 py-1 text-[#DDD6FE] w-[40%] ">
            <span className="block w-[7px] h-[7px] bg-[#3F3BF2] rounded-full"></span>
            <div className="text-[30px] mb-[-10px] mt-[-2px]">123</div>
            <div className='text-sm'>Active</div>
          </div>
          <div className="rounded-lg bg-[#1E1831] flex flex-col item-start justify-center px-4 py-1 text-[#DDD6FE] w-[40%]">
            <span className="block w-[7px] h-[7px] bg-[#3F3BF2] rounded-full"></span>
            <div className="text-[30px] mb-[-10px] mt-[-2px]">8</div>
            <div className='text-sm'>At risk</div>
          </div>
          <div className="rounded-lg bg-[#1E1831] flex flex-col item-start justify-center px-4 py-1 text-[#DDD6FE] w-[40%]">
            <span className="block w-[7px] h-[7px] bg-[#3F3BF2] rounded-full"></span>
            <div className="text-[30px] mb-[-10px] mt-[-2px]">26</div>
            <div className='text-sm'>Inactive</div>
          </div>
        </div>
        <div className="circleCustom">
          <div className='childCircleCustom'></div>
        </div>
      </div>
     
   </div>
  )
}