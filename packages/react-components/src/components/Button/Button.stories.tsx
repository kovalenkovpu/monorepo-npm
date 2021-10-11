import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '..';

export default {
  title: 'React Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

const Primary = Template.bind({});

Primary.args = {
  buttonType: 'primary',
  children: 'Button Primary',
};

export { Primary };