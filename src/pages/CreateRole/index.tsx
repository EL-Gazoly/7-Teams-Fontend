import {useState, useRef} from 'react'
import ControlCard from '../../Components/ContraolCard'
import { Button, Image} from '@nextui-org/react';
import AddIcon from '../../assets/students/add.svg'
import RolesSection from '../../Components/RoleSection';

import { createRole, GetRolesWithPermessions } from '../../graphql/role';
import { useMutation } from '@apollo/client';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';


const CreateRolePage = () => {
  const [disabled, setDisabled] = useState(true)

  
  const nameRef = useRef<HTMLInputElement>()
  const [isHeadsetAcsess, setIsHeadsetAccsess] = useState(false)
  const [isCourseAcsess, setIsCourseAccsess] = useState(false)
  const [isStudentAcsess, setIsStudentAccsess] = useState(false)
  const [isSchoolAccess, setIsSchoolAccsess] = useState(false)
  const [isLibraryAcsess, setIsLibraryAccsess] = useState(false)
  const [isReportAcsess, setIsReportAccsess] = useState(false)
  const [isCertificateAcsess, setIsCertificateAccsess] = useState(false)
  const [isDashboardAcsess, setIsDashboardAccsess] = useState(false)
  const [isLogsAcsess, setIsLogsAccsess] = useState(false)
  const [isRoleAcsess, setIsRoleAccsess] = useState(false)
  const [isUserAcsess, setIsUserAccsess] = useState(false)

  const [createRoleMutation, {data, loading , error}] = useMutation(createRole,{
    refetchQueries: [{query: GetRolesWithPermessions}]
  })

  const handelSave = () => {
    createRoleMutation({
      variables: {
        data: {
          name: nameRef.current.value,
          isDevicesAccess: isHeadsetAcsess,
          isCoursesAccsess: isCourseAcsess,
          isStudentsAccess: isStudentAcsess,
          isLibraryAccess: isLibraryAcsess,
          isReportsAccess: isReportAcsess,
          isCertificatesAccess: isCertificateAcsess,
          isDashboardAccess: isDashboardAcsess,
          isLogsAccess: isLogsAcsess,
          isRolesAccess: isRoleAcsess,
          isUsersAccess: isUserAcsess,
        }
        
      }
    })
  }
  if (loading) return <Loading />
  if (error) toast.error(error.message)
  if (data) {
    toast.success(' تم اضافه الدور بنجاح ')
}
  return (
    <>
    <ControlCard icon="Settings" title='  الأدوار  ' neasted={true}/>
        <div className=' mt-[38px] flex flex-col items-center gap-y-7 pb-9'>
            <div className=' flex items-center justify-center w-full'>
                <Button className=' w-[183px] h-11 py-[7px] px-4 rounded-md ' color='primary'
                  onPress={() => setDisabled(!disabled)}
                >
                    <Image src={AddIcon} className='mt-1' />
                    <span>اضافة دور جديد</span>

                </Button>

            </div>

            <RolesSection disabled={disabled} nameRef={nameRef} 
            
            permssions={{
              isHeadsetAcsess,
              isCourseAcsess,
              isStudentAcsess,
              isSchoolAccess,
              isLibraryAcsess,
              isReportAcsess,
              isCertificateAcsess,
              isDashboardAcsess,
              isLogsAcsess,
              isRoleAcsess,
              isUserAcsess,
              setIsHeadsetAccsess,
              setIsCourseAccsess,
              setIsStudentAccsess,
              setIsSchoolAccsess,
              setIsLibraryAccsess,
              setIsReportAccsess,
              setIsCertificateAccsess,
              setIsDashboardAccsess,
              setIsLogsAccsess,
              setIsRoleAccsess,
              setIsUserAccsess,
            }}
            />

            <div className=' w-full items-center justify-center flex  mt-9'>
              <Button color='primary' className=' w-32 h-12 py-[6px] px-4 rounded-md' onPress={handelSave}> حفظ </Button>
            </div>

        </div>

    </>
  )
}

export default CreateRolePage