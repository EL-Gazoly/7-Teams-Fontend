import { UploadImage } from './UploadImage';
import React, {useState, useRef, useEffect} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image } from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import ChooseRole from './ChooseRole';
import { useMutation, useQuery } from '@apollo/client';
import { CreateUser, GetUsers } from '../../graphql/users';
import { getRoles } from '../../graphql/role';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';


const CreateAdmin = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [sleectedFile, setSelectedFile] = useState(null);
    const [selectRole, setSelectRole] = useState({value : '' , label : ""});
    const [key, setKey] = useState(0)
    const { loading: loadingRoles , error: errorRoles, data: roles } = useQuery(getRoles);

    const [createUser, { loading: loadingCreateUser, error: errorCreateUser, data: dataCreateUser }] = useMutation(CreateUser,{
        refetchQueries : [{query : GetUsers}]
    });




    const nameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();

    useEffect(()=>{
        if (dataCreateUser) {
            toast.success('تم اضافة المسؤول بنجاح')
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
        if( !name || !email || !password || !confirmPassword || !role ) return toast.error(' برجاء ملئ جميع الحقول ')
        if (password !== confirmPassword) return toast.error(' كلمه المرور غير متطابقه ')

        if (email.includes('admin')) return toast.error(' برجاء اختيار ايميل لا يحتوي علي كلمه admin ')
        if (password.length < 6) return toast.error(' كلمه المرور يجب ان تكون اكبر من 8 حروف ')
        const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!EmailRegex.test(email)) return toast.error(' برجاء ادخال ايميل صحيح ')
        
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
    <ControlCard icon="Settings" title='  أضافة مسؤل جديد  ' neasted={true}/>

    <div className=' mt-6 w-full h-[803px] bg-[#FDFDFE] rounded-lg  pt-[75px] px-[113px]
        flex flex-col gap-y-12
    '
        style={{
            boxShadow : "0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)",
            backdropFilter : "blur(24.30045509338379px)"
        }}
    >
            <UploadImage   selectedImage={selectedImage} setSelectedImage={setSelectedImage} setSelectedFile={setSelectedFile}  key={key}  />
            <div className=' flex flex-col items-center gap-y-3'>
                <div className='flex flex-row-reverse items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="name" className=' mr-1' >الاسم</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4  
                        ' placeholder='اسم المسؤول هنا' ref={nameRef} />

                    </div>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="id"  className=' mr-1' > الايميل</label>
                        <input type="text" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4
                            
                        ' placeholder=' ايميل المسؤول هنا' ref={emailRef} />

                    </div>

                </div>
                <div className='flex flex-row-reverse items-center gap-x-[22px]'>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="name" className=' mr-1' >كلمة المرور</label>
                        <input type="password" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4
                            
                        ' placeholder=' كلمه المرور هنا' ref={passwordRef} />

                    </div>
                    <div className=' flex flex-col gap-y-[5px] text-right text-text-black'>
                        <label htmlFor="id"  className=' mr-1' >  تأكيد كلمة المرور</label>
                        <input type="password" className=' text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] px-4
                            
                        ' placeholder=' اعد كتابه كلمه المرور هنا'  ref={confirmPasswordRef}/>

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
                <span className=' text-white text-sm font-bold '>إضافة مسؤول جديد </span>

            </Button>
            </div>



       

        

    </div>


</div>
  )
}

export default CreateAdmin