import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import React from "react";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        {" "}
        <a
          href="https://github.com/include-JoannaLopez/react-app.git"
          target="_blank"
        >
          Open-source code
        </a>
        , by Joanna Lopez
      </footer>
    </div>
  </StrictMode>
);
