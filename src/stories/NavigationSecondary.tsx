import styled from "styled-components";
import { Pin } from "./assets";
import Button from "./Button";
import ButtonFilled from "./ButtonFilled";
import Link from "./Link";

const Wrapper = styled.div`
  height: 42px;
  display: flex;
`;

const NavigationSecondary = () => (
  <Wrapper>
    <Link Icon={Pin} label="Trouver un salon" />
    <Button label="Se connecter" color="secondary" />
    <ButtonFilled label="Rejoindre maintenant" color="secondary" />
  </Wrapper>
);

export default NavigationSecondary;
