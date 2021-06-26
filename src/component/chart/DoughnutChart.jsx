import React from 'react'
import {Doughnut} from 'react-chartjs-2'

export const DoughnutChart = (props) => {
  
  const data={
    labels: [
      
      'Blue',
   
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [70,30],
      backgroundColor: [
        '#3953d7',"#9fa0a6"
       
      ],
      
    }],

    
  }
 
  const height=93
  const width=181
  // Chart.defaults.global.display = false;
  return (
    <>
      <Doughnut data={data}
    height={height}
    width={width}
  options={{
    
    responsive:false,
    cutout:21, plugins: {
      legend: {
        display: false
      }
    }
    
    
  }}
  
  />
    </>
  )
}
