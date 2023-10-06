import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import { setColor, setMode } from "../redux/actions/ThemeActions";

// http://idealprojectuz.jprq.live/api
const MainLayout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  // const themeReducer = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const modeClass = localStorage.getItem("themeMode");
    const colorClass = localStorage.getItem("themeColor");

    dispatch(setMode(modeClass));
    dispatch(setColor(colorClass));
  }, [dispatch]);

  return (
  
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <Sidebar />
        <div className="layout-content">
          <Topbar />
          <main className="layout-main">
          <Outlet/>
          </main>
        </div>
      </div>
   
  );
}

export default MainLayout;
