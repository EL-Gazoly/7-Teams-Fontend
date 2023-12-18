import {useState} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image} from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import RolesSection from './RolesSection';

const RolesPage = () => {
  const [disabled, setDisabled] = useState(false)
  return (
    <>
    <ControlCard />
        <div className=' mt-[38px] flex flex-col items-center gap-y-7 pb-9'>
            <div className=' flex items-center justify-center w-full'>
                <Button className=' w-[183px] h-11 py-[7px] px-4 rounded-md ' color='primary'
                  onPress={() => setDisabled(!disabled)}
                >
                    <Image src={AddIcon} className='mt-1' />
                    <span>اضافة دور جديد</span>

                </Button>

            </div>

            <RolesSection disabled={disabled}/>

            <div className=' w-full items-center justify-center flex  mt-9'>
              <Button color='primary' className=' w-32 h-12 py-[6px] px-4 rounded-md'> حفظ </Button>
            </div>

        </div>

    </>
  )
}

export default RolesPage