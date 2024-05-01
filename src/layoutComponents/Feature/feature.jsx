import Button from "../../components/Buttons/buttons";
import Progress from "../../components/Progress/progress";
import TabItem from "../../components/TabItem/tabitem";
import Widget3 from "../../components/Widget/widget3";

export default function Feature() {
  const TabItems = [
    {
      title : 'Customise it to your likings',
      des : 'Wheter you have a team of 2 or 200, out shared team inboxes keep everyone on the same page and in the loop.',
      isActive : true
    } ,
    {
      title : 'Adapts to every type of business',
      des : 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      isActive : false
    },
    {
      title : 'Publish in a breeze, enjoy timelife',
      des : 'Measure what matters with Untitleds easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks. ',
      isActive : false
    }
  ]
  return (
    <div className=" p-5 bg-[#FAF8FD] border-b-2 border-[#777676]">
      <div className="flex items-center justify-center flex-col mt-[100px]">
         <div className="bg-[#F4F3FB] py-1 px-2 rounded-lg flex items-center justify-center"> <span className=" mr-2 w-[6px] h-[6px] bg-[#7C3AED] rounded-full block"></span> <span className="text-[12px] tracking-widest font-[700] text-[#7C3AED]">FEATURES</span>  </div>
          <div className="text-6xl font-medium text-[#1D054F] w-5/6 text-center my-6">Get your site launched first, without compormise</div>
          <div className="text-base text-center w-[35%] text-[#605e61] font-[500] mb-5">Rocketsales is designed with your goals in mind, making design and publishing a no-brainer. So you can focus on what matters, your business strategy.</div>
          <Button type='secondary' shape='big' className='rounded-md px-6 shadow-md' color='text-[#7C3AED]' >Get start for free </Button>
      </div> 
      <div className="flex items-center justify-between mt-[70px] p-10">
        <div className="flex items-start justify-start flex-col w-[45%]">
          {TabItems.map(item => (
            <TabItem title={item.title} isActive={item.isActive} des={item.des} key={item.title} />
          ))}
        </div>
         <div className="relative rounded-xl bg-gradient-to-r from-[#e9c44c] to-[#e23276] w-[50%] h-[600px]">
            <Progress className='absolute top-5 left-8' />
            <Widget3  className='absolute bottom-5 right-7 w-[50%] shadow-none' />
         </div>
      </div>
    </div>
  )
}