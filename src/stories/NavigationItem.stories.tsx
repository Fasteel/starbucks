import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import NavigationItem from "./NavigationItem";

export default {
  title: `${APP_NAME}/NavigationItem`,
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} />
);

export const Base = Template.bind({});
Base.args = {
  label: "Menu",
};
