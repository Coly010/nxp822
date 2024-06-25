import type { Meta, StoryObj } from '@storybook/vue3';
import App from './App.vue';

const meta: Meta<typeof App> = {
  component: App,
  title: 'App',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};
