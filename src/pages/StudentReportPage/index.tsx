import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetStudentReports } from '@/graphql/reports';
import Loading from '@/Components/Loading';
import ControlCard from '@/Components/ControlCard'
import StudentReportsFirstRow from './_components/StudentReportsFirstRow';
import StudentReportsSecondRow from './_components/StudentReportsSecondRow';
import StudentReportsThirdRow from './_components/StudentReportsThirdRow';
import useTranslationStore from '@/stores/LanguageStore';

const StudentReportsPage = () => {
  const pageRef = useRef(null);
  const { language } = useTranslationStore();
  const [experiments, setExperiments] = useState(null);
  const [maxGrades, setMaxGrades] = useState(null);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetStudentReports, {
    variables: {
      studentId: id,
    },
  });

  useEffect(() => {
    if (data) {
      const { studnetExpriment } = data.student;

      const sumByExperimentId = {};
      const maxGradesByExperimentId = {};

      studnetExpriment.forEach((experiment) => {
        const experimentId = experiment.expriment.exprimentId;

        if (!sumByExperimentId[experimentId]) {
          sumByExperimentId[experimentId] = {
            name: '',
            enterPratical: 0,
            enterTheortical: 0,
            enterTraining: 0,
            totalPraticalTime: 0,
            totalTheorticalTime: 0,
            totalTrainingTime: 0,
            theoreticalTestGrade: 0,
            practicalTestGrade: 0,
          };
        }

        if (!maxGradesByExperimentId[experimentId]) {
          maxGradesByExperimentId[experimentId] = {
            maxTheoreticalTestGrade: 0,
            maxPracticalTestGrade: 0,
          };
        }

        maxGradesByExperimentId[experimentId].maxTheoreticalTestGrade = Math.max(
          maxGradesByExperimentId[experimentId].maxTheoreticalTestGrade,
          experiment.theoreticalTestGrade
        );

        maxGradesByExperimentId[experimentId].maxPracticalTestGrade = Math.max(
          maxGradesByExperimentId[experimentId].maxPracticalTestGrade,
          experiment.practicalTestGrade
        );

        sumByExperimentId[experimentId].name = experiment.expriment.name;
        sumByExperimentId[experimentId].enterPratical += experiment.enterPratical;
        sumByExperimentId[experimentId].enterTheortical += experiment.enterTheortical;
        sumByExperimentId[experimentId].enterTraining += experiment.enterTraining;
        sumByExperimentId[experimentId].totalPraticalTime += experiment.totalPraticalTime;
        sumByExperimentId[experimentId].totalTheorticalTime += experiment.totalTheorticalTime;
        sumByExperimentId[experimentId].totalTrainingTime += experiment.totalTrainingTime;
        sumByExperimentId[experimentId].theoreticalTestGrade += experiment.theoreticalTestGrade;
        sumByExperimentId[experimentId].practicalTestGrade += experiment.practicalTestGrade;
      });

      setMaxGrades(maxGradesByExperimentId);
      setExperiments(sumByExperimentId);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div ref={pageRef} className='student-reports-container'>
      <ControlCard icon="Reports" title='sidebar-reports' neasted={true} info='studentReportPageDescription' />

      <div className=' mt-[17px] flex flex-col gap-y-4 pb-5 certificateDiv'
            style={{
                direction: language === 'ar' ? 'rtl' : 'ltr',
            }}
        >
        <StudentReportsFirstRow data={data} experiments={experiments} maxGrades={maxGrades}  ref={pageRef}/>
        <StudentReportsSecondRow data={data} experiments={experiments} />
        <StudentReportsThirdRow data={data} experiments={experiments} />
      </div>
    </div>
  );
};

export default StudentReportsPage;
