import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import "./../assets/scss/App.scss";
import { Routing } from "./Routing";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";
import { theme } from "../styled/theme";
import "react-slideshow-image/dist/styles.css";

export const history = createBrowserHistory();
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routing />
        </Router>
      </ThemeProvider>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
