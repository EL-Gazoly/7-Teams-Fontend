import React from 'react'
import LabPic from '../../../assets/UserLibrary/lab.png'
import Doctorpic from '../../../assets/UserLibrary/doctor.png'
import VrPic from '../../../assets/UserLibrary/vr.png'
import HomePic from '../../../assets/UserLibrary/home.png'
import ScreenShotIcon from '../../../assets/HeadsetProfile/screenshot.png'
import { Link } from 'react-router-dom'
const Pictures = [
    {id: 1, Image : LabPic},
    {id: 2, Image : Doctorpic},
    {id: 3, Image : VrPic},
    {id: 4, Image : HomePic}
]


const PicturesCard = () => {
  return (
   
    <Link to="/pictures/11" className='pic-vdieo-card bg-white dark:bg-white/10 py-6 px-[26px] flex flex-col gap-y-[14px]'>
    <div className=' flex items-center gap-x-4'>
        <div className=' w-11 h-11 bg-[#185AEA] rounded-full flex items-center justify-center'>
            <img src={ScreenShotIcon} alt="" />
        </div>
        <span className=' text-lg font-medium'>(12) Screenshot</span>
    </div>
    <div>
        <div className='library-card-grid'>
            {Pictures.map((item) => (
                <div>
                    <img src={item.Image} alt="" />
                </div>
            ))}

        </div>
    </div>

</Link>
    
  )
}

export default PicturesCard