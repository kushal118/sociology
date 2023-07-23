import React from "react";
import ReactDOM from  "react-dom/client";
import "./index.css";
import App from "./App";
import authReducer from  "./state";
import { configureStore } from "@reduxjs/toolkit";
import {Provi}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
          <App />
    </React.StrictMode>
  );