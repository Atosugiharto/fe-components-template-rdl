// components/RoundedDoughnut.tsx
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: ["40%", "20%", "15%", "10%", "5%", "10%"],
  datasets: [
    {
      data: [40, 20, 15, 10, 5, 10],
      backgroundColor: [
        "#5B3DF5",
        "#9D7BFF",
        "#50A8FF",
        "#16BFD6",
        "#0E7C86",
        "#FF5B5B",
      ],
      borderRadius: 4,
      spacing: 5,
      cutout: "60%",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold" as const,
        size: 12,
      },
      formatter: (value: number) => `${value}%`,
    },
  },
};

export default function DoughnutChartRounded() {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
