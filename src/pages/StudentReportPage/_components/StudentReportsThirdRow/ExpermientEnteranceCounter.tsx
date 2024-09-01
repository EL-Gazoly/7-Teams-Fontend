import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { chemistryOptions, physicsOptions } from "@/data/expermients";
import useTranslationStore from "@/stores/LanguageStore";

const ExpermientEnteranceCounter = ({ expermients }) => {
  const { getTranslation } = useTranslationStore();

  // Combine chemistry and physics options
  const allOptions = [...chemistryOptions, ...physicsOptions];

  // Initialize state for all experiments with their respective names
  const [experimentStates, setExperimentStates] = useState(
    allOptions.reduce((acc, option) => {
      acc[option.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (expermients) {
      const newStates = allOptions.reduce((acc, option) => {
        acc[option.name] = 0;
        return acc;
      }, {});

      expermients = Object.values(expermients);
      expermients.forEach((experiment) => {
        const experimentName = experiment.name;
        if (newStates[experimentName] !== undefined) {
          newStates[experimentName] +=
            experiment.enterPratical +
            experiment.enterTheortical +
            experiment.enterTraining;
        }
      });

      setExperimentStates(newStates);
    }
  }, [expermients, allOptions]);

  return (
    <div className="w-[532px] h-[354px] overflow-y-auto p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5">
      <span className="text-text-black dark:text-white text-sm font-bold">
        {getTranslation("experiment_access_count")}
      </span>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between text-[10px] text-[#96A5B8] dark:text-[#EAEBEC]">
          <div className="flex items-center gap-x-8">
            <span>#</span>
            <span>{getTranslation("experiment")}</span>
            <span>{getTranslation("experiment_name")}</span>
          </div>
          <span>{getTranslation("count")}</span>
        </div>
        <Divider className="bg-[#2DEC4C]" />
        <div className="w-full flex flex-1 overflow-y-auto flex-col gap-y-5 text-text-black dark:text-white text-xs overflow-scroll">
          {allOptions.map((option, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-between"
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
