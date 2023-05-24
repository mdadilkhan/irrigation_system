import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Chart.css";

import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({ monthlyData, dailyData, graphType }) {
  // console.log("chartData>>", chartData);
  // return <Bar redraw={true} data={chartData} />;
  console.log("graphtype", monthlyData);
  if (graphType == "daily") {
    return (
      <div>
        <CanvasJSChart
          options={dailyData}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  } else {
    return (
      <div>
        <CanvasJSChart
          options={monthlyData}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default Chart;
