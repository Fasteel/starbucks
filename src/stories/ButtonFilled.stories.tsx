import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from ".";

import { ButtonFilled } from "./Button";

export default {
  title: `${APP_NAME}/ButtonFilled`,
  component: ButtonFilled,
} as ComponentMeta<typeof ButtonFilled>;

const Template: ComponentStory<typeof ButtonFilled> = (args) => (
  <ButtonFilled {...args} />
);

export const Green = Template.bind({});
Green.args = {
  label: "Se connecter",
  color: "green",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Se connecter",
  color: "secondary",
};
