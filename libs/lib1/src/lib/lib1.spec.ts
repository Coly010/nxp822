import { mount } from '@vue/test-utils';
import Lib1 from './lib1.vue';

describe('Lib1', () => {
  it('renders properly', () => {
    const wrapper = mount(Lib1, {});
    expect(wrapper.text()).toContain('Welcome to Lib1');
  });
});
