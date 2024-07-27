import ControlCard from "../../Components/ControlCard";
import AdminPic from '../../assets/settings/admin.svg';
import AdminDarkPic from '../../assets/settings/admin-dark.png';
import { useThemeStore } from "../../stores/ThemeStore";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import useTranslationStore from "@/stores/LanguageStore";

const GeneralSettingsPage = () => {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();

  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isUsersAccess = localStorage.getItem('isUsersAccess') === 'true';
  const isRolesAccess = localStorage.getItem('isRolesAccess') === 'true';

  return (
    <div>
      <ControlCard icon="Settings" title={getTranslation('generalSettings')} neasted={false} info="settingsPageDescription" />
      <div className="mt-6 flex  items-center justify-start gap-x-[22px] text-text-black dark:text-white font-medium"
        style={{ 
          direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        { (isAdmin || isUsersAccess) && (
          <Link to="/settings/admins" className="flex flex-col w-[217px] h-[158px] bg-light-bg dark:bg-primary-dark rounded-lg items-center justify-center">
            <div className="w-[97px] h-[97px] bg-[#F4F5F7] dark:bg-[#40454D] rounded-full flex items-center justify-center">
              <Image src={dark ? AdminDarkPic : AdminPic} width={64} height={64} radius="none" />
            </div>
            <span>{getTranslation('admins')}</span>
          </Link>
        )}
        { (isAdmin || isRolesAccess) && (
          <Link to="/settings/roles" className="flex flex-col w-[217px] h-[158px] bg-light-bg dark:bg-primary-dark rounded-lg items-center justify-center">
            <div className="w-[97px] h-[97px] bg-[#F4F5F7] dark:bg-[#40454D] rounded-full flex items-center justify-center">
              <Image src={dark ? AdminDarkPic : AdminPic} width={64} height={64} radius="none" />
            </div>
            <span>{getTranslation('roles')}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GeneralSettingsPage;