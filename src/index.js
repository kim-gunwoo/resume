import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import mixin from "styles/mixin";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={{ ...theme, ...mixin }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
