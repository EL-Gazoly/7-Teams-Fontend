import { Image } from "@nextui-org/react";
import SelectExpriment from "./SelectExpriment";
import useTranslationStore from "@/stores/LanguageStore";
export function Item({
  icon,
  title,
  subject,
  setSelectedItem,
  setSelectedSubject,
  selectedSubject,
}) {
  const { language, getTranslation } = useTranslationStore();

  return (
    <div
      className="  h-[83px] px-8 w-full flex items-center justify-between text-sm font-bold  border border-b border-[#E7E8E8]  dark:border-dark-bg "
      onClick={() => setSelectedSubject(subject)(subject)}
      style={{
        cursor: "pointer",
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="flex items-center gap-x-6 z-0">
        <Image src={icon} width={37} height={42} />
        <span> {title} </span>
      </div>

      <SelectExpriment
        setSelectItem={setSelectedItem}
        selectedSubject={selectedSubject}
        subject={subject}
        setSelectedSubject={setSelectedSubject}
      />
    </div>
  );
}
