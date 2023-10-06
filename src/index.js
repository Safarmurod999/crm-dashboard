import React from "react";
import ReactDOM from 'react-dom/client';
import Root from "./root/Root"
import Wrapper from "./hooks/wrapper";


ReactDOM.createRoot(document.getElementById("root")).render(

  <Wrapper>
    <Root/>
  </Wrapper>
  );

