import { Item } from "./item";
import { useState } from "react";
import Chemistry from "../../../assets/SelectCourse/SelectSubject/chemistry.svg";
import Physics from "../../../assets/SelectCourse/SelectSubject/physics.svg";
import SelectedCourse from "./SelectedCourse";
import useTranslationStore from "../../../stores/LanguageStore";

const ThridCard = () => {
  const { getTranslation, language } = useTranslationStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="relative">
      <div
        className="w-[558px] h-[483px] bg-white dark:bg-primary-dark rounded-[18px]
        py-5 flex flex-col gap-y-[18px] text-text-black dark:text-white"
        style={{
          boxShadow: "0px 3.588px 13.454px 0px rgba(91, 89, 89, 0.25)",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        <span className="text-lg font-bold mx-[28px]">
          {getTranslation("courseCurriculums")}
        </span>
        <div className="w-full gap-y-8 flex flex-col items-center">
          <div className="h-[53px] bg-[#dcdee033] w-full flex items-center justify-between px-8 text-xs font-bold">
            <span>{getTranslation("experimentName")}</span>
            <span className="ml-8">{getTranslation("status")}</span>
          </div>
          <div className="flex flex-col w-full">
            <Item
              icon={Chemistry}
              title={getTranslation("chemistry")}
              setSelectedItem={setSelectedItem}
              subject="chemistry"
              setSelectedSubject={setSelectedSubject}
              selectedSubject={selectedSubject}
            />
            <Item
              icon={Physics}
              title={getTranslation("physics")}
              setSelectedItem={setSelectedItem}
              subject="physics"
              setSelectedSubject={setSelectedSubject}
              selectedSubject={selectedSubject}
            />
          </div>
        </div>
      </div>
      {selectedItem && (
        <div className="absolute inset-0">
          <SelectedCourse
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      )}
    </div>
  );
};

export default ThridCard;
