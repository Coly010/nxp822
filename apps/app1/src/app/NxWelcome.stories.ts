import type { Meta, StoryObj } from '@storybook/vue3';
import NxWelcome from './NxWelcome.vue';

const meta: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    title: 'title',
  },
};
