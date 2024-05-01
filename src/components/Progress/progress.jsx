import { RiInformation2Line } from "react-icons/ri";
export default function Progress({ className }) {
  return (
    <div className={(className ? className : '') + ' overflow-hidden rounded-lg mt-4 w-[60%] mx-auto'}>
        <div className="bg-[#fff] p-4 ">
           <div className="flex items-center justify-between">
             <span className="font-[600] text-[20px]">Progress</span>
             <span className="text-[14px]">106 out of 156</span>
           </div>
           <div className="bg-[#eee] rounded-md w-[95%] h-[25px] mt-4 overflow-hidden">
              <span className="w-[150px] bg-gradient-to-r from-[#864EFE] to-[#403BF3] h-[25px] inline-block"></span>
              <span className="w-[30px] bg-[#3730A2] h-[25px] inline-block"></span>
              <span className="w-[25px] bg-[#EDA348] h-[25px] inline-block"></span>
              <span className="w-[15px] bg-[#F6D737] h-[25px] inline-block"></span>
           </div>
           <div className="my-2 ">
             <RiInformation2Line className="mr-2 inline text-[#999898]" />
             <span className="text-[14px] text-[#4e4d4d]">Infor</span>
           </div>
        </div>
        <div className="bg-[rgba(56,222,232,0.28)] pt-[20px] p-4">
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#6d6df1] inline-block mr-1 mb-[2px]"></span> <span>Unanswered</span> </div>
            <div className="text-[#3f3e3e] font-[500]">42%</div>
          </div>
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#6de8f1] inline-block mr-1 mb-[2px]"></span> <span>Converted</span> </div>
            <div className="text-[#3f3e3e] font-[500]">32%</div>
          </div>
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#eff16d] inline-block mr-1 mb-[2px]"></span> <span>Potential</span> </div>
            <div className="text-[#3f3e3e] font-[500]">22%</div>
          </div>
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#f16db6] inline-block mr-1 mb-[2px]"></span> <span>On hold</span> </div>
            <div className="text-[#3f3e3e] font-[500]">18%</div>
          </div>
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#f1b36d] inline-block mr-1 mb-[2px]"></span> <span>Declined</span> </div>
            <div className="text-[#3f3e3e] font-[500]">10%</div>
          </div>
          <div className=" flex items-center justify-between p-2 ">
            <div> <span className="h-[7px] w-[7px] rounded-full bg-[#6df195] inline-block mr-1 mb-[2px]"></span> <span>Pending</span> </div>
            <div className="text-[#3f3e3e] font-[500]">5%</div>
          </div>

          <div className="text-[17px] px-2 text-[#4b4a4a]">Progress</div>
          <div className="text-[30px] font-[600] text-[#242222]">+12.46%</div>
        </div>
        

    </div>
  )
}