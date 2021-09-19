import { ComponentStory, ComponentMeta } from "@storybook/react";
import { APP_NAME } from ".";

import { Button } from "./Button";

export default {
  title: `${APP_NAME}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  color: "green",
  label: "Trouvez votre salon le plus proche",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Trouvez votre salon le plus proche",
};
