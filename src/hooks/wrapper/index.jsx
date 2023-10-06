import React from 'react'
import { Provider } from "react-redux";
import configureStore from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";
// Stylesheets
import "../../assets/styles/index.css";
import "../../assets/styles/grid.css";
import "../../assets/styles/theme.css";


const Wrapper = ({children}) => {
  return (
    <React.StrictMode>
    <ConfigProvider locale={ru_RU}>
    <BrowserRouter>
    <Provider store={configureStore}>
      {children}
    </Provider>
    </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
  )
}

export default Wrapper