import { UploadImage } from './UploadImage';
import React, {useState, useRef, useEffect} from 'react'
import ControlCard from '../../Components/ControlCard'
import { Button, Image } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import ChooseRole from './ChooseRole';
import { useMutation, useQuery } from '@apollo/client';
import { CreateUser, GetUsers } from '../../graphql/users';
import { getRoles } from '../../graphql/role';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';
import EyeSlashIcon from '../../assets/login/EyeSlashIcon.svg'
import EyeIcon from '../../assets/login/EyeIcon.svg'
import EyeDarkIcon from '../../assets/login/dark-eye.svg'
import EyeSlashDarkIcno from '../../assets/login/dark-eye-slash.svg'
import { useThemeStore } from '../../stores/ThemeStore';
import useTranslationStore from '@/stores/LanguageStore';

const CreateAdmin = () => {
    const {dark} =useThemeStore()
    const [selectedImage, setSelectedImage] = useState(null);
    const [sleectedFile, setSelectedFile] = useState(null);
    const [selectRole, setSelectRole] = useState({value : '' , label : ""});
    const [key, setKey] = useState(0)
    const [showPassword, setShowPassword] = useState(false);
    const [isIconshowed, setIsIconshowed] = useState('');
    const { loading: loadingRoles , error: errorRoles, data: roles } = useQuery(getRoles);

    const { language, getTranslation } = useTranslationStore();

    const [createUser, { loading: loadingCreateUser, error: errorCreateUser, data: dataCreateUser }] = useMutation(CreateUser,{
        refetchQueries : [{query : GetUsers}]
    });




    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();

    useEffect(()=>{
        if (dataCreateUser) {
            toast.success(getTranslation('adminCreated'))
            nameRef.current.value = ''
            emailRef.current.value = ''
            passwordRef.current.value = ''
            confirmPasswordRef.current.value= ''
            setSelectedImage(null)
            setSelectedFile(null)
            setKey(key+1)
        }
    }, [dataCreateUser])

    const handelSubmit = async () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const image = sleectedFile;
        const role = selectRole?.value;
        if( !name || !email || !password || !confirmPassword || !role ) return toast.error(getTranslation('fillAllFields'))
        if (password !== confirmPassword) return toast.error(getTranslation('passwordMismatch'))

        if (email.includes('admin')) return toast.error(getTranslation('adminEmailNotAllowed'))
        if (password.length < 6) return toast.error(getTranslation('passwordTooShort'))
        const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!EmailRegex.test(email)) return toast.error(getTranslation('enterValidEmail'))
        
        await createUser({
            variables : {
                data: {
                    name,
                    email,
                    hashedPassword : password,
                    roleId: role,
                },
                image : image ? image : null
            },
            
        
        })
    }

    let reactSelectOptions 
    if (loadingRoles) return <Loading />
    if (errorRoles) console.log(errorRoles.message)
    if (roles) {
         reactSelectOptions = roles.admin.roles.map(({ id, name }) => ({
            value: id,
            label: name
          }));
    }

    if (loadingCreateUser) return <Loading />
    if (errorCreateUser) toast.error(errorCreateUser.message)

   

  return (
    <div className=' pb-5'>
    <ControlCard icon="Settings" title='addNewAdmin' neasted={true}/>

    <div className=' mt-6 w-full h-[803px] bg-[#FDFDFE] dark:bg-primary-dark rounded-lg  pt-[75px] px-[113px]
        flex flex-col gap-y-12
    '
        style={{
            boxShadow : "0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)",
            backdropFilter : "blur(24.30045509338379px)",
            direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
    >
            <UploadImage   selectedImage={selectedImage} setSelectedImage={setSelectedImage} setSelectedFile={setSelectedFile}  key={key}  />
            <div className=' flex flex-col items-center gap-y-3'>
                <div className='flex items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px]  text-text-black dark:text-white'>
                        <label htmlFor="name" className=' mr-1' >{getTranslation('name')}</label>
                        <input type="text" className='  w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4  
                        ' placeholder={getTranslation('enterName')} ref={nameRef} />

                    </div>
                    <div className=' flex flex-col gap-y-[5px]  text-text-black dark:text-white'>
                        <label htmlFor="id"  className=' mr-1' >{getTranslation('email')}</label>
                        <input type="text" className='  w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4
                            
                        ' placeholder={getTranslation('enterEmail')} ref={emailRef} />

                    </div>

                </div>
                <div className='flex  items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px]  text-text-black dark:text-white'>
                        <label htmlFor="name" className=' mr-1' >{getTranslation('enterPassword')} </label>
                        <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4 flex items-center '>
                            {dark? 
                            <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                            :
                            <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                            }
                            <input type={showPassword? "text" : "password"} className='  flex-1  h-full bg-transparent 
                            ' placeholder={getTranslation('enterPassword')} ref={passwordRef} 
                                onChange={(e) => setIsIconshowed(e.target.value)}
                            />
                        </div>
                    
                    </div>
                    <div className=' flex flex-col gap-y-[5px]  text-text-black dark:text-white'>
                        <label htmlFor="id"  className=' mr-1' >{getTranslation('confirmPasswordHere')}</label>
                        <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4 flex items-center '>
                            {dark? 
                            <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                            :
                            <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                            }
                            <input type={showPassword? "text" : "password"} className='  flex-1  h-full bg-transparent
                            ' placeholder={getTranslation('confirmPasswordHere')} ref={confirmPasswordRef} 
                                onChange={(e) => setIsIconshowed(e.target.value)}
                            />
                        </div>

                    </div>

                </div>
            </div>
            <div className=' w-full items-center justify-center flex'>
           {roles && reactSelectOptions&&  <ChooseRole selectRole={selectRole} setSelectRole={setSelectRole} roles={reactSelectOptions} /> }
            </div>

            <div className=' w-full items-center justify-center flex mt-10'>
            <Button className=' w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 
                bg-[#4E5464]
            '
             onPress={handelSubmit}
            >
                <Image src={AddIcon} />
                <span className=' text-white text-sm font-bold '>{getTranslation('addNewAdminButton')}</span>

            </Button>
            </div>



       

        

    </div>


</div>
  )
}

export default CreateAdmin