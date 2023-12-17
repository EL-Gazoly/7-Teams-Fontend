import { Image, Button } from '@nextui-org/react'
export function Item({
  icon,
    title,
    setSelectedItem
}) {

    
  return <div className='  h-[83px] px-8 w-full flex items-center justify-between text-sm font-bold flex-row-reverse border border-b-[#E7E8E8] '>
                        <div className="flex flex-row-reverse items-center gap-x-6 z-0">
                                <Image src={icon} width={37} height={42} />
                                <span> {title} </span>
                        </div>
                        <Button className=' w-[95px] py-2 bg-primary-gradient text-white text-xs font-bold rounded-md'
                        onPress={ () => setSelectedItem({icon,title})}
                        >
                            ابدا التجربه
                        </Button>

                        
                        
                </div>;
}
  