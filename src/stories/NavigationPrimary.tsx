import LogoSB from "./LogoSB";
import NavigationItem, { NavigationItemProps } from "./NavigationItem";

type NavigationPrimaryProps = {
  items: NavigationItemProps[];
};

const NavigationPrimary = ({ items }: NavigationPrimaryProps) => (
  <>
    <div style={{ marginRight: "4rem" }}>
      <LogoSB />
    </div>
    {items.map((item) => (
      <NavigationItem {...item} />
    ))}
  </>
);

export default NavigationPrimary;
