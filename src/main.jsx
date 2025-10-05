import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import App from "./App";

const entryPoint=ReactDOM.createRoot(document.querySelector(".root"));

entryPoint.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);