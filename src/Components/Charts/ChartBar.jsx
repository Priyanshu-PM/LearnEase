import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = () => {
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);
  const apiKey = process.env.REACT_APP_STUDYAI_API;

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  console.log(tdata.tokem);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(key, {
          headers: {
            Authorization: `${tdata.tokem}`,
          },
      })
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        setRooms(JSON.parse(data.data));
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  }, [key]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
      title: {
        display: true,
        text: "Attendance",
        font: { size: 20 },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Number of sessions",
          font: { size: 20 },
        },
      },
      y: {
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: "Attendance",
          font: { size: 20 },
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const fetchdata = [12, 34, 56, 102, 67, 98, 46];

  const data = {
    labels,
    datasets: [
      {
        label: "Attendance",
        data: fetchdata,
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div>
      {rooms.length > 0 ? (
        <div>
          <Bar options={options} data={data} />
        </div>
      ) : (
        <div>Not Enough data</div>
      )}
    </div>
  );
};

export default ChartBar;
