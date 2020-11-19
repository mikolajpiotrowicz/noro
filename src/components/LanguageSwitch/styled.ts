import styled from 'styled-components';

export const LanguageToggle = styled.button<{ isActive: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  ${(props) => props.isActive && "font-weight: 700;"}

  &:focus {
    border: none;
    outline: none;
  }
`;
