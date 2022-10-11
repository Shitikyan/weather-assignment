import {showMaxNumber} from './helper'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Area Chart',
    },
  },
};

let labels = [];

export default function AreaChartLayout(props) {

  const timeArray = props.list.map(item => item.dt_txt);
  const tempArray = props.list.map(item => item.main.temp - 273.15);
  const humArray = props.list.map(item => item.main.humidity);

  for (let i = 0; i < Math.min(tempArray.length, showMaxNumber); i++) {
    labels[i] = JSON.stringify(timeArray[i]).substr(9, 8);
  }
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Temperature',
        data: tempArray,
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: 'Humidity',
        data: humArray,
        borderColor: 'rgba(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}