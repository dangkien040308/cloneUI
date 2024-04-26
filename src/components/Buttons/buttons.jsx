export default function Button({type,shape,icon,children,className}) {
  // type : String
  // icon : Element
  // type primary -> color primary
  // type secondary -> color transperant
  // type light -> color #fff 
  // shape : big
  // shape : small
  return (
    <div className={(type === 'primary' ? 'bg-[#3E3AF2] border-[1px] border-[#3E3AF2] ' : ' bg-transperant border-[1px] border-[#eee] ' ) + (className ? className : '') + ' flex items-center justify-center py-2 px-3 hover:opacity-85 hover:cursor-pointer text-[#fff] rounded'  + (icon ? ' mr-3' : '')}>
       <div className={(shape === 'big' ? 'text-base ' : 'text-sm ') + ' font-medium'}>{children}</div>
       {icon}
    </div>
  )
}