import ControlCard from "../../Components/ContraolCard"
import AdminPic from '../../assets/settings/admin.svg'
import { Image } from "@nextui-org/react"
import { Link } from "react-router-dom"


const GeneralSettingsPage = () => {
  return (
    <div>
        <ControlCard />
        <div className=" mt-6 flex flex-row-reverse items-center justify-start gap-x-[22px] text-text-black font-medium">
          { localStorage.getItem('isAdmin') === 'true' || localStorage.getItem('isUsersAccess') === 'true' &&
            <Link to={"/settings/admins"} className="flex flex-col w-[217px] h-[158px] bg-light-bg rounded-lg items-center justify-center">
                    <div className=" w-[97px] h-[97px] bg-[#F4F5F7] rounded-full flex items-center justify-center ">
                        <Image src={AdminPic} width={64} height={64} />
                    </div>
                    <span >المسؤولون</span>

            </Link> }
           { localStorage.getItem('isAdmin') === 'true' || localStorage.getItem('isRolesAccess') === 'true' && 
            <Link to="/settings/roles" className="flex flex-col w-[217px] h-[158px] bg-light-bg rounded-lg items-center justify-center">
                    <div className=" w-[97px] h-[97px] bg-[#F4F5F7] rounded-full flex items-center justify-center ">
                        <Image src={AdminPic} width={64} height={64} />
                    </div>
                    <span >الأدوار</span>

            </Link> }


        </div>
     

    </div>
  )
}

export default GeneralSettingsPage