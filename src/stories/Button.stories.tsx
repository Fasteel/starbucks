import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Starbucks/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Se connecter",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Rejoindre maintenant",
};

export const Green = Template.bind({});
Green.args = {
  color: "green",
  label: "Trouvez votre salon le plus proche",
};
