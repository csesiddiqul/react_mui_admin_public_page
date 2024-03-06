import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 File", "2000 File"],
  ["New File", 8175000, 8008000],
  ["Compleate File", 3792000, 3694000],
  ["Ongoing", 2695000, 2896000],
  ["Not Allowe", 2099000, 1953000],
  ["others", 1526000, 1517000],
];

export const options = {
  title: "File of Copyright",
  chartArea: { width: "75%" },
  hAxis: {
    title: "Total File",
    minValue: 0,
  },
  vAxis: {
    title: "File",
  },

  colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"],
};

export default function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="90%"
      
      data={data}
      options={options}
    />
  );
}
