export default function Carousel({className,logo,number,des,img,name,job}) {
  return (
    <div className="p-4 rounded-[20px] w-[60%] flex items-start justify-between flex-col mr-5 bg-[#F5F4FB]">
      <div className="text-xl font-[500] text-[#6B5E75]">{logo}</div>
      <div className="my-[120px]">
        <div className="text-7xl text-[#7C4CFD] font-[700] mb-3">{number}</div>
        <div className="font-[500] text-[#6B5E75] text-[15px]">{des}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden  mr-3">
          <img src={img} className="object-cover" />
        </div>
        <div>
          <div className="font-[600]">{name}</div>
          <div className="font-[500] text-[13px] text-[#988EA0]">{job}</div>
        </div>
      </div>
    </div>
  )
}