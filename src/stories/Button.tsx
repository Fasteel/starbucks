import styled from "styled-components";
import theme from "./theme";
import type { Colors } from "./theme";

interface ButtonProps {
  label?: string;
  color: keyof Colors;
  onClick?: () => void;
}

const BaseStyledButton = styled.button`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
  padding: 7px 16px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
  }
`;

const StyledButton = styled(BaseStyledButton)`
  ${({ color }: ButtonProps) => {
    if (color === "primary") {
      return `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        &:hover {
          background-color: rgba(0, 0, 0, 0.06);
        }
      `;
    }

    if (color === "secondary") {
      return `
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
      `;
    }

    return `
      background-color: white;
      color: ${theme.colors[color]};
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    `;
  }}
`;

export const Button = ({ label, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{label}</StyledButton>
);
