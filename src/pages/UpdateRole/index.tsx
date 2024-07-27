import { useState, useRef, useEffect } from 'react';
import ControlCard from '../../Components/ControlCard';
import { Button, Image } from '@nextui-org/react';
import RolesSection from '../../Components/RoleSection';
import { GetRolesWithPermessions, updateRole, getRole } from '../../graphql/role';
import { useMutation, useQuery } from '@apollo/client';
import Loading from '../../Components/Loading';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';
import useTranslationStore from '@/stores/LanguageStore';

const UpdateRolePage = () => {
  const { getTranslation } = useTranslationStore();
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams<{ id: string }>();

  const nameRef = useRef<HTMLInputElement>();
  const isSucsess = useRef(false);
  const [isHeadsetAcsess, setIsHeadsetAccsess] = useState(false);
  const [isCourseAcsess, setIsCourseAccsess] = useState(false);
  const [isStudentAcsess, setIsStudentAccsess] = useState(false);
  const [isSchoolAccess, setIsSchoolAccsess] = useState(false);
  const [isLibraryAcsess, setIsLibraryAccsess] = useState(false);
  const [isReportAcsess, setIsReportAccsess] = useState(false);
  const [isCertificateAcsess, setIsCertificateAccsess] = useState(false);
  const [isDashboardAcsess, setIsDashboardAccsess] = useState(false);
  const [isLogsAcsess, setIsLogsAccsess] = useState(false);
  const [isRoleAcsess, setIsRoleAccsess] = useState(false);
  const [isUserAcsess, setIsUserAccsess] = useState(false);

  const [updateRoleMutation, { data: updatedRole, loading, error }] = useMutation(updateRole, {
    refetchQueries: [{ query: GetRolesWithPermessions }, { query: getRole, variables: { roleId: id } }]
  });

  const { data: roleData, loading: roleLoading, error: roleError } = useQuery(getRole, {
    variables: {
      roleId: id
    }
  });

  useEffect(() => {
    if (roleData) {
      const role = roleData.role;
      nameRef.current.value = role.name;
      setIsHeadsetAccsess(role.isDevicesAccess);
      setIsCourseAccsess(role.isCoursesAccsess);
      setIsStudentAccsess(role.isStudentsAccess);
      setIsSchoolAccsess(role.isSchoolAccess);
      setIsLibraryAccsess(role.isLibraryAccess);
      setIsReportAccsess(role.isReportsAccess);
      setIsCertificateAccsess(role.isCertificatesAccess);
      setIsDashboardAccsess(role.isDashboardAccess);
      setIsLogsAccsess(role.isLogsAccess);
      setIsRoleAccsess(role.isRolesAccess);
      setIsUserAccsess(role.isUsersAccess);
    }
  }, [roleData]);

  const handleSave = () => {
    isSucsess.current = false;
    updateRoleMutation({
      variables: {
        updateRoleId: id,
        data: {
          name: nameRef.current.value,
          isDevicesAccess: isHeadsetAcsess,
          isCoursesAccsess: isCourseAcsess,
          isStudentsAccess: isStudentAcsess,
          isSchoolAccess: isSchoolAccess,
          isLibraryAccess: isLibraryAcsess,
          isReportsAccess: isReportAcsess,
          isCertificatesAccess: isCertificateAcsess,
          isDashboardAccess: isDashboardAcsess,
          isLogsAccess: isLogsAcsess,
          isRolesAccess: isRoleAcsess,
          isUsersAccess: isUserAcsess,
        }
      }
    });
  };

  if (loading || roleLoading) return <Loading />;
  if (error || roleError) toast.error(error.message);
  if (updatedRole) {
    if (!isSucsess.current) {
      isSucsess.current = true;
      toast.success(getTranslation('roleUpdatedSuccessfully'));
    }
  }

  return (
    <>
      <ControlCard icon="Settings" title={getTranslation('roles')} neasted={true} info='updateRolePageDescription' />
      <div className='mt-[38px] flex flex-col items-center gap-y-7 pb-9'>
        <RolesSection
          disabled={false}
          nameRef={nameRef}
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
        <div className='w-full items-center justify-center flex mt-9'>
          <Button color='primary' className='w-32 h-12 py-[6px] px-4 rounded-md' onPress={handleSave}>
            {getTranslation('save')}
          </Button>
        </div>
      </div>
    </>
  );
}

export default UpdateRolePage;
