import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import NavigationSecondary from "./NavigationSecondary";
import NavigationWrapper from "./NavigationWrapper";

export default {
  title: `${APP_NAME}/NavigationSecondary`,
  component: NavigationSecondary,
  decorators: [
    (Story) => (
      <NavigationWrapper>
        <Story />
      </NavigationWrapper>
    ),
  ],
} as ComponentMeta<typeof NavigationSecondary>;

const Template: ComponentStory<typeof NavigationSecondary> = (args) => (
  <NavigationSecondary />
);

export const Base = Template.bind({});
Base.args = {};
