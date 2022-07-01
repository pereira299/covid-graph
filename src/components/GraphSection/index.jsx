import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const GraphSection = (props) => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
    const labels = props.data.map((item) => item.label);
    const data = {
    labels,
    datasets: [
      {
        data: props.data.map((item) => item.count),
        backgroundColor: props.color || "rgba(245, 158, 11, 0.5)",
        borderColor: props.color || "rgba(245, 158, 11, 1)",
      },
    ],
  };

  return (
    <article className="p-10 min-h-screen">
      <h4 className="text-5xl font-bold font-lato">{props.title}</h4>
      {props.chartType === "line" && <Line data={data} />}
      {props.chartType === "bar" && <Bar data={data} />}
    </article>
  );
};

export default GraphSection;
