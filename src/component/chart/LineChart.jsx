import React from 'react'

import { Line } from 'react-chartjs-2'

export const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "#ed646452",
            borderColor: "#f1141470",
            tension: 0.5
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774",
            tension: 0.5
          }
        ]
      };
    return (
        <div>
            <Line data={data} height={200}  width={500} options={{
    
    responsive:false,aspectRation:'1',plugins: {
      legend: {
        display: false
      }
    }
  
}}/>
        </div>
    )
}
