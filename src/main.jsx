import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModeContextProvider from "./context/modeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </React.StrictMode>
);
