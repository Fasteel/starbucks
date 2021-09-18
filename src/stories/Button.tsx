import styled from "styled-components";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button`
  ${({ primary }: Partial<ButtonProps>) =>
    primary
      ? `
    background-color: white;
    color: black;
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }
    `
      : `
    background-color: black;
    color: white;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  `}

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
    transform: scale(.85);
  }
`;

export const Button = ({ label, ...rest }: ButtonProps) => (
  <StyledButton {...rest}>{label}</StyledButton>
);
