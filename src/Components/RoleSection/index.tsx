import { useRef } from 'react';
import { Switch, Divider } from '@nextui-org/react';
import Permession from './item';
import useTranslationStore from '@/stores/LanguageStore';

type RolesSectionProps = {
  disabled: boolean;
  nameRef: React.MutableRefObject<HTMLInputElement>;
  permssions: permessionsType;
}

type permessionsType = {
  isHeadsetAcsess: boolean;
  setIsHeadsetAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isCourseAcsess: boolean;
  setIsCourseAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isStudentAcsess: boolean;
  setIsStudentAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isSchoolAccess: boolean;
  setIsSchoolAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isLibraryAcsess: boolean;
  setIsLibraryAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isReportAcsess: boolean;
  setIsReportAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isCertificateAcsess: boolean;
  setIsCertificateAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isDashboardAcsess: boolean;
  setIsDashboardAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isLogsAcsess: boolean;
  setIsLogsAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isRoleAcsess: boolean;
  setIsRoleAccsess: React.Dispatch<React.SetStateAction<boolean>>;
  isUserAcsess: boolean;
  setIsUserAccsess: React.Dispatch<React.SetStateAction<boolean>>;
}

const RolesSection = ({ disabled, nameRef, permssions }: RolesSectionProps) => {
  const { language, getTranslation } = useTranslationStore();

  const permessions = {
    headset: {
      name: getTranslation('deviceControl'),
      description: getTranslation('deviceControlDescription'),
      selected: permssions.isHeadsetAcsess,
      onChange: permssions.setIsHeadsetAccsess
    },
    courses: {
      name: getTranslation('showCoursesSection'),
      description: getTranslation('showCoursesSectionDescription'),
      selected: permssions.isCourseAcsess,
      onChange: permssions.setIsCourseAccsess
    },
    students: {
      name: getTranslation('studentControl'),
      description: getTranslation('studentControlDescription'),
      selected: permssions.isStudentAcsess,
      onChange: permssions.setIsStudentAccsess
    },
    school: {
      name: getTranslation('schoolControl'),
      description: getTranslation('schoolControlDescription'),
      selected: permssions.isSchoolAccess,
      onChange: permssions.setIsSchoolAccsess
    },
    library: {
      name: getTranslation('mediaControl'),
      description: getTranslation('mediaControlDescription'),
      selected: permssions.isLibraryAcsess,
      onChange: permssions.setIsLibraryAccsess
    },
    reports: {
      name: getTranslation('reportControl'),
      description: getTranslation('reportControlDescription'),
      selected: permssions.isReportAcsess,
      onChange: permssions.setIsReportAccsess
    },
    certificates: {
      name: getTranslation('certificateControl'),
      description: getTranslation('certificateControlDescription'),
      selected: permssions.isCertificateAcsess,
      onChange: permssions.setIsCertificateAccsess
    },
    dashboard: {
      name: getTranslation('dashboardControl'),
      description: getTranslation('dashboardControlDescription'),
      selected: permssions.isDashboardAcsess,
      onChange: permssions.setIsDashboardAccsess
    },
    logs: {
      name: getTranslation('logsControl'),
      description: getTranslation('logsControlDescription'),
      selected: permssions.isLogsAcsess,
      onChange: permssions.setIsLogsAccsess
    },
    roles: {
      name: getTranslation('roleControl'),
      description: getTranslation('roleControlDescription'),
      selected: permssions.isRoleAcsess,
      onChange: permssions.setIsRoleAccsess
    },
    users: {
      name: getTranslation('adminControl'),
      description: getTranslation('adminControlDescription'),
      selected: permssions.isUserAcsess,
      onChange: permssions.setIsUserAccsess
    },
  }

  return (
    <div className={`flex flex-col items-center gap-y-[18px] ${disabled ? 'opacity-50' : ''}`}
        style={{
            direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
    >
      <div className='flex flex-col gap-y-2   text-text-black dark:text-white'>
        <label htmlFor="name" className='text-xs font-bold '>{getTranslation('roleName')}</label>
        <input type="text" className='w-[781.531px] h-[58.361px] rounded-md bg-[#E1E4E8] dark:bg-[#E1E4E8]/[0.16] px-5 '
          disabled={disabled}
          ref={nameRef}
          style={{ backdropFilter: "blur(23.259841918945312px)" }}
        />
      </div>
      {Object.keys(permessions).map(permessionsKey => (
        <Permession permessions={permessions} permesssionKey={permessionsKey} disabled={disabled} />
      ))}
    </div>
  )
}

export default RolesSection;
