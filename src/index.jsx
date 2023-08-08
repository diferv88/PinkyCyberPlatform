import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import Theme from "./theme/theme.jsx";
import { GlobalStyle } from "./style/globalStyle.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./components/routes/notification/store.ts";
import './index.styles.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <Theme>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Theme>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
