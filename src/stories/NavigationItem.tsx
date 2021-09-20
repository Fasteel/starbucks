import styled from "styled-components";
import theme from "./theme";

export type NavigationItemProps = {
  label?: string;
  onClick?: () => void;
  active?: boolean;
};

const ActiveIndicator = styled.span`
  background-color: ${theme.colors.greenDarker};
  height: 5px;
  width: 100%;
  display: inline-block;
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.li<{ active?: boolean }>`
  position: relative;
  list-style: none;
  font-family: "${theme.fonts.primary}", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  margin-right: 2.4rem;
  margin-bottom: 0;
  height: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: rgb(31, 31, 31);
  letter-spacing: 0.12rem;
  transition: color 0.5s;
  font-size: 0.9rem;
  height: 100%;
  &:hover {
    color: ${theme.colors.greenDarker};
  }
`;

const NavigationItem = ({ label, onClick, active }: NavigationItemProps) => (
  <Wrapper onClick={onClick} active={active}>
    <Link>{label}</Link>
    {active && <ActiveIndicator />}
  </Wrapper>
);

export default NavigationItem;
