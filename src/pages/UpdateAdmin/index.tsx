import { UploadImage } from './UploadImage';
import React, {useState, useRef, useEffect} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image, user } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import ChooseRole from './ChooseRole';
import { useMutation, useQuery } from '@apollo/client';
import { updateUser, GetUsers } from '../../graphql/users';
import { getRoles } from '../../graphql/role';
import { getUser } from '../../graphql/users';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';
import EyeSlashIcon from '../../assets/login/EyeSlashIcon.svg'
import EyeIcon from '../../assets/login/EyeIcon.svg'
import EyeDarkIcon from '../../assets/login/dark-eye.svg'
import EyeSlashDarkIcno from '../../assets/login/dark-eye-slash.svg'
import { useThemeStore } from '../../stores/ThemeStore';

const UpdateAdmin = () => {
    const {dark} = useThemeStore()
    const { id } = useParams<{id : string}>();

    const [selectedImage, setSelectedImage] = useState(null);
    const [sleectedFile, setSelectedFile] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isIconshowed, setIsIconshowed] = useState('');

    const [selectRole, setSelectRole] = useState({value : '' , label : ""});
    const { loading: loadingRoles , error: errorRoles, data: roles } = useQuery(getRoles);
    const { loading: loadingUser , error: errorUser, data: dataUser } = useQuery(getUser, {
        variables : {
            userId : id
        }
    });
  

    const [update, { loading: loadingUpdateUser, error: errorUpdateUser, data: dataUpdateUser }] = useMutation(updateUser, {
        refetchQueries : [{query : getUser , variables : {userId : id}}, GetUsers ]
    });

    useEffect(() => {
        if (dataUser) {
            setSelectRole(prevState => ({
                ...prevState,
                value: dataUser.user.roles.id,
                label: dataUser.user.roles.name
            }));
    
            if (dataUser.user.imageUrl) {
                setSelectedImage(`${import.meta.env.VITE_API_URL}${dataUser.user.imageUrl}`);
            }
            else {
                setSelectedImage(null);
                console.log('no image')
            }
        }
        if (dataUpdateUser) {
            if (notifcationRef.current) return;
            toast.success(' تم تعديل المسؤول بنجاح ')
            notifcationRef.current = true;
        }
    
    }, [dataUser, dataUpdateUser]);


    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();
    const notifcationRef = useRef(false);


    const handelSubmit = async () => {
        notifcationRef.current = false;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef?.current.value;
        const confirmPassword = confirmPasswordRef?.current.value;
        const image = sleectedFile ? sleectedFile : null;
        const role = selectRole ? selectRole.value : null;
        console.log(password, confirmPassword)
        if( !name || !email || role===null ) return toast.error(' برجاء ملئ جميع الحقول ')
        if (password !== confirmPassword) return toast.error(' كلمه المرور غير متطابقه ')
        if (email.includes('admin')) return toast.error( ' برجاء اختيار ايميل لا يحتوي علي كلمه admin')
        if (password && password.length < 6) return toast.error(' كلمه المرور يجب ان تكون اكبر من 8 حروف ')
        const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!EmailRegex.test(email)) return toast.error(' برجاء ادخال ايميل صحيح ')
        console.log(dataUser.user)
    if (!password && !confirmPassword) 
       { 
            console.log('no password')
            await update({
                variables : {
                    updateUserId: id,
                    data: {
                        name,
                        email,
                        roleId: role,
                    },
                    image : image ? image : null,
                    removeImage : dataUser.user.imageUrl && !selectedImage ? true : false
                },
            })}
    else if (password && confirmPassword && password === confirmPassword)
    {
        await update({
            variables : {
                updateUserId: id,
                data: {
                    name,
                    email,
                    hashedPassword : password,
                    roleId: role,
                },
                image : image ? image : null,
                removeImage : dataUser.user.imageUrl && !selectedImage ? true : false
            },
        })
    }

    }

    let reactSelectOptions 
    if (loadingRoles || loadingUser || loadingUpdateUser ) return <Loading />
    if (errorRoles) {
        console.log(errorRoles)
    }
    if (errorUser) {
        console.log(errorUser)
    }
    if (roles) {
         reactSelectOptions = roles.admin.roles.map(({ id, name }) => ({
            value: id,
            label: name
          }));
    }


    if (errorUpdateUser) toast.error(errorUpdateUser.message)

    

   
  return (
    <div className=' pb-5'>
    <ControlCard icon="Settings" title='  أضافة مسؤل جديد  ' neasted={true}/>
    <div className=' mt-6 w-full h-[803px] bg-[#FDFDFE] dark:bg-primary-dark rounded-lg  pt-[75px] px-[113px]
        flex flex-col gap-y-12
    '
        style={{
            boxShadow : "0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)",
            backdropFilter : "blur(24.30045509338379px)"
        }}
    >
            <UploadImage   selectedImage={selectedImage} setSelectedImage={setSelectedImage} setSelectedFile={setSelectedFile}   />
            <div className=' flex flex-col items-center gap-y-3'>
                <div className='flex flex-row-reverse items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
                        <label htmlFor="name" className=' mr-1' >الاسم</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4  
                        ' placeholder='اسم الطالب هنا' ref={nameRef}
                        defaultValue={dataUser && dataUser.user.name}
                        />

                    </div>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
                        <label htmlFor="id"  className=' mr-1' > الايميل</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4
                            
                        ' placeholder=' ايميل المسؤول هنا' ref={emailRef} 
                        defaultValue={dataUser && dataUser.user.email}
                        />

                    </div>

                </div>
                <div className='flex flex-row-reverse items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
                        <label htmlFor="name" className=' mr-1' >كلمة المرور</label>
                         <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4 flex items-center '>
                            {dark? 
                            <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                            :
                            <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                            }

                            <input type={showPassword? "text" : "password"} className=' text-right flex-1  h-full bg-transparent
                            ' placeholder=' كلمه المرور هنا' ref={passwordRef} 
                                onChange={(e) => setIsIconshowed(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black dark:text-white'>
                        <label htmlFor="id"  className=' mr-1' >  تأكيد كلمة المرور</label>
                        <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-[#F0F2F4]/[0.13] px-4 flex items-center '>
                        {dark? 
                            <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                            :
                            <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                            }
                            <input type={showPassword? "text" : "password"} className=' text-right flex-1  h-full bg-transparent
                            ' placeholder=' كلمه المرور هنا' ref={confirmPasswordRef} 
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
                <span className=' text-white text-sm font-bold '> تعديل المسؤول  </span>

            </Button>
            </div>



       

        

    </div>


    </div>
  )
}

export default UpdateAdmin