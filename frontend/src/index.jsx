import React from "react";
import ReactDOM from "react-dom/client";

import { HookProvider } from "./hooks/useHook";
import App from "./App";

import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HookProvider>
      <App />
    </HookProvider>
  </React.StrictMode>
);
