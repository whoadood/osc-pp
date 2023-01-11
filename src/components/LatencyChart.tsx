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
            return "#06B6D4";
          } else if (i > 0 && i < 3) {
            return "#14B8A6";
          } else {
            return "#6366F1";
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
