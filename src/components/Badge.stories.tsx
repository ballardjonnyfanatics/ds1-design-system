import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary', 
          'primary-inverse', 
          'transparent', 
          'accent', 
          'positive', 
          'positive-subtle', 
          'warning', 
          'warning-subtle', 
          'negative', 
          'negative-subtle'
        ],
      },
    },
    icon: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  icon: true,
  label: 'Primary Badge',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  variant: 'primary-inverse',
  icon: false,
  label: 'Primary Inverse Badge',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  icon: false,
  label: 'Transparent Badge',
};

export const Accent = Template.bind({});
Accent.args