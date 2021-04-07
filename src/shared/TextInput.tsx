import * as React from "react";
import styled from "styled-components";
import { GenericInput } from "../styled/reusable";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Error = styled.div`
  color: ${(props) => props.theme.colors.gradient2};
  font-size: 0.75em;
  margin: 0.5em 0;
`;
const Label = styled.label`
  color: ${(props) => props.theme.colors.balck};
  font-size: 0.75em;
  margin: 1em 0 0.5em;
  user-select: none;
`;
export const TextInput = ({
  field,
  form: { touched, errors },
  ...props
}: any) => (
  <>
    <Label htmlFor={field.name}>{props.displayName}</Label>

    <InputWrapper className="input-wrapper">
      <GenericInput
        placeholder={props.displayName}
        autoComplete={props.autoCompleteOff ? "new-password" : null}
        type={"text"}
        error={touched[field.name] && errors[field.name]}
        {...field}
        {...props}
      />
    </InputWrapper>
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </>
);
