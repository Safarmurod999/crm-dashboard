import ReactApexChart from "react-apexcharts";



const ChartCircle = ({series, titles}) => {

    let option = {
    
      series: series,
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: titles,
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
      },
    
    
    };
  



    return (
      <ReactApexChart options={option.options} series={option.series} type="pie" width={380} />
      
    )
  
}


export default ChartCircle