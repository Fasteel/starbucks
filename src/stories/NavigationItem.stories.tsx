import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import NavigationItem from "./NavigationItem";

export default {
  title: `${APP_NAME}/NavigationItem`,
  component: NavigationItem,
  decorators: [
    (Story) => (
      <div style={{ height: "100px", display: "inline-block" }}>
        <Story />
      </div>
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
