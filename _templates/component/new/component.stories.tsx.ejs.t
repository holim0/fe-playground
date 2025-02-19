---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---

import { Meta, StoryFn } from '@storybook/react';
import <%= name %> from './index';

const meta: Meta<typeof <%= name %>> = {
  title: '<%= name %>',
  component: <%= name %>,
};

export default meta

const Template: StoryFn = (args) => <<%= name %> {...args} />;

export const Default = Template.bind({});
Default.args = {};
