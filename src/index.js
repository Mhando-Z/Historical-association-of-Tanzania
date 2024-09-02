import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="211925224229-it6ci0n1csp31okrvbrg9rvdfev5fgne.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);

reportWebVitals();
