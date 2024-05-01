import Card from "../../components/Card/card"
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineCancel } from "react-icons/md"
import { RiMoneyDollarCircleLine } from "react-icons/ri"

export default function Pricing(){
  const cardList = [
    {
      title : 'Essential' ,
      des : 'Suitable for inviduals' ,
      price : 'Free' ,
      sales : ['Sales volume up to 5k$/mo'] ,
      children : 'Create Free Account' ,
      special : false
    },
    {
      title : 'Intermediate' ,
      des : 'Suitable for team size of 2-49 people' ,
      price : '$29' ,
      time : '/mo',
      sales : ['Sales volume up to 5k$/mo','Return customer rate more than 2,5%'] ,
      children : 'Start Free Trial' ,
      special : true
    },
    {
      title : 'Expert' ,
      des : 'Suitable for teams size of 50+ people' ,
      price : '$49' ,
      time : '/mo',
      sales : ['Sales volume up to 5k$/mo','Return customer rate more than 2,5%','24/7 Customer support'] ,
      children : 'Start Free Trial' ,
      special : false
    }
  ]
  return (
    <div className="bg-[#FDFDFE] p-[50px]">
      <div className="flex items-center justify-center flex-col mt-[100px]">
         <div className="bg-[#F4F3FB] py-1 px-2 rounded-lg flex items-center justify-center"> 
            <span className=" mr-2 w-[6px] h-[6px] bg-[#7C3AED] rounded-full block"></span> 
            <span className="text-[12px] tracking-widest font-[700] text-[#7C3AED]">PRICING</span>  
          </div>
          <div className="text-6xl font-medium text-[#1D054F] w-5/6 text-center my-6">Plans for everybody</div>
          <div className="text-base text-center w-[35%] text-[#605e61] font-[500] mb-5">Start with any plan, it's free and always will be</div>
      </div> 
      <div className="mt-[40px] flex items-stretch justify-between">
        { cardList.map(item => (
          <Card time={item.time} title={item.title} 
          des={item.des} sales={item.sales} 
          key={item.price}
          special={item.special} price={item.price} children={item.children} />
        ))}
      </div>
      <div className="w-[50%] mx-auto mt-[50px] flex items-center justify-between">
         <div className="text-[#7C3AED]"><FaRegHeart className="inline mr-3 text-[20px] mb-1" /> <span className="font-[500] text-[16px]">Free trial</span> </div>
         <div className="text-[#7C3AED]"><MdOutlineCancel className="inline mr-3  text-[20px] mb-1" /> <span className="text-[16px] font-[500]">Cancel anytime</span> </div>
         <div className="text-[#7C3AED]"><RiMoneyDollarCircleLine className="inline mr-3  text-[20px] mb-1" /> <span className="text-[16px] font-[500]">Money back guarantee</span> </div>
      </div>
    </div>
  )
}