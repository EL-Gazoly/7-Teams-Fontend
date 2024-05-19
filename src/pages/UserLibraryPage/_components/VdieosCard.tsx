
import React from 'react'
import LabPic from '../../../assets/UserLibrary/lab.png'
import Doctorpic from '../../../assets/UserLibrary/doctor.png'
import VrPic from '../../../assets/UserLibrary/vr.png'
import HomePic from '../../../assets/UserLibrary/home.png'
import ScreenRecoard from '../../../assets/HeadsetProfile/recoard.png'
import PlayIcon from '../../../assets/UserLibrary/play.png'
import { Link } from 'react-router-dom'

const Vdieos = [
    {id: 1, Image : LabPic},
    {id: 2, Image : Doctorpic},
    {id: 3, Image : VrPic},
    {id: 4, Image : HomePic}
]

const VdieosCard = () => {
  return (
    <Link to="/videos/11" className='pic-vdieo-card bg-white dark:bg-white/10 py-6 px-[26px] flex flex-col gap-y-[14px]'>
            <div className=' flex items-center gap-x-4'>
                <div className=' w-11 h-11 bg-[#FF1F64] rounded-full flex items-center justify-center'>
                    <img src={ScreenRecoard} alt="" />
                </div>
                <span className=' text-lg font-medium'>(12) Screen Record</span>
            </div>
            <div>
                <div className='library-card-grid'>
                    {Vdieos.map((item) => (
                        <div className=' relative'>
                            <img src={item.Image} alt="" />
                            <div className=' absolute top-[40%] left-[45%] w-11 h-11 bg-[#FF1F64] rounded-full flex items-center justify-center'>
                                <img src={PlayIcon} alt="" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

    </Link>
  )
}

export default VdieosCard