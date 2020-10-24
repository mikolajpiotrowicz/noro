import { Header1 } from "./typography";
import styled from "styled-components";

export const SectionHeading = styled.div`
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.gray3};
  ${Header1} {
    text-align: center;
  }
`;
