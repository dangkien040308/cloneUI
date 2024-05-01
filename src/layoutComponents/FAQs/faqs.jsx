import Accordion from "../../components/Accordion/accordion"

export default function FAQS() {
  const accordionList = [
    {
      title : 'Can I use Rocketsales Template for commerical purposes ?',
      des : 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your opinion) any later version. See more at http://www.gnu.org/licenses/gpl-3.0html'
    },
    {
      title : 'Read and understand Template restrictions'
    },
    {
      title : 'Accept the Template Usage Disclaimer'
    },
    {
      title : 'Disclaimer of Responsibility for Usage '
    },
    {
      title : 'Graphic Assets attribution Notice'
    },
    {
      title : 'How to contact the author of this Template'
    },
  ]
  return (
    <div className="bg-[#070018] px-[60px] py-[40px] relative">
       <div className="flex items-center justify-center flex-col w-[90%] mx-auto mt-8">
          <div className="bg-[#1D064F] py-1 px-2 rounded-lg flex items-center justify-center"> <span className=" mr-2 w-[6px] h-[6px] bg-[#DDD6FE] rounded-full block"></span> <span className="text-[12px] tracking-widest font-[700] text-[#DDD6FE]">FAQ</span>  </div>
          <div className="text-6xl font-medium text-[#F3F0F5] w-5/6 text-center my-6">We've all the answer</div>
        </div>
        <div className="mt-5 w-[70%] mx-auto border-b-2 border-[rgba(109,108,108,0.3)] pb-8">
          {accordionList.map((item,key) => (
            <Accordion title={item.title} des={item.des} key={key}  />
          ))}
        </div>
        <div className="mt-7 w-[30%] mx-auto">
           <span className="text-[#F3F0F5] font-[500] mr-4 inline-block">Still have more question? </span>
           <div className="px-3 py-2 rounded-xl text-[#F3F0F5] bg-[transperant] inline-block border-2 border-[#a3a3a3] hover:opacity-60 hover:cursor-pointer">Contact us</div>
        </div> 
        {/* <div className="w-[500px] h-[500px] -rotate-[150px] bg-[#130C42] blur-lg absolute left-3 bottom-5"></div> */}
    </div>
  )
}