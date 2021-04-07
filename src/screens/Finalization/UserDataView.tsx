import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Product } from "../../models/WooComerce";
import { UserDataWrapper, ContentWrapper } from "./styled";

const FinalizationNotConnected: React.FC<RouteComponentProps<
  null,
  null,
  { product: Product }
>> = ({ location }) => {
  return (
    <UserDataWrapper>
      <ContentWrapper>asdasdasdasdasd</ContentWrapper>
    </UserDataWrapper>
  );
};

export const Finalization = withRouter(FinalizationNotConnected);
