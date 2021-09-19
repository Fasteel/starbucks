import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import NavigationItem from "./NavigationItem";
import NavigationWrapper from "./NavigationWrapper";

export default {
  title: `${APP_NAME}/NavigationItem`,
  component: NavigationItem,
  decorators: [
    (Story) => (
      <NavigationWrapper>
        <Story />
      </NavigationWrapper>
    ),
  ],
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
);

export const Base = Template.bind({});
Base.args = {
  label: "Menu",
};

export const Active = Template.bind({});
Active.args = {
  label: "Menu",
  active: true,
};
