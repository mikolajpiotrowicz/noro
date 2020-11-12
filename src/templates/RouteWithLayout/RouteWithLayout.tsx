import * as React from "react";
import { Route } from "react-router-dom";
import { Header } from "../../components/Header";
import { Screen } from "./styled";
import { Footer } from "../../components/Footer";
// eslint-disable-next-line react/prop-types
export const RouteWithLayout = ({ component: Node, ...rest }) => {
  return (
    <Route
      {...rest}
      component={() => (
        <>
          {console.log({ ...rest }, Node)}
          <Screen>
            <Header />
            <Node />
          </Screen>
          <Footer />
        </>
      )}
    />
  );
};
