import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// material-ui:
import { ThemeProvider } from "@material-ui/styles";
import theme from "./material-ui/theme";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// context:
import { AppProvider } from "./context/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
