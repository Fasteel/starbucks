import styled from "@emotion/styled-base";
import { ButtonProps } from "./Button";
import { ButtonBase } from "./ButtonBase";
import theme from "./theme";
import { getRgbaStringValue } from "./theme/utils";

const StyledButton = styled(ButtonBase)`
  ${({ color }: ButtonProps) => `
    background-color: ${theme.colors[color]};
    color: white;
    border-color: ${theme.colors[color]};
    &:hover {
      background-color: ${getRgbaStringValue(theme.colors[color], 0.85)};
;
    }
  `}
`;

export const ButtonFilled = ({ label, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{label}</StyledButton>
);

export default ButtonFilled;
