import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { analytics } from "../../utils/analytics";

const lat = analytics.slice(0, 6);

const LatencyChart = () => {
  const labels = lat.map((x) => x.short);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Latency (ms)",
        data: lat.map((x) => x.latency),
        backgroundColor: lat.map((x, i) => {
          if (x.short === "GP2040") {
            return "#D946EF";
          } else if (i > 0 && i < 3) {
            return "#F43F5E";
          } else {
            return "#8B5CF6";
          }
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
  };

  return (
    <div className="px-2">
      <Bar options={options} data={data} />
    </div>
  );
};

export default LatencyChart;
