import styled from "styled-components";
import theme from "./theme";

type NavigationItemProps = {
  label?: string;
  onClick?: () => void;
};

const Wrapper = styled.li`
  list-style: none;
  font-family: "${theme.fonts.primary}", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  margin-right: 2.4rem;
`;

const Link = styled.a`
  display: inline-block;
  color: rgb(31, 31, 31);
  letter-spacing: 0.12rem;
  transition: color 0.5s;
  font-size: 0.9rem;
  &:hover {
    color: ${theme.colors.greenDarker};
  }
`;

const NavigationItem = ({ label, onClick }: NavigationItemProps) => (
  <Wrapper onClick={onClick}>
    <Link>{label}</Link>
  </Wrapper>
);

export default NavigationItem;
