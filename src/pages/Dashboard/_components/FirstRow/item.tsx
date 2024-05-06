import React from 'react'
import UserIcon from '../../../../assets/Dashboard/user.svg'
import ClockIcon from '../../../../assets/Dashboard/clock.svg'
import SelectedCertificates from '../../../../assets/Dashboard/certificateIcon.svg'
import Mask from '../../../../assets/Dashboard/mask.png'

type CardItemProps = {
    title: string
    icon: string
    description: string
}
const CardItem = ({title, icon, description}: CardItemProps) => {
    const getIcon = () => {
        switch (icon) {
            case 'user':
                return UserIcon
            case 'activeUser':
                return UserIcon
            case 'clock':
                return ClockIcon
            case 'certificate':
                return SelectedCertificates
            default:
                return UserIcon
        }
    }

  return (
    <div className=' w-[240px] h-[135px] rounded-lg p-3 text-white relative'
        style={{
            backgroundImage: 
            icon === 'user' ? "linear-gradient(258deg, #3ABD4C  -0.65%, rgba(58, 189, 76, 0.48)  96.47%)" :
            icon === 'activeUser' ? "linear-gradient(258deg, #35DAF1 -0.65%, #06BBD3 96.47%)" :
            icon === 'clock' ? " linear-gradient(258deg, #60A8F3 -0.65%, #1E7FEE 96.47%)" :
            icon === 'certificate' && "linear-gradient(258deg, #FDA970 -0.65%, #F98535 96.47%)" 
        }}
    >
        <div className=' flex flex-col gap-y-3'>
            <div className=' flex items-center gap-x-10'>
                <span className=' text-sm font-bold w-[136px] ' >{title}</span>
                <div className=' w-10 h-10 rounded-full flex items-center justify-center bg-[#FFFFFF3D]'>
                    <img src={getIcon()} alt="" />
                </div>

            </div>

            <span className=' text-[28px]  font-bold self-center'>
                {description}
            </span>

        </div>

        <div className=' absolute top-0 left-0'>
            <img src={Mask} alt="" />
        </div>
        
      
    </div>
  )
}

export default CardItem
