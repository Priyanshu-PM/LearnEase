import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartLine = () => {
  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);
  const apiKey = process.env.REACT_APP_STUDYAI_API;

  const key = `${apiKey}/teacher/${tdata.teacher._id}/rooms`;

  console.log(tdata.tokem);

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(key, {})
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
        // position: "top",
        display: false,
        position: "bottom",
        align: "center",
      },
      title: {
        display: true,
        text: "Session Attentiveness",
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
          text: "Attentiveness",
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
        label: "Attentiveness",
        data: fetchdata,
        borderColor: "blue",
        backgroundColor: "blue",
        pointRadius: 5,
      },
    ],
  };

  return (
    <div>
      {rooms.length > 0 ? (
        <div>
          <Line data={data} options={options} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ChartLine;
