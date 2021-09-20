import NavigationPrimary from "./NavigationPrimary";
import NavigationSecondary from "./NavigationSecondary";
import NavigationWrapper from "./NavigationWrapper";

const Navigation = () => (
  <NavigationWrapper>
    <NavigationPrimary
      items={[
        {
          label: "Menu",
          active: true,
        },
        {
          label: "Delivers",
        },
        {
          label: "Rewards",
        },
        {
          label: "Nutrition",
        },
        {
          label: "Carriere",
        },
      ]}
    />
    <NavigationSecondary />
  </NavigationWrapper>
);

export default Navigation;
