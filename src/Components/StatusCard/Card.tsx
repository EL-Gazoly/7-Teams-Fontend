import React from 'react'
import UserIcon from '../../assets/Reports/StudentReports/user.svg'
import CertificateIcon from '../../assets/Reports/StudentReports/certificate.svg'
import ReportsIcon from '../../assets/Reports/StudentReports/reports.svg'
import ClockIcon from '../../assets/Reports/StudentReports/clock.svg'
import Mask from '../../assets/Dashboard/mask.png'
import useTranslationStore from '@/stores/LanguageStore'
import { cn } from '@/lib/utils'

type Props ={
    title: string
    icon: string
    description: string
}

const Card = ({title, icon, description}: Props) => {
    const { language } = useTranslationStore();
    const getIcon = () => {
        switch (icon) {
            case 'user':
                return UserIcon
            case 'reports':
                return ReportsIcon
            case 'clock':
                return ClockIcon
            case 'certificate':
                return CertificateIcon
            default:
                return UserIcon
        }
    }
  return (
    <div className=' w-[240px] h-[135px] rounded-lg p-3 text-white relative'
        style={{
            backgroundImage: 
            icon === 'user' ? "linear-gradient(258deg, #3ABD4C  -0.65%, rgba(58, 189, 76, 0.48)  96.47%)" :
            icon === 'reports' ? "linear-gradient(258deg, #35DAF1 -0.65%, #06BBD3 96.47%)" :
            icon === 'clock' ? " linear-gradient(258deg, #60A8F3 -0.65%, #1E7FEE 96.47%)" :
            icon === 'certificate' && "linear-gradient(258deg, #FDA970 -0.65%, #F98535 96.47%)" 
        }}
    >
        <div className=' flex flex-col gap-y-3 w-full'>
            <div className={cn(' flex items-center w-full justify-between ',
                language === 'ar' ? 'flex-row' : 'flex-row-reverse'
            )}>
                <span className=' text-[13px] font-bold ' > {title}</span>
                <div className=' w-10 h-10 rounded-full flex items-center justify-center bg-white/25'>
                    <img src={getIcon()} alt="" />
                </div>

            </div>

            <span className=' text-[28px]  font-bold self-center' 
                style={{
                    direction: language === 'ar' ? 'rtl' : 'ltr',
                }}
            >{description} </span>

        </div>

        <div className=' absolute top-0 left-0'>
            <img src={Mask} alt="" />
        </div>
      
    </div>
  )
}

export default Card
