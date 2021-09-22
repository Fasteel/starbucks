import { ComponentMeta, ComponentStory } from "@storybook/react";
import { APP_NAME } from ".";
import LogoSB from "./LogoSB";
import NavigationWrapper from "./NavigationWrapper";

export default {
  title: `${APP_NAME}/LogoSB`,
  component: LogoSB,
  decorators: [
    (Story) => (
      <NavigationWrapper>
        <Story />
      </NavigationWrapper>
    ),
  ],
} as ComponentMeta<typeof LogoSB>;

const Template: ComponentStory<typeof LogoSB> = (args) => <LogoSB />;

export const Base = Template.bind({});
Base.args = {};
