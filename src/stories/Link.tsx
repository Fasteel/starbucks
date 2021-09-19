import styled from "styled-components";
import { IconProps } from "./assets";
import theme from "./theme";

type LinkProps = {
  onClick?: () => void;
  label?: string;
  Icon?: React.FunctionComponent<IconProps>;
};

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.7rem;
`;

const Label = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
  font-family: "${theme.fonts.primary}", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.014;
`;

const Link = ({ onClick, Icon, label }: LinkProps) => (
  <LinkWrapper onClick={onClick}>
    <IconWrapper>
      {Icon && <Icon width="22px" height="22px" test-id="icon" />}
    </IconWrapper>
    <Label test-id="label">{label}</Label>
  </LinkWrapper>
);

export default Link;
