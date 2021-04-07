import * as React from "react";
import { Form, Formik, Field } from "formik";
import { TextInput } from "../../shared/TextInput";

import * as yup from "yup";
import { RouteComponentProps, withRouter } from "react-router";
import { Product } from "../../models/WooComerce";
import {
  BuyButton,
  SectionHeading,
  ColumnWrapper,
  FormRow,
} from "../../styled/reusable";
import { UserDataWrapper, ContentWrapper } from "./styled";
import { Header1 } from "../../styled/typography";

yup.setLocale({
  mixed: {
    default: "Niepoprawne dane",
    required: "Pole jest wymagane",
    notType: (ref) => {
      switch (ref.type) {
        case "date":
          return "Niepoprawny format daty, podaj datę w formacie DD-MM-RRRR";

        case "email":
          return "Niepoprawny format daty, podaj datę w formacie DD-MM-RRRR";

        default:
          return "Pole jest wymagane";
      }
    },
    number: {
      min: "Podana wartość jest mniejsza niż ${min}",
      max: "POdana wartość jest mniejsza niż ${max}",
    },
    string: {
      email: "niepoprawny emial",
    },
  },
});

export const deliveryValidationSchema = yup.object().shape({
  email: yup.string().email("Email must be valid email address.").required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  address_1: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  postcode: yup.string().required(),
  country: yup.string().required(),
  phone: yup.string().required(),
});

const UserDataNotConnected: React.FC<RouteComponentProps<
  null,
  null,
  { product: Product }
>> = ({ location }) => {
  return (
    <UserDataWrapper>
      <SectionHeading>
        <Header1>Delivery Data</Header1>
      </SectionHeading>
      <ContentWrapper>
        <Formik
          validationSchema={deliveryValidationSchema}
          initialValues={{}}
          onSubmit={(v) => console.log(v)}
        >
          {({ setFieldValue }) => (
            <Form>
              <FormRow>
                <ColumnWrapper>
                  <Field
                    displayName="First Name"
                    name="first_name"
                    component={TextInput}
                  />
                </ColumnWrapper>
                <ColumnWrapper>
                  <Field
                    displayName="Last Name"
                    name="last_name"
                    component={TextInput}
                  />
                </ColumnWrapper>
              </FormRow>

              <FormRow>
                <ColumnWrapper>
                  <Field displayName="City" name="city" component={TextInput} />
                </ColumnWrapper>
                <ColumnWrapper>
                  <Field
                    displayName="State"
                    name="state"
                    component={TextInput}
                  />
                </ColumnWrapper>
              </FormRow>
              <FormRow>
                <ColumnWrapper>
                  <Field
                    displayName="Post Code"
                    name="postcode"
                    component={TextInput}
                  />
                </ColumnWrapper>
                <ColumnWrapper>
                  <Field
                    displayName="Country"
                    name="country"
                    component={TextInput}
                  />
                </ColumnWrapper>
              </FormRow>

              <Field
                displayName="Address"
                name="address_1"
                component={TextInput}
              />

              <Field displayName="E-mail" name="email" component={TextInput} />
              <Field displayName="Phone" name="phone" component={TextInput} />
              <BuyButton type="submit">Buy</BuyButton>
            </Form>
          )}
        </Formik>
      </ContentWrapper>
    </UserDataWrapper>
  );
};

export const UserDataView = withRouter(UserDataNotConnected);
