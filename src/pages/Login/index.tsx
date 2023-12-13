import { LOGINADMIN, LOGINUSER } from '../../graphql/login';
import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import './style.css';
import LoginIcon from '../../assets/login/logo.png';
import { Image, Button } from '@nextui-org/react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>(); 

    const navigate = useNavigate();

    const [loginAdmin, { data: adminData, loading: adminLoading, error: adminError }] = useMutation(LOGINADMIN);
    const [loginUser, { data: userData, loading: userLoading, error: userError }] = useMutation(LOGINUSER);

    const handleAdminLogin = () => {
        loginAdmin({
            variables: {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
        });
    };

    const handleUserLogin = () => {
        loginUser({
            variables: {
                email: emailRef.current.value,
                hashedPassword: passwordRef.current.value
            }
        });
    };

    const handleLogin = () => {
        if (emailRef.current.value.includes('admin')) {
            handleAdminLogin();
        } else {
            handleUserLogin();
        }
    };

    if(adminData || userData) {
        toast.success("Login sucess")
        if (adminData) document.cookie = `Authorization=${adminData?.loginAdmin?.token}; path=/; max-age=${30 * 24 * 60 * 60}`;
        if (userData) document.cookie = `Authorization=${userData?.loginUser?.token}; path=/; max-age=${30 * 24 * 60 * 60}`;
        navigate('/')
       
    }
    if(adminLoading|| userLoading) toast.loading("Loading...")
    if(adminError) toast.error(adminError.message )
    if (userError)  toast.error(userError.message)

    return (
        <div className='login-bg fixed inset-0 w-screen h-screen flex items-center justify-center'>
            <div className="w-[443px] h-[530px] rounded-xl bg-light-bg py-20 px-[84px]">
                <div className='flex flex-col w-[276.146px]'>
                    <div className='flex items-center justify-center'>
                        <Image src={LoginIcon} />
                    </div>
                    <div className='flex flex-col items-center mt-[55px]'>
                        <div className="email flex flex-col text-right gap-y-[5px]">
                            <label htmlFor="email" className='text-[#3D3C3C] text-xs'>البريد الاليكتروني</label>
                            <input type="email" placeholder='ادخل البريد الالكتروني' ref={emailRef}
                                className='text-right w-[276px] h-12 bg-[#E6E8EB66] placeholder:text-[#2929295C] text-xs rounded-md px-4' />
                        </div>
                        <div className="password mt-5 flex flex-col text-right gap-y-[5px]">
                            <label htmlFor="password" className='text-[#3D3C3C] text-xs'>كلمة المرور</label>
                            <input type="password" placeholder='ادخل كلمة المرور' ref={passwordRef}
                                className='text-right w-[276px] h-12 bg-[#E6E8EB66] placeholder:text-[#2929295C] text-xs rounded-md px-4' />
                        </div>
                    </div>
                    <div className='flex items-center justify-start mt-2'>
                        <span className='text-[#0404045C] text-[11px] font-medium underline'>هل نسيت كلمة المرور؟</span>
                    </div>
                    <Button className='mt-6 w-full h-[47.875px] rounded-md bg-primary-gradient text-white text-xs font-bold'
                        onPress={handleLogin}
                    >
                        تسجيل الدخول
                    </Button>
                    <div className='mt-2 w-full flex items-center justify-between'>
                        <span className='text-[#3D3C3C] text-xs font-medium underline'>هل تحتاج مساعدة؟</span>
                        <span className='text-[#3D3C3C] text-xs font-medium underline'>www.7-teams.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
