import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
    '../../../packages/**/src/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  viteFinal: async (cfg) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    cfg.resolve ??= {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
    };
    return cfg;
  },
};

export default config;
