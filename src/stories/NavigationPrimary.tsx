import NavigationItem, { NavigationItemProps } from "./NavigationItem";

type NavigationPrimaryProps = {
  items: NavigationItemProps[];
};

const NavigationPrimary = ({ items }: NavigationPrimaryProps) => (
  <>
    {items.map((item) => (
      <NavigationItem {...item} />
    ))}
  </>
);

export default NavigationPrimary;
