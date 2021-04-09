import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import "./../assets/scss/App.scss";
import { Routing } from "./Routing";
import { ThemeProvider } from "styled-components";
import { theme } from "../styled/theme";
import "react-slideshow-image/dist/styles.css";
import i18 from "../services/i18n";
import { I18nextProvider } from "react-i18next";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <I18nextProvider i18n={i18}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routing />
          </Router>
        </ThemeProvider>
      </I18nextProvider>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
