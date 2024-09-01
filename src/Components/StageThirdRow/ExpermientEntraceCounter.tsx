import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

import { chemistryOptions, physicsOptions } from "@/data/expermients";
import useTranslationStore from "@/stores/LanguageStore";

const ExpermientEnteranceCounter = ({ data }) => {
  const { getTranslation } = useTranslationStore();

  // Combine chemistry and physics options
  const allOptions = [...chemistryOptions, ...physicsOptions];

  // Create an object with dynamic state values for each experiment
  const [experimentStates, setExperimentStates] = useState(
    allOptions.reduce((acc, option) => {
      acc[option.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    calculateTotal();
  }, [data]);

  const calculateTotal = () => {
    const experimentTotalsMap = new Map();
    data.teamByName.forEach((team) => {
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

            exprimentMap.get(exprimentName).totalEnterTraining +=
              expriment.enterTraining;
            exprimentMap.get(exprimentName).totalEnterTheortical +=
              expriment.enterTheortical;
            exprimentMap.get(exprimentName).totalEnterPratical +=
              expriment.enterPratical;
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

    // Update state dynamically based on experiment name
    const newStates = { ...experimentStates };
    allOptions.forEach((option) => {
      const total = summedExperimentTotals.get(option.title);
      newStates[option.name] = total
        ? total.totalEnterTraining +
          total.totalEnterTheortical +
          total.totalEnterPratical
        : 0;
    });
    setExperimentStates(newStates);
  };

  return (
    <div className="w-[532px] h-[354px] overflow-y-auto p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5">
      <span className="text-text-black dark:text-white text-sm font-bold">
        {getTranslation("experiment_entry_count")}
      </span>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between text-[10px] text-[#96A5B8]">
          <div className="flex items-center gap-x-8">
            <span>#</span>
            <span>{getTranslation("experiment")}</span>
            <span>{getTranslation("experiment_name")}</span>
          </div>
          <span>{getTranslation("count")}</span>
        </div>
        <Divider className="bg-[#2DEC4C]" />
        <div className="w-full flex flex-col gap-y-5 text-text-black dark:text-white text-xs">
          {allOptions.map((option, index) => (
            <div
              className="w-full h-full flex items-center justify-between"
              key={option.value}
            >
              <div className="flex items-center gap-x-8">
                <span className="font-medium">{index + 1}</span>
                <img src={option.icon} alt="" className="w-5 h-10" />
                <span className="font-bold">{getTranslation(option.name)}</span>
              </div>
              <div className="w-[41px] h-[42px] flex items-center justify-center dark:bg-[#373C44] font-medium">
                {experimentStates[option.name]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpermientEnteranceCounter;
