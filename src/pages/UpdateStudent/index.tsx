import  { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'sonner';
import Loading from '../../Components/Loading';
import ControlCard from '../../Components/ControlCard';
import { Button, Image } from '@nextui-org/react';
import DarkEditIcon from '../../assets/settings/dark/vuesax/linear/user-edit.svg'
import { UploadImage } from './UploadImage';
import { getStudent, updateStudent } from '../../graphql/students';
import { GetStudents } from '../../graphql/reports';
import ChooseSchool from './ChooseSchool';
import ChooseTeam from './ChooseTeam';
import ChooseClass from './ChooseClass';
import ChooseClassAlpha from './ChooseClassAlpha';
import { useThemeStore } from '../../stores/ThemeStore';
import EyeSlashIcon from '../../assets/login/EyeSlashIcon.svg';
import EyeIcon from '../../assets/login/EyeIcon.svg';
import EyeDarkIcon from '../../assets/login/dark-eye.svg';
import EyeSlashDarkIcno from '../../assets/login/dark-eye-slash.svg';
import GroupIcon from '../../assets/Reports/group-dark.png';
import LightSchoolIcon from '../../assets/SideBar/Open/default/school.svg';

const PrimaryOptions = [
  { value: 'first', label: 'الصف الاول', image: GroupIcon },
  { value: 'second', label: 'الصف الثاني', image: GroupIcon },
  { value: 'third', label: 'الصف الثالث', image: GroupIcon },
  { value: 'fourth', label: 'الصف الرابع', image: GroupIcon },
  { value: 'fifth', label: 'الصف الخامس', image: GroupIcon },
  { value: 'sixth', label: 'الصف السادس', image: GroupIcon },
];

const SecondaryOptions = [
  { value: 'first', label: 'الصف الاول', image: GroupIcon },
  { value: 'second', label: 'الصف الثاني', image: GroupIcon },
  { value: 'third', label: 'الصف الثالث', image: GroupIcon },
];
const UpdateStudent = () => {
  const { id: studentId } = useParams();
  const { dark } = useThemeStore();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassAlpha, setSelectedClassAlpha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { data: studentData, loading: studentLoading } = useQuery(getStudent, { variables: { studentId } });
  const [updateStudentMutation, { data, loading, error }] = useMutation(updateStudent, { 
    refetchQueries : [{query : getStudent , variables : {studentId : studentId}}, GetStudents ]
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
    if (!name || !id || !selectedSchool || !selectedTeam || !selectedClass || !selectedClassAlpha) {
      return toast.error('Please fill all fields');
    }
    if (password !== confirmPasswordRef.current?.value) {
      return toast.error('Password does not match');
    }
    if (password && confirmPasswordRef.current?.value ) {
      await updateStudentMutation({
        variables: {
          updateStudentId: studentId,
          data: {
            name,
            facilityId: id,
            password,
            schoolId: selectedSchool.id,
            teamName: selectedTeam,
            classNumber: selectedClass,
            classalpha: selectedClassAlpha,
          },
          image,
          removeImage: studentData.student.imageUr && !selectedImage,
        },
      });
    }
    else {
      await updateStudentMutation({
        variables: {
          updateStudentId: studentId,
          data: {
            name,
            facilityId: id,
            schoolId: selectedSchool.id,
            teamName: selectedTeam,
            classNumber: selectedClass,
            classalpha: selectedClassAlpha,
          },
          image,
          removeImage: studentData.student.imageUrl && !selectedImage,
        },
      });
    }
   
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

  useEffect(() => {
    if (studentData) {
      setSelectedImage(
          data ? data.updateStudent?.imageUrl ? `${import.meta.env.VITE_API_URL}${data.updateStudent.imageUrl}` : null :
        studentData.student.imageUrl ? `${import.meta.env.VITE_API_URL}${studentData.student.imageUrl}` : null);
        data? setSelectedSchool({
          value: data.updateStudent?.team.school.name,
          label: data.updateStudent?.team.school.name,
          image: LightSchoolIcon,
          id: data.updateStudent?.team.school.schoolId,
        }) :
      setSelectedSchool({
        value: studentData.student.team.school.name,
        label: studentData.student.team.school.name,
        image: LightSchoolIcon,
        id: studentData.student.team.school.schoolId,
      });
      setSelectedTeam(data ? data.updateStudent?.team.name :
        studentData.student.team.name);
      setSelectedClass( data ? data.updateStudent?.class.number :
        studentData.student.class.number);
      setSelectedClassAlpha( data ? data.updateStudent?.classalpha :
        studentData.student.classalpha);
    }
  }, [studentData]);

  if (loading || studentLoading) return <Loading />;

  return (
    <div className='pb-8'>
      <ControlCard icon="Students" title='الطلاب' neasted={true}/>
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
          <div className='flex flex-row-reverse items-center gap-x-[22px]'>
            <input
              type='text'
              className='text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder='اسم الطالب هنا'
              ref={nameRef}
              defaultValue={data ? data.updateStudent?.name : studentData?.student.name}
            />
            <input
              type='text'
              className='text-right w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4'
              placeholder='رقم الطالب هنا'
              ref={idRef}
              defaultValue={data ? data?.updateStudent?.facilityId : studentData?.student.facilityId}
            />
          </div>
          <div className='flex flex-row-reverse items-center gap-x-7'>
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
          <div className='flex flex-row-reverse justify-start w-full'>
            <ChooseClassAlpha 
              selectedClassAlpha={selectedClassAlpha}
              setSelectedClassAlpha={setSelectedClassAlpha}
            />
          </div>
          <div className='flex flex-row-reverse items-center gap-x-7 mr-4'>
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center '>
              <img
                src={dark ? (showPassword ? EyeDarkIcon : EyeSlashDarkIcno) : (showPassword ? EyeIcon : EyeSlashIcon)}
                alt=""
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer w-6 h-6'
              />
              <input
                type={showPassword ? "text" : "password"}
                className='text-right flex-1 h-full bg-transparent'
                placeholder=' الرقم السري هنا'
                ref={passwordRef}
                onChange={(e) => setShowPassword(e.target.value !== '')}
              />
            </div>
            <div className='w-[380px] rounded-lg h-[66px] bg-[#F0F2F4] dark:bg-dark-item/70 px-4 flex items-center '>
              <img
                src={dark ? (showPassword ? EyeDarkIcon : EyeSlashDarkIcno) : (showPassword ? EyeIcon : EyeSlashIcon)}
                alt=""
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer w-6 h-6'
              />
              <input
                type={showPassword ? "text" : "password"}
                className='text-right flex-1 h-full bg-transparent'
                placeholder=' تاكيد الرقم السري هنا'
                ref={confirmPasswordRef}
                onChange={(e) => setShowPassword(e.target.value !== '')}
              />
            </div>
          </div>
        </div>
        <div className='w-full items-center justify-center flex flex-row-reverse gap-x-7 mt-2'>
          <Button
            className='w-[177px] h-[51px] py-2 px-4 rounded-lg flex items-center justify-center gap-x-2 bg-[#4E5464]'
            onPress={handleCreateStudent}
          >
            <Image src={DarkEditIcon} />
            <span className='text-white text-sm font-bold'>تعديل طالب</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
