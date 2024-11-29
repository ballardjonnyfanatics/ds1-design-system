import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Clicked!'),
};