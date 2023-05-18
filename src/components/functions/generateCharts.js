import React from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title } from "chart.js";
Chart.register(CategoryScale, LinearScale, Title);
const CreateBarChart = ({ products, selectedCharts }) => {
  const chartData = {
    labels: products.map((product, index) => `${product.name}`),
    datasets: [
      {
        label: "Product Price",
        data: products.map((product) => product.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="d-flex" style={{ width: "291px", height: "300px" }}>
      {selectedCharts.includes("bar") && (
        <Bar
          className="mr-10 ml-20 bgwhite"
          data={chartData}
          options={chartOptions}
        />
      )}
      {selectedCharts.includes("pie") && (
        <Pie
          className="ml-10 bgwhite"
          data={chartData}
          options={chartOptions}
        />
      )}
      {selectedCharts.includes("line") && (
        <Line
          className="ml-10 bgwhite"
          data={chartData}
          options={chartOptions}
        />
      )}
      {selectedCharts.includes("doughnut") && (
        <Doughnut
          className="ml-10 bgwhite"
          data={chartData}
          options={chartOptions}
        />
      )}
    </div>
  );
};

export default CreateBarChart;
