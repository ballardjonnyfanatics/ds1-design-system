import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'accent', 'negative'] },
    size: { control: 'select', options: ['large', 'medium', 'small', 'extra-small'] },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a button component that can be used in various sizes and variants.',
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  variant: 'primary',
  size: 'large',
  onClick: () => alert('Clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Label',
  variant: 'secondary',
  size: 'large',
  onClick: () => alert('Clicked!'),
};

export const Large = Template.bind({});
Large.args = {
  label: 'Label',
  variant: 'primary',
  size: 'large',
  onClick: () => alert('Clicked!'),
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Label',
  variant: 'primary',
  size: 'medium',
  onClick: () => alert('Clicked!'),
};

export const Small = Template.bind({});
Small.args = {
  label: 'Label',
  variant: 'primary',
  size: 'small',
  onClick: () => alert('Clicked!'),
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  label: 'Label',
  variant: 'primary',
  size: 'extra-small',
  onClick: () => alert('Clicked!'),
};