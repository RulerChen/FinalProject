import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import App from "./App";
import { HookProvider } from "./hooks/useHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HookProvider>
      <App />
    </HookProvider>
  </React.StrictMode>
);
