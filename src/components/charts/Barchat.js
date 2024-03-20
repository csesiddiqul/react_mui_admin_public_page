import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 File", "2000 File"],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> apurbo
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
<<<<<<< HEAD
=======
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
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
>>>>>>> apurbo
};

export default function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="90%"
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 1c128886bd5113c9234c63aca8f2f2f5601a6c77
=======
    
>>>>>>> apurbo
      
      data={data}
      options={options}
    />
  );
}
