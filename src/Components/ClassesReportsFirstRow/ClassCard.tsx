import PrinterIcon from '../../assets/Reports/printer.png'
import { Button } from '@nextui-org/react'
import GroupIcon from '../../assets/Reports/StageReports/group.svg'
import { useParams } from 'react-router-dom'
const ClassCard = () => {
    const { id } = useParams()
  return (
    <div className=' w-[458px] h-[324px] py-[50px] px-[30px] flex flex-col gap-y-[26px] bg-white rounded-lg'>
        <div className=' w-full flex items-center justify-end '>
            <Button className=' bg-primary-gradient text-white w-[90px] h-[35px]'>
                <img src={PrinterIcon} alt="" />
                <span className=' text-xs'> طباعه </span>
            </Button>
        </div>
        
        <div className=' w-full flex items-center justify-center'>
            <div className=' w-[74px] h-[74px] bg-[#CFCFD7] rounded-full flex items-center justify-center border border-[#2DEC4C]'>
                <img src={GroupIcon} alt="" />

            </div>
        </div>

        <div className=' w-full flex items-center justify-center mr-3'>
         <span className=' w-[134px] text-2xl font-bold text-center ml-7'> {
                id === 'fad58648-c419-4701-985a-b8707446074b' ? 'الصف الأول المتوسط' : 
                id === '42e9c8a6-7c33-4ada-8215-65465a495912' ? 'الصف الثاني المتوسط' :
                id === 'd401bb95-d5ad-4b34-ae7a-e5db984f2b14' ? 'الصف الثالث المتوسط' :
                id === '65d2322b-1d47-42b1-8739-f10a83378355' ? 'الصف الأول الثانوي' :
                id === '056e7db3-66c1-450d-99b6-50c8206efc78' ? 'الصف الثاني الثانوي' :
                id === '5b9b06d4-2278-476c-a6f2-02dd366b18ef' ? 'الصف الثالث الثانوي' : ''
         }</span>

        </div>
      
    </div>
  )
}

export default ClassCard
