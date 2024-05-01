export default function Button({type,shape,icon,children,className,color}) {
  // type : String
  // icon : Element
  // type primary -> color primary
  // type secondary -> color transperant
  // type light -> color #fff 
  // shape : big
  // shape : small
  return (
    <div className={(type === 'primary' ? 'bg-[#3E3AF2] border-[1px] border-[#3E3AF2] text ' : ' bg-transperant border-[1px] border-[#eee] ' ) + (className ? className : '') + ' flex items-center justify-center py-2 px-3 hover:opacity-60 hover:cursor-pointer text-[#fff] rounded' }>
       <div className={(shape === 'big' ? 'text-base ' : 'text-sm ') + (icon ? ' mr-3' : '') + ' font-medium ' + (color ? color : '')}>{children}</div>
       {icon}
    </div>
  )
}