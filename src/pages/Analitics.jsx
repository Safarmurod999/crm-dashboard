import React from 'react'
import ChartCircle from '../components/chartcircle/ChartCircle';
import LineChart from '../components/lineChart/LineChart';

let options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

const Analitics = () => {
  return (
    <div className='mt-20'>
      <div className='flex mb-10'>
      <ChartCircle series={[45,55]} titles={['students', 'Assistants']}/>
      <ChartCircle series={[60, 40]} titles={['girls', 'boys']}/>
    
      </div>
      <>
        <LineChart/>
      </>
    </div>
  )
}

export default Analitics