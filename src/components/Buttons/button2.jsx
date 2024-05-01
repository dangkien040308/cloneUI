
export default function Button2({type ,children,icon}){
  return (
    <div className={"px-5 py-2 w-[70%] h-[50%] mt-auto mb-3 border-2 flex items-center justify-between rounded-xl border-[#eee] hover:cursor-pointer hover:opacity-60 " + (type === 'primary' ? 'bg-[#7C3AED] text-[#fff]' : 'bg-[#fff] text-[#7C3AED]')}>
       <span className={"inline mr-2"}>{children}</span>
       <span className="inline">{icon}</span>
    </div>
  )
}