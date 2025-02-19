import { Meta, StoryFn } from '@storybook/react';
import Select from './index';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};

export default meta

const Template: StoryFn = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
