import Carousel from "../../components/Carousel/carousel";
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import { FaAngleRight } from "react-icons/fa6";
export default function Stories() {
  const carouselList = [
    {
      logo : 'INDEO',
      number : '4X' ,
      des : 'Faster time to launch' ,
      name : 'Jerome Bell' ,
      job : 'Logistics Agent @ IBM' ,
      img : img1
    } ,
    {
      logo : 'Framer',
      number : '$4.5k' ,
      des : 'Redeuced cost to reach new leads' ,
      name : 'Dianne Russell' ,
      job : 'Data Analyst Lead @ Framer' ,
      img : img2
    } ,
    {
      logo : 'OpenAI',
      number : '18%' ,
      des : 'Traffic increase after 1 month' ,
      name : 'Brad McCoy' ,
      job : 'Branch Manager @ OpenAI' ,
      img : img3
    }
  ]
  return (
    <div className="mt-10 p-10">
        <div className="bg-[#F4F3FB] py-1 px-2 rounded-lg flex items-center justify-center w-max"> <span className=" mr-2 w-[6px] h-[6px] bg-[#7C3AED] rounded-full block"></span> <span className="text-[12px] tracking-widest font-[700] text-[#7C3AED]">CUSTOMER STORIES</span>  </div>
        <div className="font-[500] text-5xl mt-5 text-[#1D054F]">Move faster with Rocketsales</div>
        <div className="flex items-center justify-start mt-8 relative overflow-hidden">
           {carouselList.map(item => (
            <Carousel logo={item.logo} number={item.number} des={item.des} name={item.des} job={item.job} img={item.img} key={item.des} />
           ))}
           <div className="absolute w-[22%] h-[500px] bg-[#fff] rounded-[20px] blur-xl -right-2 -top-6"></div>
           <div className=" absolute top-[50%] right-[90px] -translate-y-[50%] rounded-full p-5 bg-[#eee] z-10 hover:cursor-pointer hover:opacity-70">  <FaAngleRight className="text-[18px]" /> </div>
        </div>
    </div>
  )
}