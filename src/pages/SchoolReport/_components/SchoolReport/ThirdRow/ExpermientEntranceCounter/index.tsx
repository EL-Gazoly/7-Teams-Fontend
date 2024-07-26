import React, { useEffect, useState } from 'react';
import { Divider } from '@nextui-org/react';
import useTranslationStore from '../../../../../../stores/LanguageStore';
import { chemistryOptions, physicsOptions } from '../../../../../../data/expermients';

const ExpermientEnteranceCounter = ({ data }) => {
  const { language, getTranslation } = useTranslationStore();
  const [liquid, setLiquid] = useState(0);
  const [heat, setHeat] = useState(0);
  const [wood, setWood] = useState(0);
  const [volume, setVolume] = useState(0);
  const [charles, setCharles] = useState(0);
  const [sizeOfMole, setSizeOfMole] = useState(0);
  const [Inertia, setInertia] = useState(0);
  const [GeigerDevice, setGeigerDevice] = useState(0);

  const optionswithState = [
    { ...chemistryOptions[0], state: liquid },
    { ...chemistryOptions[1], state: heat },
    { ...chemistryOptions[2], state: wood },
    { ...chemistryOptions[3], state: volume },
    { ...chemistryOptions[4], state: charles },
    { ...chemistryOptions[5], state: sizeOfMole },
    { ...physicsOptions[0], state: Inertia },
    { ...physicsOptions[1], state: GeigerDevice },
  ];

  useEffect(() => {
    if (data) calculateTotal();
  }, [data]);

  const calculateTotal = () => {
    const experimentTotalsMap = new Map();
    data.school.teams.forEach((team) => {
      team.classes.forEach((classObj) => {
        classObj.students.forEach((student) => {
          const exprimentMap = new Map();

          // Collect maximum values for each experiment ID
          student.studnetExpriment.forEach((expriment) => {
            const exprimentName = expriment.expriment.name;

            if (!exprimentMap.has(exprimentName)) {
              exprimentMap.set(exprimentName, {
                totalEnterTraining: 0,
                totalEnterTheortical: 0,
                totalEnterPratical: 0,
              });
            }

            exprimentMap.get(exprimentName).totalEnterTraining += expriment.enterTraining;
            exprimentMap.get(exprimentName).totalEnterTheortical += expriment.enterTheortical;
            exprimentMap.get(exprimentName).totalEnterPratical += expriment.enterPratical;
          });

          // Update the experimentTotalsMap
          exprimentMap.forEach((totals, exprimentName) => {
            if (!experimentTotalsMap.has(exprimentName)) {
              experimentTotalsMap.set(exprimentName, [totals]);
            } else {
              experimentTotalsMap.get(exprimentName).push(totals);
            }
          });
        });
      });
    });

    const summedExperimentTotals = new Map();
    experimentTotalsMap.forEach((totalsList, exprimentName) => {
      const summedTotals = totalsList.reduce(
        (acc, totals) => {
          acc.totalEnterTraining += totals.totalEnterTraining;
          acc.totalEnterTheortical += totals.totalEnterTheortical;
          acc.totalEnterPratical += totals.totalEnterPratical;
          return acc;
        },
        {
          totalEnterTraining: 0,
          totalEnterTheortical: 0,
          totalEnterPratical: 0,
        }
      );

      summedExperimentTotals.set(exprimentName, summedTotals);
    });

    setLiquid(
      summedExperimentTotals.get(getTranslation('liquidViscosity'))
        ? summedExperimentTotals.get(getTranslation('liquidViscosity')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('liquidViscosity')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('liquidViscosity')).totalEnterPratical
        : 0
    );
    setHeat(
      summedExperimentTotals.get(getTranslation('effectiveUseOfBunsenBurner'))
        ? summedExperimentTotals.get(getTranslation('effectiveUseOfBunsenBurner')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('effectiveUseOfBunsenBurner')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('effectiveUseOfBunsenBurner')).totalEnterPratical
        : 0
    );
    setWood(
      summedExperimentTotals.get(getTranslation('densityOfWood'))
        ? summedExperimentTotals.get(getTranslation('densityOfWood')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('densityOfWood')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('densityOfWood')).totalEnterPratical
        : 0
    );
    setVolume(
      summedExperimentTotals.get(getTranslation('volumeCalculation'))
        ? summedExperimentTotals.get(getTranslation('volumeCalculation')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('volumeCalculation')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('volumeCalculation')).totalEnterPratical
        : 0
    );
    setCharles(
      summedExperimentTotals.get(getTranslation('charlesLaw'))
        ? summedExperimentTotals.get(getTranslation('charlesLaw')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('charlesLaw')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('charlesLaw')).totalEnterPratical
        : 0
    );
    setSizeOfMole(
      summedExperimentTotals.get(getTranslation('sizeOfMole'))
        ? summedExperimentTotals.get(getTranslation('sizeOfMole')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('sizeOfMole')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('sizeOfMole')).totalEnterPratical
        : 0
    );
    setInertia(
      summedExperimentTotals.get(getTranslation('inertia'))
        ? summedExperimentTotals.get(getTranslation('inertia')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('inertia')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('inertia')).totalEnterPratical
        : 0
    );
    setGeigerDevice(
      summedExperimentTotals.get(getTranslation('geigerDevice'))
        ? summedExperimentTotals.get(getTranslation('geigerDevice')).totalEnterTraining +
            summedExperimentTotals.get(getTranslation('geigerDevice')).totalEnterTheortical +
            summedExperimentTotals.get(getTranslation('geigerDevice')).totalEnterPratical
        : 0
    );
  };

  return (
    <div
      className='w-[532px] h-[354px] overflow-y-auto p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5'
      style={{
        direction: language === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <span className='text-text-black dark:text-white text-sm font-bold'>
        {getTranslation('experimentEntranceCount')}
      </span>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-full flex items-center justify-between text-[10px] text-[#96A5B8]'>
          <div className='flex items-center gap-x-8'>
            <span>#</span>
            <span>{getTranslation('experiment')}</span>
            <span>{getTranslation('experimentName')}</span>
          </div>
          <span>{getTranslation('count')}</span>
        </div>
        <Divider className='bg-[#2DEC4C]' />
        <div className='w-full flex flex-col gap-y-5 text-text-black dark:text-white text-xs'>
          {optionswithState.map((option, index) => (
            <div key={index} className='w-full h-full flex items-center justify-between'>
              <div className='flex items-center gap-x-8'>
                <span className='font-medium'>{index + 1}</span>
                <img src={option.icon} alt='' className='w-5 h-10' />
                <span className='font-bold'>{getTranslation(option.name)}</span>
              </div>
              <div className='w-[41px] h-[42px] flex items-center justify-center dark:bg-[#373C44] font-medium'>
                {option.state}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpermientEnteranceCounter;
