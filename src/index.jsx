import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import Theme from "./theme/theme.jsx";
import { GlobalStyle } from "./style/globalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
