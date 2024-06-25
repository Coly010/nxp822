import type { Meta, StoryObj } from '@storybook/vue3';
import lib1 from './lib1.vue';

const meta: Meta<typeof lib1> = {
  component: lib1,
  title: 'lib1',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};
