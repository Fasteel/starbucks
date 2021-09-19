import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import Link from "./Link";
import { Pin } from "./assets";

export default {
  title: `${APP_NAME}/Link`,
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Base = Template.bind({});
Base.args = {
  Icon: Pin,
  label: "Trouver un salon",
};
