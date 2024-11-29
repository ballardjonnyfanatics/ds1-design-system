import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    label: { control: 'text' },
    image: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large', 'xl', 'two-xl', 'three-xl', 'four-xl', 'five-xl',] },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'large',
};

export const Xl = Template.bind({});
Xl.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'xl',
};

export const TwoXl = Template.bind({});
TwoXl.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'two-xl',
};

export const ThreeXl = Template.bind({});
ThreeXl.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'three-xl',
};

export const FourXl = Template.bind({});
FourXl.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'four-xl',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Jonny Ballard',
  image: false,
  size: 'five-xl',
};