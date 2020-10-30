import React from 'react';

import { Button } from './Button';

import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};
Primary.story = {
  name: 'Button story',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/9nHBh2ti9b1XJ5vCfUeRHZ/DesignOpsDemo?node-id=0%3A1',
    },
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
