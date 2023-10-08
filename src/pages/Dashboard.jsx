import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactApexChart from 'react-apexcharts';

//===== Data ======/
// import statusCardData from "../assets/commonData/status_card_data.json";
import { chartOptions, colorOptions } from "../assets/commonData/ChartValues";
// import {
//   TopAssistants,
// } from "../assets/commonData/userlist";

//========= Components =========/
// import StatusCard from "../components/Statuscard/StatusCard";
// import Table from "../components/Table/Table";

/* =============== Function to Render Customer Table Head ===================== */
// const renderUserHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render Customer Table Body ===================== */
// const renderUserBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.username}</td>
//     <td>{item.order}</td>
//     <td>{item.price}</td>
//   </tr>
// );


const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  // const themeReducer = useSelector((state) => state);

  // ===== Chart Settings ===== //

  const [chartData1] = useState({
    series: [50, 5, 20, 25],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['1 Guardian', '2 Guardians', '3 Guardians', '3+ Guardians'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  const [chartData2, setChartData2] = useState({
    series: [
      {
        name: 'Data / Time',
        type: 'column',
        data: [],
      },
      {
        name: 'User Count',
        type: 'line',
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 2, 10, 56, 80, 49, 4],
      },
      title: {
        text: 'User Count',
        align: 'left',
        offsetX: 110,
      },
      xaxis: {
        categories: ['3- oy', 'Utgan oy', 'Hozirgi oy', '12:00 AM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM', '12:00 PM'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB',
          },
          labels: {
            style: {
              colors: '#008FFB',
            },
          },
          title: {
            text: 'Income (thousand crores)',
            style: {
              color: '#008FFB',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: 'Operating Cashflow (thousand crores)',
            style: {
              color: '#00E396',
            },
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019',
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: 'Revenue (thousand crores)',
            style: {
              color: '#FEB019',
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft',
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  const generateRandomData = () => {
    const randomData = {
      data: [],
      userCount: [],
      xAxisCategories: [],
    };

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    for (let i = 1; i <= currentDate.getDate(); i++) {
      randomData.data.push((Math.random() * 2000).toFixed(200));
      randomData.userCount.push(Math.floor(Math.random() * 1500));
      randomData.xAxisCategories.push(`${i}-${currentMonth}`);
    }

    return randomData;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = generateRandomData();
      setChartData2((prevChartData2) => ({
        ...prevChartData2,
        series: [
          {
            ...prevChartData2.series[0],
            data: randomData.data,
          },
          {
            ...prevChartData2.series[1],
            data: randomData.userCount,
          },
        ],
        options: {
          ...prevChartData2.options,
          xaxis: {
            ...prevChartData2.options.xaxis,
            categories: randomData.xAxisCategories,
          },
        },
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="page-header">Dashboard</h2>
      {/* Main Layout */}
      <div className="row max-[420px]:flex-col">
        {/* Status Cards */}
        <div className="col-6">
          <div className="row">

            <ReactApexChart options={chartData1.options} series={chartData1.series} type='pie' width={676.892} height={356} />
          </div>
        </div>
        {/* Chart */}
        <div className="col-6">
          <div className="card full-height">
            {/* <Chart
              options={
                themeReducer.mode === "theme-mode-dark"
                  ? {
                    ...chartOptions.options,
                    theme: { mode: "dark" },
                    colors: colorOptions[themeReducer.color],
                  }
                  : {
                    ...chartOptions.options,
                    theme: { mode: "light" },
                    colors: colorOptions[themeReducer.color],
                  }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            /> */}

            <ul className='EmployesListRow'>
              <hr />
              <li className='EmployesListCol'>Oylish ishchilardiki 60 000 000 so’m buldi</li>
              <hr />
              <li className='EmployesListCol'>Avans berilgan jami 10 000 000 so’m</li>
              <hr />
              <li className='EmployesListCol'>Jaremalar jami 500 000 so’m</li>
              <hr />
              <li className='EmployesListCol'>Mukofot jami 10 000 000 so’m </li>
              <hr />
            </ul>
          </div>
        </div>
        {/* Top Customers Table */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>Top Workers</h3>
            </div>
            <div className="card-body">
              {/* <Table
                headData={TopAssistants.head}
                renderHead={(item, index) => renderUserHead(item, index)}
                bodyData={TopAssistants.body}
                renderBody={(item, index) => renderUserBody(item, index)}
              /> */}

              <Chart
                options={
                  themeReducer.mode === "theme-mode-dark"
                    ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                      colors: colorOptions[themeReducer.color],
                    }
                    : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                      colors: colorOptions[themeReducer.color],
                    }
                }
                series={chartOptions.series}
                type="line"
                height="100%"
              />
            </div>
         
          </div>
        </div>


      </div>
    </section>
  );
};

export default Dashboard;
