import { Image } from '@nextui-org/react'
import SelectExpriment from './SelectExpriment'
export function Item({
  icon,
    title,
    subject,
    setSelectedItem,
    setSelectedSubject,
    selectedSubject
}) {

    
  return <div className='  h-[83px] px-8 w-full flex items-center justify-between text-sm font-bold flex-row-reverse border border-b border-[#E7E8E8]  dark:border-dark-bg '
    onClick={() => setSelectedSubject(subject)(subject)}
    style={{
        cursor: 'pointer'
    }}
  >
                        <div className="flex flex-row-reverse items-center gap-x-6 z-0">
                                <Image src={icon} width={37} height={42} />
                                <span> {title} </span>
                        </div>
                      
                      <SelectExpriment setSelectItem={setSelectedItem}
                        selectedSubject={selectedSubject}
                        subject={subject}
                        setSelectedSubject={setSelectedSubject}
                      />

                        
                        
                </div>;
}
  