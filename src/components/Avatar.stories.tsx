import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    label: { control: 'text' },
    authenticated: { control: 'boolean' },
    image: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'User Name',
  authenticated: false,
  image: false,
};

export const AuthenticatedWithImage = Template.bind({});
AuthenticatedWithImage.args = {
  label: 'User Name',
  authenticated: true,
  image: true,
};

export const AuthenticatedWithoutImage = Template.bind({});
AuthenticatedWithoutImage.args = {
  label: 'User Name',
  authenticated: true,
  image: false,
};

export const UnauthenticatedWithImage = Template.bind({});
UnauthenticatedWithImage.args = {
  label: 'User Name',
  authenticated: false,
  image: true,
};