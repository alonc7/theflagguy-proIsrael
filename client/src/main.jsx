import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ScreenSizeProvider } from "./context/screenSize.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ScreenSizeProvider>
        <Router>
          <App />
        </Router>
      </ScreenSizeProvider>
    </AuthProvider>
  </React.StrictMode>
);