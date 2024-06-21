import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart } from 'chart.js'; // Import Chart from 'chart.js' for Chart.register() in Chart.js 3
import { CategoryScale, LineElement, LinearScale, PointElement} from "chart.js";

// Register necessary components and plugins (only needed once per application)
Chart.register( // Register the components and plugins needed for your chart
    ArcElement,CategoryScale
);

const PieChart = () => {
  // Example data for the pie chart
  const data = {
    labels: [],
    datasets: [
      {
        data: [19, 12, 3],
        backgroundColor: ['blue', 'red', 'grey'],
      },
    ],
  };

  const options ={
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        x: {
          type: 'category', 
          grid: {
            display: false, 
          },
          border: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false, 
          },
          ticks: {
            display: false
          },
          border: {
            display: false
          }
        },
      },
      plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
        },
    },
}

  return (
    <div style={{width: '150px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
