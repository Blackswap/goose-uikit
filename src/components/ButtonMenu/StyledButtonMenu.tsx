import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;
  border-radius: ${({ theme }) => theme.radii.small};

  & > button + button,
  & > a + a {
    margin-left: 0px; // To avoid focus shadow overlap
  }

  & > button {
    box-shadow: none !important;
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: ${({ theme }) => theme.radii.small};
      border-bottom-left-radius: ${({ theme }) => theme.radii.small};
    }
    &:last-child {
      border-top-right-radius: ${({ theme }) => theme.radii.small};
      border-bottom-right-radius: ${({ theme }) => theme.radii.small};
    }

    &:active {
      box-shadow: none !important;
    }
  }
`;

export default StyledButtonMenu;
