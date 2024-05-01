import Button from "../../components/Buttons/buttons"
import Module from "../../components/Module/module"
import Widget1 from "../../components/Widget/widget1"
import Widget2 from "../../components/Widget/widget2"
import Widget3 from "../../components/Widget/widget3"
import { FaRegLightbulb } from "react-icons/fa"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { LuFileCheck } from "react-icons/lu"
import TabItem2 from "../../components/TabItem/tabitem2"
export default function Benefits() {
  const moduleList = [
    {
      item : <Widget1 /> ,
      type : 'right' ,
      mainText : 'Instant detailed insight.' ,
      extraText : 'No matter the size of your wallet' 
    } ,
    {
      item : <Widget2 /> ,
      type : 'left' ,
      mainText : 'Streamline comple business porcesses with AI.' ,
      extraText : 'Make faster, more infomed decisions.' 
    } ,
    {
      item : <Widget3 /> ,
      type : 'right' ,
      mainText : 'Effortlessly glance future outcomes.' ,
      extraText : 'Delight customers and boost customer confidence.' 
    }
  ]
  const tabItem2List = [
    {
      icon : <FaRegLightbulb />,
      title : 'Change style easily',
      des : 'For anyone to start building their real estate portfolio, no matter the size of your wallet.',
      className : 'border-[#36AB96] bg-[#15343E] text-[#36AB96] '
    },
    {
      icon : <RiMoneyDollarCircleLine />,
      title : 'Adapt your copy ',
      des : 'For anyone to start building their real estate portfolio, no matter the size of your wallet.',
      className : 'border-[#1456A0] bg-[#0C1E47] text-[#1456A0] '
    },
    {
      icon : <LuFileCheck />,
      title : 'Connect your domain',
      des : 'For anyone to start building their real estate portfolio, no matter the size of your wallet.',
      className : 'border-[#653AC6] bg-[#211047] text-[#653AC6] '
    } 

  ]
  return (
    <div className="p-[40px] bg-[#070119]">
        <div className="flex items-center justify-center flex-col w-[90%] mx-auto">
          <div className="bg-[#1D064F] py-1 px-2 rounded-lg flex items-center justify-center"> <span className=" mr-2 w-[6px] h-[6px] bg-[#DDD6FE] rounded-full block"></span> <span className="text-[12px] tracking-widest font-[700] text-[#DDD6FE]">BENEFIT</span>  </div>
          <div className="text-6xl font-medium text-[#F3F0F5] w-5/6 text-center my-6">Boost your business growth with style</div>
          <div className="text-base text-center text-[#605e61] font-[500] mb-5">Rocketsales is here to help you conquer the market with style.</div>
          <Button type='primary' shape='big' className='rounded-md px-6 shadow-md' >Get start for free </Button>
        </div>
        {moduleList.map((item,key) => (
          <Module mainText={item.mainText} extraText={item.extraText} type={item.type} item={item.item} key={key} />
        ))}
        <div className="px-[100px] py-[60px] mt-[20px]">
           <span className="text-4xl font-[500] text-[#EBE8EE] mb-[60px] block">All the futures you'll need</span>
           <div className="flex justify-start items-center">
              {
                tabItem2List.map((item,key) => (
                  <TabItem2 title={item.title} des={item.des} icon={item.icon} className={item.className} key={key}  />
                ))
              }
           </div>
        </div>
    </div>
  )
}