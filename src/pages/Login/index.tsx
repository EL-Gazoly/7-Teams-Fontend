import { LOGINADMIN, LOGINUSER } from "../../graphql/login";
import { useMutation } from "@apollo/client";
import { useRef, useState, useEffect } from "react";
import "./style.css";
import LoginIcon from "../../assets/login/logo.png";
import LightLoginIcon from "../../assets/login/dark-logo.svg";
import { Image, Button } from "@nextui-org/react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "../../assets/ControlCard/language.svg";
import EyeSlashIcon from "../../assets/login/EyeSlashIcon.svg";
import EyeIcon from "../../assets/login/EyeIcon.svg";
import EyeDarkIcon from "../../assets/login/dark-eye.svg";
import EyeSlashDarkIcno from "../../assets/login/dark-eye-slash.svg";
import { useThemeStore } from "../../stores/ThemeStore";
import useTranslationStore from "@/stores/LanguageStore";

const LoginPage = () => {
  const { dark } = useThemeStore();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [showPassword, setShowPassword] = useState(false);
  const [isIconshowed, setIsIconshowed] = useState("");

  const { language, setLanguage, getTranslation } = useTranslationStore();

  const navigate = useNavigate();

  const [
    loginAdmin,
    { data: adminData, loading: adminLoading, error: adminError },
  ] = useMutation(LOGINADMIN);
  const [
    loginUser,
    { data: userData, loading: userLoading, error: userError },
  ] = useMutation(LOGINUSER);

  useEffect(() => {
    if (adminError || userError) {
      const errorMessage = adminError?.message || userError?.message;
      if (errorMessage === "Invalid password") {
        toast.error(getTranslation("errorInvalidPassword"));
      } else if (errorMessage === "Not Authorised!") {
        toast.error(getTranslation("errorInvalidEmail"));
      } else {
        toast.error(getTranslation("errorGeneric"));
        console.log(errorMessage);
      }
    }
  }, [adminError, userError]);

  const handleAdminLogin = () => {
    loginAdmin({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
  };

  const handleUserLogin = () => {
    loginUser({
      variables: {
        email: emailRef.current.value,
        hashedPassword: passwordRef.current.value,
      },
    });
  };

  const handleLogin = () => {
    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error(getTranslation("fillFieldsError"));
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailRef.current.value)) {
      toast.error(getTranslation("invalidEmailError"));
      return;
    }
    if (emailRef.current.value.includes("admin")) {
      handleAdminLogin();
    } else {
      handleUserLogin();
    }
  };

  useEffect(() => {
    if (adminData || userData) {
      toast.success(getTranslation("loginSuccess"));
      const token = adminData?.loginAdmin?.token || userData?.loginUser?.token;
      localStorage.setItem("sevenTeamAuth", token);
      if (adminData) {
        localStorage.setItem("isAdmin", "true");
      } else {
        const roles = userData?.loginUser?.roles;
        Object.keys(roles).forEach((role) => {
          localStorage.setItem(`is${role}Access`, roles[role]);
        });
      }
      navigate("/headsets");
    }
  }, [adminData, userData]);

  useEffect(() => {
    if (adminLoading || userLoading)
      toast.loading(getTranslation("loadingMessage"));
  }, [adminLoading, userLoading]);

  return (
    <div className="login-bg fixed inset-0 w-screen h-screen flex items-center justify-center">
      <div
        className="w-[443px] h-[530px] relative rounded-xl bg-light-bg dark:bg-primary-dark py-20 px-[84px]"
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        <Button
          isIconOnly
          className="absolute top-5 right-6 w-11 h-10 rounded-[14px] flex items-center justify-center cursor-pointer bg-secondary"
          onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        >
          <img src={LanguageIcon} width={21} height={21} />
        </Button>
        <div className="flex flex-col w-[276.146px]">
          <div className="flex items-center justify-center">
            <Image src={dark ? LightLoginIcon : LoginIcon} />
          </div>
          <div className="flex flex-col items-center mt-[55px]">
            <div className="email flex flex-col  gap-y-[5px]">
              <label
                htmlFor="email"
                className="text-[#3D3C3C] dark:text-white text-xs"
              >
                {getTranslation("emailLabel")}
              </label>
              <input
                autoFocus
                type="email"
                placeholder={getTranslation("emailPlaceholder")}
                ref={emailRef}
                className=" w-[276px] h-12 bg-[#E6E8EB66] placeholder:text-[#2929295C] dark:text-white dark:placeholder:text-white/80 text-xs rounded-md px-4"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    passwordRef.current.focus();
                  }
                }}
              />
            </div>
            <div className="password mt-5 flex flex-col  gap-y-[5px]">
              <label
                htmlFor="password"
                className="text-[#3D3C3C] dark:text-white text-xs"
              >
                {getTranslation("passwordLabel")}
              </label>
              <div className="w-[276px] h-12 bg-[#E6E8EB66]  flex items-center justify-between px-4 rounded-md">
                {dark ? (
                  <img
                    src={showPassword ? EyeDarkIcon : EyeSlashDarkIcno}
                    alt=""
                    onClick={() => setShowPassword(!showPassword)}
                    className={`cursor-pointer w-6 h-6 ${
                      isIconshowed ? "block" : "hidden"
                    }`}
                  />
                ) : (
                  <img
                    src={showPassword ? EyeIcon : EyeSlashIcon}
                    alt=""
                    onClick={() => setShowPassword(!showPassword)}
                    className={`cursor-pointer ${
                      isIconshowed ? "block" : "hidden"
                    }`}
                  />
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={getTranslation("passwordPlaceholder")}
                  ref={passwordRef}
                  className="flex-1 h-full bg-transparent  placeholder:text-[#2929295C] text-text-black dark:text-white dark:placeholder:text-white/80 text-xs"
                  onChange={(e) => setIsIconshowed(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-2">
            <span className="text-[#0404045C] dark:text-white text-[11px] font-medium underline">
              {getTranslation("forgotPassword")}
            </span>
          </div>
          <Button
            className="mt-6 w-full h-[47.875px] rounded-md bg-primary-gradient text-white text-xs font-bold"
            onPress={handleLogin}
          >
            {getTranslation("loginButton")}
          </Button>
          <div className="mt-2 w-full flex items-center justify-between">
            <span className="text-[#3D3C3C] dark:text-white text-xs font-medium underline">
              {getTranslation("needHelp")}
            </span>
            <a
              href="https://www.7teamstech.com"
              target="_black"
              className="text-[#3D3C3C] dark:text-white text-xs font-medium underline"
            >
              {getTranslation("websiteLink")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
