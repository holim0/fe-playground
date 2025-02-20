import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta

const Template: StoryFn = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};
