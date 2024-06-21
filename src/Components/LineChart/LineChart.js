import React from 'react'
import { CategoryScale, Chart as ChartJs, LineElement, LinearScale, PointElement} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJs.register(LineElement,CategoryScale,LinearScale,PointElement)

export default function LineChart() {
    const data = {
        labels : ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
        datasets: [
            {
                data: [40,60,40,70,60,70],
                borderColor: 'blue',
                fill: false,
                tension: 0.5
            },
            {
                data: [20,30,20,50,30,50],
                borderColor: 'skyblue',
                fill: false,
                tension: 0.5
            }
        ]
    };
    const options ={
        scales: {
            x: {
              type: 'category', 
              labels : ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
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
                borderColor: 'transparent'
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
    <div>
        <Line data={data} options={options}></Line>
    </div>
  )
}
