import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Tooltip, } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

export default function DailyBarGraph() {
    const data = {
        labels: ["00", "04", "08", "12", "14", "16", "18"],
        datasets: [
            {
                label: "Daily",
                backgroundColor: 'blue',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [50, 30, 90, 40, 70,100,20]
            }

        ]
    }
    const options ={
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
    <div style={{height: '130px'}}>
        <Bar className='h-100'  data={data} options={options}></Bar>
    </div>
  )
}


