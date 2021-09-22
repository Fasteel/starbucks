import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import Navigation from "./Navigation";

export default {
  title: `${APP_NAME}/Navigation`,
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation />;

export const Base = Template.bind({});
Base.args = {};
