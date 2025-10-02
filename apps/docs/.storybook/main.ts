import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
};
export default config;
