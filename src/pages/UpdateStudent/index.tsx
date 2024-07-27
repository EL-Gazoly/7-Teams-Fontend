import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'sonner';
import Loading from '../../Components/Loading';
import ControlCard from '../../Components/ControlCard';
import { Button, Image } from '@nextui-org/react';
import DarkEditIcon from '../../assets/settings/dark/vuesax/linear/user-edit.svg';
import { UploadImage } from './UploadImage';
import { getStudent, updateStudent } from '../../graphql/students';
import { GetStudents } from '../../graphql/reports';
import ChooseSchool from './ChooseSchool';
import ChooseTeam from './ChooseTeam';
import ChooseClass from './ChooseClass';
import ChooseClassAlpha from './ChooseClassAlpha';
import { useThemeStore } from '../../stores/ThemeStore';
import useTranslationStore from '../../stores/LanguageStore';
import EyeSlashIcon from '../../assets/login/EyeSlashIcon.svg';
import EyeIcon from '../../assets/login/EyeIcon.svg';
import EyeDarkIcon from '../../assets/login/dark-eye.svg';
import EyeSlashDarkIcon from '../../assets/login/dark-eye-slash.svg';
import GroupIcon from '../../assets/Reports/group-dark.png';
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg';
import { cn } from '@/lib/utils';


const UpdateStudent = () => {
  const { id: studentId } = useParams();
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassAlpha, setSelectedClassAlpha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { data: studentData, loading: studentLoading } = useQuery(getStudent, { variables: { studentId } });
  const [updateStudentMutation, { data, loading, error }] = useMutation(updateStudent, { 
    refetchQueries: [{ query: getStudent, variables: { studentId } }, GetStudents]
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const notificationRef = useRef(false);

  const handleCreateStudent = async () => {
    notificationRef.current = true;
    const name = nameRef.current?.value;
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;
    const image = selectedFile;
    if (!name || !id || !selectedSchool || !selectedTeam || !selectedClass || !selectedClassAlpha) {
      return toast.error(getTranslation('pleaseFillAllFields'));
    }
    if (password !== confirmPasswordRef.current?.value) {
      return toast.error(getTranslation('passwordsDoNotMatch'));
    }
    const variables = {
      updateStudentId: studentId,
      data: {
        name,
        facilityId: id,
        schoolId: selectedSchool.id,
        teamName: selectedTeam,
        classNumber: selectedClass,
        classalpha: selectedClassAlpha,
        ...(password && { password }),
      },
      image,
      removeImage: studentData.student.imageUrl && !selectedImage,
    };
    await updateStudentMutation({ variables });
  };

  useEffect(() => {
    if (data) {
      if (notificationRef.current) {
        toast.success(getTranslation('studentUpdatedSuccess'));
        notificationRef.current = false;
      }
    }
    if (error) {
      if (notificationRef.current) {
        toast.error(getTranslation('errorUpdatingStudent'));
        notificationRef.current = false;
      }
    }
  }, [data, error]);

  useEffect(() => {
    if (studentData) {
      setSelectedImage(studentData.student.imageUrl ? `${import.meta.env.VITE_API_URL}${studentData.student.imageUrl}` : null);
      setSelectedSchool({
        value: studentData.student.team.school.name,
        label: studentData.student.team.school.name,
        image: LightSchoolIcon,
        id: studentData.student.team.school.schoolId,
      });
      setSelectedTeam(studentData.student.team.name);
      setSelectedClass(studentData.student.class.number);
      setSelectedClassAlpha(studentData.student.classalpha);
    }
  }, [studentData]);

  if (loading || studentLoading) return <Loading />;

  const PrimaryOptions = [
    { value: 'first', label: getTranslation('firstGradePrimary'), image: GroupIcon },
    { value: 'second', label: getTranslation('secondGradePrimary'), image: GroupIcon },
    { value: 'third', label: getTranslation('thirdGradePrimary'), image: GroupIcon },
    { value: 'fourth', label: getTranslation('fourthGradePrimary'), image: GroupIcon },
    { value: 'fifth', label: getTranslation('fifthGradePrimary'), image: GroupIcon },
    { value: 'sixth', label: getTranslation('sixthGradePrimary'), image: GroupIcon },
  ];
  
  const SecondaryOptions = [
    { value: 'first', label: getTranslation('firstGradeSecondary'), image: GroupIcon },
    { value: 'second', label: getTranslation('secondGradeSecondary'), image: GroupIcon },
    { value: 'third', label: getTranslation('thirdGradeSecondary'), image: GroupIcon },
  ];

  return (
    <div className='pb-8'>
      <ControlCard icon="Students" title={getTranslation('students')} neasted={true} />
      <div className='mt-6 w-full h-[703px] bg-[#FDFDFE] dark:bg-primary-dark rounded-lg pt-[70px] px-[113px] flex flex-col gap-y-12'
        style={{
          boxShadow: '0px 3.812px 99.108px 0px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(24.30045509338379px)',
        }}>
        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setSelectedFile={setSelectedFile}
        />
        <div className='flex flex-col items-center gap-y-4'>
          <div className='flex  items-center gap-x-[22px]'>
            <input
              type='text'
              className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder={getTranslation('studentNamePlaceholder')}
              ref={nameRef}
              defaultValue={studentData?.student.name}
            />
            <input
              type='text'
              className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder={getTranslation('studentIdPlaceholder')}
              ref={idRef}
              defaultValue={studentData?.student.facilityId}
            />
          </div>
          <div className='flex  items-center gap-x-7'>
            <ChooseSchool
              selectedSchool={selectedSchool}
              setSelectedSchool={setSelectedSchool}
            />
            <div className='flex  items-center gap-x-4'>
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
          <div className='flex  justify-start w-full'>
            <ChooseClassAlpha
              selectedClassAlpha={selectedClassAlpha}
              setSelectedClassAlpha={setSelectedClassAlpha}
            />
          </div>
          <div className= {cn('flex ml-3 items-center gap-x-7 ',
          )} >
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center'
              style={{
                direction: language === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                className='flex-1 h-full bg-transparent'
                placeholder={getTranslation('passwordPlaceholder')}
                ref={passwordRef}
              />
               <img
                src={dark ? (showPassword ? EyeDarkIcon : EyeSlashDarkIcon) : (showPassword ? EyeIcon : EyeSlashIcon)}
                alt=""
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer w-6 h-6'
              />
            </div>
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center'
              style={{
                direction: language === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                className='flex-1 h-full bg-transparent'
                placeholder={getTranslation('confirmPasswordPlaceholder')}
                ref={confirmPasswordRef}
              />
                <img
                src={dark ? (showPassword ? EyeDarkIcon : EyeSlashDarkIcon) : (showPassword ? EyeIcon : EyeSlashIcon)}
                alt=""
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer w-6 h-6'
              />
            </div>
          </div>
        </div>
        <div className='w-full items-center justify-center flex  gap-x-7 mt-2'>
          <Button
            className='w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 bg-[#4E5464]'
            onPress={handleCreateStudent}
          >
            <Image src={DarkEditIcon} />
            <span className='text-white text-sm font-bold'>{getTranslation('editStudent')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
