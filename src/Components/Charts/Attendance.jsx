import BarChart from "./BarChart";
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from "../../pages/Teacher/Dashboard/ChartsData";
import { MdArrowDropUp } from "react-icons/md";
import Card from "../SessionComponents";
import { useEffect, useState } from "react";

const Attendance = () => {

  const [teacher, setTeacher] = useState();

  useEffect(()=> {

    var teacherData = sessionStorage.getItem("teacher");
    const tdata = JSON.parse(teacherData);
    // console.log(tdata);
    setTeacher(tdata);
    console.log(teacher);
  }, [])
  
  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-sm font-medium leading-4 text-[#ACB6D5]">
          Attendance
          </p>
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            recent {" "}
            <span className="text-sm font-medium leading-6 text-[#ACB6D5]">
              Students
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +2.45% </p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default Attendance;
