import styled from "styled-components";
import theme from "./theme";

type NavigationItemProps = {
  label?: string;
  onClick?: () => void;
  active?: boolean;
};

const Wrapper = styled.li<{ active?: boolean }>`
  list-style: none;
  font-family: "${theme.fonts.primary}", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  margin-right: 2.4rem;
  height: 100%;
  ${({ active }) => active && `border-bottom: 5px solid ${theme.colors.green};`}
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
  </Wrapper>
);

export default NavigationItem;
