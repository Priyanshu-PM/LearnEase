import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function ChartLine() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "top",
        display: false,
        position: "bottom",
        align: "center"
      },
      title: {
        display: true,
        text: "Session Attentiveness",
        font: {size: 20}
      },
    },

    scales: {
        x: {
            grid: {
                display:false
            },
            title: {
                display: true,
                text: "Number of sessions",
                font: {size: 20}
            }
        },
        y: {
            grid: {
                display:true
            },
            title: {
                display: true,
                text: "Attentiveness",
                font: {size: 20}
            }
        }
    }
};

  const labels = [ "January", "February", "March", "April", "May", "June", "July"];

  const fetchdata = [12, 34, 56, 102, 67, 98, 46];

  const data = {
    labels,
    datasets: [
      {
        label: "Attentiveness",
        data: fetchdata,
        borderColor: "blue",
        backgroundColor: "blue",
        pointRadius: 5
      },
    ],
  };

  return (
      <div>
        <Line data={data} options= {options}/>
      </div>
  );
}

export default ChartLine;