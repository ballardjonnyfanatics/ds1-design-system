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
  icon: false,
  label: 'Label',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  variant: 'primary-inverse',
  icon: false,
  label: 'Label',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  icon: false,
  label: 'Label',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  icon: false,
  label: 'Label',
};

export const Positive = Template.bind({});
Positive.args = {
  variant: 'positive',
  icon: false,
  label: 'Label',
};

export const positiveSubtle = Template.bind({});
positiveSubtle.args = {
  variant: 'positive-subtle',
  icon: false,
  label: 'Label',
};

export const warning = Template.bind({});
warning.args = {
  variant: 'warning',
  icon: false,
  label: 'Label',
};

export const warningSubtle = Template.bind({});
warningSubtle.args = {
  variant: 'warning-subtle',
  icon: false,
  label: 'Label',
};

export const negative = Template.bind({});
negative.args = {
  variant: 'negative',
  icon: false,
  label: 'Label',
};

export const negativeSubtle = Template.bind({});
negativeSubtle.args = {
  variant: 'negative-subtle',
  icon: false,
  label: 'Label',
};