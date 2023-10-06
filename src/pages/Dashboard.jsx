import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//===== Data ======/
import statusCardData from "../assets/commonData/status_card_data.json";
import { chartOptions, colorOptions } from "../assets/commonData/ChartValues";
import {

  orderStatus,
  TopAssistants,
} from "../assets/commonData/userlist";

//========= Components =========/
import StatusCard from "../components/Statuscard/StatusCard";
import Table from "../components/Table/Table";

/* =============== Function to Render Customer Table Head ===================== */
const renderUserHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render Customer Table Body ===================== */
const renderUserBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);


const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  // const themeReducer = useSelector((state) => state);
  return (
    <section>
      <h2 className="page-header">Dashboard</h2>
      {/* Main Layout */}
      <div className="row max-[420px]:flex-col">
        {/* Status Cards */}
        <div className="col-6">
          <div className="row">
            {statusCardData
              ? statusCardData.map((item, index) => (
                  <div className="col-6" key={index}>
                    <StatusCard {...item} />
                  </div>
                ))
              : ""}
          </div>
        </div>
        {/* Chart */}
        <div className="col-6">
          <div className="card full-height">
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
        {/* Top Customers Table */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>Top Assistants</h3>
            </div>
            <div className="card-body">
              <Table
                headData={TopAssistants.head}
                renderHead={(item, index) => renderUserHead(item, index)}
                bodyData={TopAssistants.body}
                renderBody={(item, index) => renderUserBody(item, index)}
              />
            </div>
            <div className="card-footer">
              <Link to="/assistants">View All</Link>
            </div>
          </div>
        </div>
      
     
      </div>
    </section>
  );
};

export default Dashboard;
