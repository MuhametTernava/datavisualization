import React, { useRef } from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { Button } from "../../layouts/layouts";
import { Chart, CategoryScale, LinearScale, Title } from "chart.js";
import html2canvas from "html2canvas";
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

          "rgba(94, 192, 162, 0.5)",
          "rgba(75, 162, 64, 0.5)",
          "rgba(153, 99, 64, 0.5)",
          "rgba(132, 102, 159, 0.5)",
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
        display: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleDownload = () => {
    const selectedChartTypes = selectedCharts;

    if (selectedChartTypes.length > 0) {
      selectedChartTypes.forEach((chartType, index) => {
        const chartElement = document.querySelector(
          `#${chartType}ChartElement`
        );

        if (chartElement) {
          setTimeout(() => {
            html2canvas(chartElement).then((canvas) => {
              const chartImage = canvas.toDataURL("image/png");

              const downloadLink = document.createElement("a");
              downloadLink.href = chartImage;
              downloadLink.download = `chart_${chartType}_${index + 1}.png`;
              downloadLink.click();
            });
          }, index * 500);
        }
      });
    }
  };

  return (
    <div>
      <div className="d-flex" style={{ width: "291px", height: "300px" }}>
        {selectedCharts.includes("bar") && (
          <Bar
            id="barChartElement"
            className="p-10 mr-10 ml-20 bgwhite"
            data={chartData}
            options={chartOptions}
          />
        )}
        {selectedCharts.includes("pie") && (
          <Pie
            id="pieChartElement"
            className="p-10 ml-10 bgwhite"
            data={chartData}
            options={chartOptions}
          />
        )}
        {selectedCharts.includes("line") && (
          <Line
            id="lineChartElement"
            className="p-10 ml-10 bgwhite"
            data={chartData}
            options={chartOptions}
          />
        )}
        {selectedCharts.includes("doughnut") && (
          <Doughnut
            id="doughnutChartElement"
            className="p-10 ml-10 bgwhite"
            data={chartData}
            options={chartOptions}
          />
        )}
      </div>
      <div>
        <Button className="mt-20" onClick={handleDownload}>
          Download
        </Button>
      </div>
    </div>
  );
};

export default CreateBarChart;
