import React from 'react'
import Subjects from '../../../assets/Dashboard/subjects.svg'
import Admin from '../../../assets/Dashboard/admin.png'
import certificate from '../../../assets/Dashboard/certificates.svg'
import { Divider } from '@nextui-org/react'

type Props = {
    title: string,
    icon: string,
    descrption?: string
}

const ThridCardItem = ({title, icon, descrption} : Props) => {
    const getIcon = () => {
        switch (icon) {
            case 'subjects':
                return Subjects
            case 'admin':
                return Admin
            case 'certificate':
                return certificate
            
        }
    }
  return (
    <div className=' w-[200px] h-[122px] rounded-lg bg-white text-text-black p-3 flex flex-col gap-y-[10px] relative'>
        <span className=' text-xs font-bold'> {title} </span>
        <Divider className=' bg-[#E4E5E775] w-[187px] ' />
        <span className=' text-[32px] font-bold self-center mt-1 '>{descrption}</span>
        <div className=' absolute bottom-1 left-2'>
            <img src={getIcon()} alt="" />
        </div>
    </div>
  )
}

export default ThridCardItem
