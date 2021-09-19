import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import NavigationPrimary from "./NavigationPrimary";
import NavigationWrapper from "./NavigationWrapper";

export default {
  title: `${APP_NAME}/NavigationPrimary`,
  component: NavigationPrimary,
  decorators: [
    (Story) => (
      <NavigationWrapper>
        <Story />
      </NavigationWrapper>
    ),
  ],
} as ComponentMeta<typeof NavigationPrimary>;

const Template: ComponentStory<typeof NavigationPrimary> = (args) => (
  <NavigationPrimary {...args} />
);

export const Base = Template.bind({});
Base.args = {
  items: [
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
  ],
};
