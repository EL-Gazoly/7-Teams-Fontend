import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Avatar } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import noPic from '@/assets/students/noPic.svg';
import useTranslationStore from '@/stores/LanguageStore';

const StackView = ({ data }) => {
  const navigate = useNavigate();
  const { language, getTranslation } = useTranslationStore();

  const getStage = (stage) => {
    switch (stage) {
      case 'High':
        return getTranslation('high');
      case 'Middle':
        return getTranslation('middle');
      case 'Primary':
        return getTranslation('primary');
    }
  };

  const getGrade = (grade) => {
    switch (grade) {
      case 'first':
        return getTranslation('first');
      case 'second':
        return getTranslation('second');
      case 'third':
        return getTranslation('third');
      case 'fourth':
        return getTranslation('fourth');
      case 'fifth':
        return getTranslation('fifth');
      case 'sixth':
        return getTranslation('sixth');
    }
  };

  return (
    <Table
      isHeaderSticky
      classNames={{
        base: 'rounded-none',
        wrapper: 'rounded-none bg-transparent shadow-none',
        table: 'rounded-none',
        tr: 'rounded-none bg-white dark:bg-[#252A33] text-center border-b border-[#292d32]/50',
        thead: 'rounded-none w-full border-b border-white dark:border-[#77777782]',
        th: 'text-[#292D32] bg-[#52d969]/[0.12] dark:bg-[#1F2329] dark:text-white border-b border-black/25 rounded-none py-5 h-[41px] text-center',
        sortIcon: 'rounded-none',
      }}
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr'}}
    >
      <TableHeader className="bg-primary text-white rounded-none">
        <TableColumn className="rounded-none">{getTranslation('image')}</TableColumn>
        <TableColumn>{getTranslation('username')}</TableColumn>
        <TableColumn>{getTranslation('access_code')}</TableColumn>
        <TableColumn>{getTranslation('school')}</TableColumn>
        <TableColumn>{getTranslation('class')}</TableColumn>
        <TableColumn>{getTranslation('stage')}</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((student, index) => (
          <TableRow key={index} className="z-0">
            <TableCell
              className="flex items-center justify-center cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <div className="w-[50px] h-[50px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
                {student.imageUrl ? (
                  <Avatar className="w-full h-full z-10" src={`${import.meta.env.VITE_API_URL}${student.imageUrl}`} fallback={noPic} />
                ) : (
                  <img src={noPic} alt="" />
                )}
              </div>
            </TableCell>
            <TableCell
              className="cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <span className="text-[#292D32] dark:text-white text-sm font-bold">{student?.name}</span>
            </TableCell>
            <TableCell
              className="cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <div className="flex items-center justify-center text-xs font-semibold text-primary">
                <span>{student.facilityId}</span>
                <span>#</span>
              </div>
            </TableCell>
            <TableCell
              className="cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <span className="text-sm font-bold text-[#292D32] dark:text-white">{student?.team?.school?.name}</span>
            </TableCell>
            <TableCell
              className="cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <span className="text-sm font-bold text-[#292D32] dark:text-white">{getGrade(student?.class.number)}</span>
            </TableCell>
            <TableCell
              className="cursor-pointer"
              onClick={() => navigate(`/library/students/${student?.studentId}`)}
            >
              <span className="text-sm font-bold text-[#292D32] dark:text-white">{getStage(student?.team.name)}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StackView;