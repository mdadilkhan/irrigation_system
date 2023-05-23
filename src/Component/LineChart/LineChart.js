import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './LineChart.css'




function LineChart({ chartData }) {

  console.log("chartData>>",chartData);
  return <Line data={chartData} />;
}

export default LineChart;