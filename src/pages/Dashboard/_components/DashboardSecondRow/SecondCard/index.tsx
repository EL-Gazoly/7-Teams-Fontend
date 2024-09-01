import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useTranslationStore from "@/stores/LanguageStore";
import { cn } from "@/lib/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const SecondCard = ({ rolesCount }) => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const [supervisorCount, setSupervisorCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { language, getTranslation } = useTranslationStore();

  useEffect(() => {
    if (rolesCount) {
      const teacherRoles = rolesCount.filter((role) => role.name === "معلم");
      const adminRoles = rolesCount.filter((role) => role.name === "ادمن");
      const supervisorRoles = rolesCount.filter(
        (role) => role.name === "المدير التنفيذي"
      );

      const countUsers = (roles) =>
        roles.reduce((acc, role) => acc + role.users.length, 0);

      const newTeacherCount = countUsers(teacherRoles);
      const newAdminCount = countUsers(adminRoles);
      const newSupervisorCount = countUsers(supervisorRoles);
      const newTotalCount =
        newTeacherCount + newAdminCount + newSupervisorCount;

      setTeacherCount(newTeacherCount);
      setAdminCount(newAdminCount);
      setSupervisorCount(newSupervisorCount);
      setTotalCount(newTotalCount);
    }
  }, [rolesCount]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const data = {
    labels: [
      getTranslation("system_admin"),
      getTranslation("executive_admins"),
      getTranslation("teachers_supervisors"),
    ],
    datasets: [
      {
        label: getTranslation("total_admins"),
        data: [adminCount, supervisorCount, teacherCount],
        backgroundColor: ["#009017", "#21FB45", "#8DF49D"],
        borderColor: ["#009017", "#21FB45", "#8DF49D"],
        borderRadius: 6,
        borderWidth: 1,
      },
    ],
  };

  const calculatePercentage = (count) =>
    totalCount ? Math.floor((count / totalCount) * 100) : 0;

  return (
    <div className="w-[289px] h-[254px] rounded-2xl bg-white dark:bg-[#252A33] dark:text-white py-[10px] flex flex-col gap-y-5 relative">
      <span className="text-base font-bold mx-4">
        {getTranslation("total_admins")}
      </span>
      <Divider className="w-full bg-[#E4E5E7]" />
      <div className="mt-[10px] self-end flex items-center gap-x-6">
        <div className="flex flex-col gap-y-4">
          <span className="text-[27px] font-bold text-[#444] dark:text-white">
            {totalCount}
          </span>
          <div className="flex flex-col gap-y-[14px] text-xs text-[#444] font-semibold text-right">
            <div className="flex flex-col items-center gap-y-2 text-[10px]">
              <div className="flex items-center gap-x-1 w-[118px]">
                <div className="w-3 h-2 rounded bg-[#009017]" />
                <span className="dark:text-white">
                  {calculatePercentage(adminCount)}%{" "}
                  {getTranslation("system_admin")}
                </span>
              </div>
              <div className="flex items-center gap-x-1 w-[118px]">
                <div className="w-3 h-2 rounded bg-[#21FB45]" />
                <span className="dark:text-white">
                  {calculatePercentage(supervisorCount)}%{" "}
                  {getTranslation("executive_admins")}
                </span>
              </div>
              <div className="flex items-center gap-x-1 w-[118px]">
                <div
                  className={cn(
                    "w-3 h-2 rounded bg-[#8DF49D] ",
                    language === "ar" ? "mb-4" : "mb-0"
                  )}
                />
                <span className="dark:text-white">
                  {calculatePercentage(teacherCount)}%{" "}
                  {getTranslation("teachers_supervisors")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            `absolute top-[32%]  w-[140px] h-[140px]`,
            language === "ar" ? "right-[3%]" : "left-[3%]"
          )}
        >
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
