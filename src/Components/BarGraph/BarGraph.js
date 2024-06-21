import React from 'react'
import { BarElement, CategoryScale, Chart as ChartJs, Legend, LinearScale, Tooltip, } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)

export default function BarGraph() {
    const data = {
        labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
        datasets: [
            {
                label: "Weekly revenue",
                backgroundColor: 'blue',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [100, 80, 60, 100, 60,80,85,60,100],
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

    const barPattern = {
        id : "barPattern",
        beforeDatasetsDraw( chart, args, pluginOptions){
            const {ctx, chartArea: {top, bottom, height},scale:{x,y}} =chart;
            ctx.save();
            const width = chart.getDatasetMeta(0).data[0].width;
            chart.getDatasetMeta(0).data.forEach((dataPoint, index) =>{
                ctx.fillRect(x.getPixelForValue(index)-width/2, top,width, height-0.5)
            })
        }
    }
    
  return (
    <div style={{height: '170px'}}>
        <Bar className='w-100' data={data} options={options} plugins={{barPattern}}></Bar>
    </div>
  )
}
