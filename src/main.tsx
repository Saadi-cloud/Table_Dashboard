import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ButtonAppBar from "./IDN.tsx";
import ResponsiveGrid from "./Responsive.tsx";

// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ButtonAppBar/> */}
    <ResponsiveGrid/>
    
  </React.StrictMode>
);
