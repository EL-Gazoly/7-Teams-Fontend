import { useState, useRef, useEffect } from 'react';
import ControlCard from '@/Components/ControlCard';
import { Button, Image } from '@nextui-org/react';
import AddIcon from '@/assets/students/add.svg';
import { createStudent } from '@/graphql/students';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';
import Loading from '@/Components/Loading';
import { UploadImage } from './UploadImage';
import { getStudents } from '@/graphql/students';
import { GetStudents } from '@/graphql/reports';
import AddWithExcel from './_components/AddWithExcelModal';
import ChooseSchool from './_components/ChooseSchool';
import ChooseTeam from './_components/ChooseTeam';
import ChooseClass from './_components/ChooseClass';
import ChooseClassAlpha from './_components/ChooseClassAlpha';
import EyeSlashIcon from '@/assets/login/EyeSlashIcon.svg'
import EyeIcon from '@/assets/login/EyeIcon.svg'
import EyeDarkIcon from '@/assets/login/dark-eye.svg'
import EyeSlashDarkIcno from '@/assets/login/dark-eye-slash.svg'
import { useThemeStore } from '@/stores/ThemeStore';
import GroupIcon from '@/assets/Reports/group-dark.png'
import useTranslationStore from '@/stores/LanguageStore';
import { cn } from '@/lib/utils';
const PrimaryOptions = [
  { value: 'first', label: 'first_grade', image: GroupIcon },
  { value: 'second', label: 'second_grade', image: GroupIcon },
  { value: 'third', label: 'third_grade', image: GroupIcon },
  { value: 'fourth', label: 'fourth_grade', image: GroupIcon },
  { value: 'fifth', label: 'fifth_grade', image: GroupIcon },
  { value: 'sixth', label: 'sixth_grade', image: GroupIcon },]

const SecondaryOptions = [
  { value: 'first', label: 'first_grade', image: GroupIcon },
  { value: 'second', label: 'second_grade', image: GroupIcon },
  { value: 'third', label: 'third_grade', image: GroupIcon },
]
const CreateStudent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState<any>();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassAlpha, setSelectedClassAlpha] = useState('');
  const [isIconshowed, setIsIconshowed] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();
  const [createStudentMutation, { data, loading, error }] = useMutation(createStudent,{
    refetchQueries: [{ query: getStudents }, { query: GetStudents}],
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const notficationRef = useRef(false);

  const handleCreateStudent = async () => {
    notficationRef.current = true;
    const name = nameRef.current?.value;
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;
    const image = selectedFile;
    if (!name || !id || !password || !selectedSchool || !selectedTeam || !selectedClass || !selectedClassAlpha )
     return toast.error('Please fill all fields');
    if (password !== confirmPasswordRef.current?.value) return toast.error('Password does not match');
    await createStudentMutation({
      variables: {
        data: {
          name: name,
          facilityId: id,
          schoolId: selectedSchool.id,
          teamName: selectedTeam,
          classNumber: selectedClass,
          classalpha: selectedClassAlpha,
          password: password

        },
        image: image,
      }
    });
  };
  useEffect(() => {
      
        if (data) {
          if (notficationRef.current) {
          toast.success('Student created successfully');
          notficationRef.current = false;
          }
        }
        if (error) {
          if (notficationRef.current) {
          toast.error(error.message);
          notficationRef.current = false;
          }
        }
      
  }, [data, error]);
  if (loading) return <Loading />;

  return (
    <div className=' pb-8'>
      <ControlCard icon="Students" title={getTranslation("sidebar-students")} neasted={true} info='createStudentPageDescription'/>
      <div
        className='mt-6 w-full h-[703px] bg-[#FDFDFE] dark:bg-primary-dark rounded-lg pt-[70px] px-[113px] flex flex-col gap-y-12'
        style={{
          boxShadow: '0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(24.30045509338379px)',
        }}
      >
        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setSelectedFile={setSelectedFile}
        />
        <div className=' flex flex-col items-center gap-y-4'>
          <div className={cn('flex items-center gap-x-[22px]',
            language === 'ar' ? 'flex-row-reverse' : 'flex-row'
          )}>
      
            <input
              type='text'
              className={cn('w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4',
                language === 'ar' ? 'text-right' : 'text-left'
              )}
              placeholder={getTranslation('student_name_placeholder')}  
              ref={nameRef}
            />
        
            <input
              type='text'
              className={cn('w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4',
                language === 'ar' ? 'text-right' : 'text-left'
              )}
              placeholder={getTranslation('student_id_placeholder')}     
              ref={idRef}
            />
        
          </div>

          <div className=' flex flex-row-reverse items-center gap-x-7'>
            <ChooseSchool
              selectedSchool={selectedSchool}
              setSelectedSchool={setSelectedSchool}
            />
            <div className='flex flex-row-reverse items-center gap-x-4'>
              <ChooseTeam 
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
              />
              <ChooseClass 
                selectedClass={selectedClass}
                setSelectedClass={setSelectedClass}
                options={selectedTeam === 'Primary' ? PrimaryOptions : SecondaryOptions}
              />
            </div>

          </div>

          <div className=' flex flex-row-reverse justify-start w-full'>
              <ChooseClassAlpha 
                selectedClassAlpha={selectedClassAlpha}
                setSelectedClassAlpha={setSelectedClassAlpha}
              />
          </div>

          <div className=' flex flex-row-reverse items-center gap-x-7 mr-4'>
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center '>
                    {dark? 
                    <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                    :
                    <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                    }

                    <input type={showPassword? "text" : "password"} className={cn('flex-1 h-full bg-transparent',
                      language === 'ar' ? 'text-right' : 'text-left'
                    )}
                     placeholder={getTranslation('password_placeholder')} ref={passwordRef} 
                     onChange={(e) => setIsIconshowed(e.target.value)}
                    />
            </div>
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center '>
                    {dark? 
                    <img src={showPassword ? EyeDarkIcon :  EyeSlashDarkIcno} alt="" onClick={()=> setShowPassword(!showPassword)}   className={` cursor-pointer w-6 h-6 ${isIconshowed? 'block' : 'hidden'}`} />
                    :
                    <img src={showPassword ? EyeIcon :  EyeSlashIcon} alt="" onClick={()=> setShowPassword(!showPassword)}    className={` cursor-pointer ${isIconshowed? 'block' : 'hidden'}`}/>
                    }

                    <input type={showPassword? "text" : "password"} className={cn('flex-1  h-full bg-transparent',
                      language === 'ar' ? 'text-right' : 'text-left'
                    )}
                     placeholder={getTranslation('confirm_password_placeholder')} ref={confirmPasswordRef} 
                     onChange={(e) => setIsIconshowed(e.target.value)}
                    />
            </div>

          </div>

        </div>

        <div className='w-full items-center justify-center flex flex-row-reverse gap-x-7 mt-2'>
          <Button
            className='w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 bg-[#4E5464]'
            onPress={handleCreateStudent}
          >
            <Image src={AddIcon} />
            <span className='text-white text-sm font-bold'>{getTranslation('add_student_button')}</span>
          </Button>

          <AddWithExcel />
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
