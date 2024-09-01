import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import useTranslationStore from "../../../../../../stores/LanguageStore";
import {
  chemistryOptions,
  physicsOptions,
} from "../../../../../../data/expermients";

const ExpermientEnteranceCounter = ({ data }) => {
  const { language, getTranslation } = useTranslationStore();

  // Combine chemistry and physics options
  const allOptions = [...chemistryOptions, ...physicsOptions];

  // Initialize state for all experiments dynamically
  const [experimentStates, setExperimentStates] = useState(
    allOptions.reduce((acc, option) => {
      acc[option.name] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    if (data) calculateTotal();
  }, [data]);

  const calculateTotal = () => {
    const experimentTotalsMap = new Map();

    data.school.teams.forEach((team) => {
      team.classes.forEach((classObj) => {
        classObj.students.forEach((student) => {
          student.studnetExpriment.forEach((expriment) => {
            const exprimentName = expriment.expriment.name;
            if (!experimentTotalsMap.has(exprimentName)) {
              experimentTotalsMap.set(exprimentName, {
                totalEnterTraining: 0,
                totalEnterTheortical: 0,
                totalEnterPratical: 0,
              });
            }

            const totals = experimentTotalsMap.get(exprimentName);
            totals.totalEnterTraining += expriment.enterTraining;
            totals.totalEnterTheortical += expriment.enterTheortical;
            totals.totalEnterPratical += expriment.enterPratical;
          });
        });
      });
    });

    // Calculate the sum totals for each experiment and update state
    const newStates = { ...experimentStates };
    allOptions.forEach((option) => {
      const totals = experimentTotalsMap.get(getTranslation(option.name));
      newStates[option.name] = totals
        ? totals.totalEnterTraining +
          totals.totalEnterTheortical +
          totals.totalEnterPratical
        : 0;
    });

    setExperimentStates(newStates);
  };

  return (
    <div
      className="w-[532px] h-[354px] overflow-y-auto p-7 bg-white dark:bg-primary-dark rounded-lg flex flex-col gap-y-5"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <span className="text-text-black dark:text-white text-sm font-bold">
        {getTranslation("experimentEntranceCount")}
      </span>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between text-[10px] text-[#96A5B8]">
          <div className="flex items-center gap-x-8">
            <span>#</span>
            <span>{getTranslation("experiment")}</span>
            <span>{getTranslation("experimentName")}</span>
          </div>
          <span>{getTranslation("count")}</span>
        </div>
        <Divider className="bg-[#2DEC4C]" />
        <div className="w-full flex flex-col gap-y-5 text-text-black dark:text-white text-xs">
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
