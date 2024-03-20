import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 File", "2000 File"],
  ["নতুন নথি", 8175000, 8008000],
  ["সম্পূর্ণ ফাইল", 3792000, 3694000],
  ["চলমান", 2695000, 2896000],
  ["অনুমতি নেই", 2099000, 1953000],
  ["অন্যান্য", 1526000, 1517000],
];

export const options = {
  title: "কপিরাইট ফাইল",
  chartArea: { width: "75%" },
  hAxis: {
    title: "মোট ফাইল",
    minValue: 0,
  },
  vAxis: {
    title: "ফাইল",
  },

  colors:["#2abba7","#1877f2","#188310"],
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
