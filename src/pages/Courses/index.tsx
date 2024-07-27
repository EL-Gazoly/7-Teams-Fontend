import ControlCard from "@/Components/ControlCard";
import BGImage from "@/assets/courses/bg.png";
import ChemistryImage from "@/assets/courses/chemisry.png";
import { Image, Button } from "@nextui-org/react";
import "./style.css";
import CourseStoreCard from "./CourseStoreCard";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "@/stores/ThemeStore";
import useTranslationStore from "@/stores/LanguageStore";

const CoursesPage = () => {
  const navigate = useNavigate();
  const { dark } = useThemeStore();
  const { language, getTranslation } = useTranslationStore();

  return (
    <div className="max-w-full grid grid-cols-3 pb-7 gap-y-4 gap-x-6">
      <div className="col-span-3">
        <ControlCard
          icon="Courses"
          title={getTranslation("sidebar-course")}
          neasted={false}
          info="CoursesPageDescription"
        />
      </div>
      <div
        className={`h-[300px] col-span-3 mb-10 rounded-[7px] fire-fighthing light ${
          dark ? "fire-fighthing-dark" : "bg-white"
        }`}
        style={{
          backgroundImage: dark ? `url(${BGImage})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ml-28 flex flex-row items-center justify-center gap-x-[150px] z-10 overflow-y-hidden">
          <div className="flex flex-col items-center gap-y-[26px]">
            <div className="flex flex-col text-center gap-y-2 text-[#122333] dark:text-white font-bold">
              <span className="text-4xl">{getTranslation("chemistry_curriculum")}</span>
              <span className="text-sm">{getTranslation("available_now")}</span>
              <Button
                className="text-white text-sm font-bold bg-primary-gradient"
                onPress={() => navigate("/courses/chemistry")}
              >
                {getTranslation("view_details")}
              </Button>
            </div>
          </div>
          <Image src={ChemistryImage} className="mb-3" width={363.25} height={300} />
        </div>
      </div>

      <CourseStoreCard name={"geology_curriculum"} />
      <CourseStoreCard name={"physics_curriculum"} />
      <CourseStoreCard name={"biology_curriculum"} />
    </div>
  );
};

export default CoursesPage;
