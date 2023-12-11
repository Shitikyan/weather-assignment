import React from "react";
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
import { showMaxNumber } from "./helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

let labels = [];

export default function BarChartLayout(props) {
  const timeArray = props.list.map((item) => item.dt_txt);
  const tempArray = props.list.map((item) => item.main.temp - 273.15);
  const humArray = props.list.map((item) => item.main.humidity);

  for (let i = 0; i < Math.min(tempArray.length, showMaxNumber); i++) {
    labels[i] = JSON.stringify(timeArray[i]).substr(9, 8);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: tempArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Humidity",
        data: humArray,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
