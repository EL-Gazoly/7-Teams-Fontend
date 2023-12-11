import React from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image} from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import RolesSection from './RolesSection';

const RolesPage = () => {
  return (
    <>
    <ControlCard />
        <div className=' mt-[38px] flex flex-col items-center gap-y-7'>
            <div className=' flex items-center justify-center w-full'>
                <Button className=' w-[183px] h-11 py-[7px] px-4 rounded-md ' color='primary'>
                    <Image src={AddIcon} className='mt-1' />
                    <span>اضافة مسئول جديد</span>

                </Button>

            </div>

            <RolesSection />
        </div>

    </>
  )
}

export default RolesPage