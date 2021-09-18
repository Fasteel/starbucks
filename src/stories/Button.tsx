import styled from "styled-components";
import theme from "./theme";
import type { Colors } from "./theme";
import { getRgbaStringValue } from "./theme/utils";
import { ButtonBase } from "./ButtonBase";
import ButtonFilled from "./ButtonFilled";

export interface ButtonProps {
  label?: string;
  color: keyof Colors;
  onClick?: () => void;
}

const StyledButton = styled(ButtonBase)`
  ${({ color }: ButtonProps) => `
    background-color: white;
    color: ${theme.colors[color]};
    border-color: ${theme.colors[color]};
    &:hover {
      background-color: ${getRgbaStringValue(theme.colors[color], 0.09)};
    }
  `}
`;

export const Button = ({ label, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{label}</StyledButton>
);

export default Button;

export { ButtonFilled };
