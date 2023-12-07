import { Card, CardHeader, CardBody, CardFooter, Button, Image } from '@nextui-org/react'
import OnlineIcon from '../../assets/Landing/HeadsetCard/online.svg'
import HeadsetImage from '../../assets/Landing/HeadsetCard/headset.png'


const HeadsetCard = () => {
  return (
    <Card className=' w-[235.818px] h-[265.851px] rounded-[5.583px] overflow-hidden' 
    style={{
        boxShadow: "0px 2.225px 31.146px 0px rgba(0, 0, 0, 0.10);"
    }}
>
    <CardHeader className=' relative w-full h-[37px]'>
        <Image src={OnlineIcon} className='mt-3'/>
        <div className=' absolute top-0 right-2 flex w-[79.345px] h-[28.612px] px-[5.583px] py-[2.791px] items-center justify-center gap-x-[5.583px]
            rounded-b-[2.791px] bg-primary 
        '
            style={{
                boxShadow: "0px 2.791px 2.791px 0px rgba(0, 0, 0, 0.25)"
            }}
        >
                <span className=' text-[9.7px] font-semibold text-white'>Connected</span>
                <div className=' w-[6.979px] h-[6.979px] rounded-full bg-[#45FF5F]'/>
        </div>

    </CardHeader>

    <CardBody className='flex flex-col items-center gap-y-2 text-center overflow-hidden h-[182px]'>
            <Image src={HeadsetImage} />
            <div className=' flex items-center gap-x-[3px]'>
                <div className=' w-5 h-2 rounded-[1.4] bg-[#2DEC4C]'/>
                <div className=' w-5 h-2 rounded-[1.4] bg-[#2DEC4C]'/>
                <div className=' w-5 h-2 rounded-[1.4] bg-[#E8E2E2]'/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <span className='text-[#122333] text-sm font-semibold'>Headset 1</span>
                <span className=' text-[#A5A5A5] text-[8.5px]'>Meta Quest 2</span>
            </div>
          


    </CardBody>
    <CardFooter className='  h-[47px] bg-[#FDFAFA] flex items-center justify-center' >
            <Button className=' w-[61px] h-[20.24px] text-white flex text-[11px] items-center justify-center rounded-md bg-[#292D32]'>
                Select
            </Button>
    </CardFooter>
    
</Card>
  )
}

export default HeadsetCard