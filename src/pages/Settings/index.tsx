import ControlCard from "../../Components/ControlCard";
import { useThemeStore } from "../../stores/ThemeStore";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import useTranslationStore from "@/stores/LanguageStore";
import roleIcon from "@/assets/settings/roles-icon.svg";
import adminstratorIcon from "@/assets/settings/adminstrator.svg";
import hoverCircle from "@/assets/settings/hover-circle.svg";
import { Divider } from "@nextui-org/react";

const GeneralSettingsPage = () => {
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();

  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUsersAccess = localStorage.getItem("isUsersAccess") === "true";
  const isRolesAccess = localStorage.getItem("isRolesAccess") === "true";

  return (
    <div className=" w-full h-full">
      <ControlCard
        icon="Settings"
        title={getTranslation("generalSettings")}
        neasted={false}
        info={getTranslation("settingsPageDescription")}
      />
      <div
        className=" w-full h-full mt-6 flex flex-wrap gap-x-16  items-center justify-around  text-text-black dark:text-white font-medium"
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {(isAdmin || isUsersAccess) && (
          <div className=" relative max-w-1/2 group/admin   max-h-[429px] h-full ">
            <Link
              to="/settings/admins"
              className="relative z-20 flex flex-col h-full group/admin   group-hover/admin:border-2 border-[#52D867] w-full  py-9   bg-light-bg dark:bg-primary-dark rounded-lg items-center justify-center"
            >
              <div className="  absolute top-[-55%] left-0">
                <img src={adminstratorIcon} alt="" />
              </div>
              <div className=" w-full flex flex-col gap-y-4 px-11 items-center mt-10">
                <h6 className=" text-white font-bold">
                  {getTranslation("admins")}
                </h6>
                <Divider className=" w-full mt-2.5" />
                <p className=" text-[13px] font-bold max-w-[322px] text-center leading-loose tracking-widest">
                  {getTranslation("adminsDescription")}
                </p>
              </div>
            </Link>
            <div className=" z-10 opacity-0 group-hover/admin:opacity-100 transition-all duration-300 absolute top-[-50%] left-0">
              <img src={hoverCircle} alt="" />
            </div>
          </div>
        )}
        {(isAdmin || isRolesAccess) && (
          <div className=" relative max-w-1/2 group/roles   max-h-[429px] h-full ">
            <Link
              to="/settings/roles"
              className="relative z-20 flex flex-col h-full   group-hover/roles:border-2 border-[#52D867] w-full  py-9   bg-light-bg dark:bg-primary-dark rounded-lg items-center justify-center"
            >
              <div className="  absolute top-[-55%] left-0">
                <img src={roleIcon} alt="" />
              </div>
              <div className=" w-full flex flex-col gap-y-4 px-11 items-center mt-10">
                <h6 className=" text-white font-bold leading-loose tracking-wide">
                  {getTranslation("roles")}
                </h6>
                <Divider className=" w-full mt-2.5" />
                <p className=" text-[13px] font-bold max-w-[322px] text-center leading-loose tracking-widest">
                  {getTranslation("rolesDescription")}
                </p>
              </div>
            </Link>
            <div className=" z-10 opacity-0 group-hover/roles:opacity-100 transition-all duration-300 absolute top-[-50%] left-0">
              <img src={hoverCircle} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralSettingsPage;
