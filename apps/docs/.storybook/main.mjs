import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../../packages/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (cfg) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    cfg.resolve ??= {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      '@yokoworks/a11y-kit': path.resolve(
        __dirname,
        '../../../packages/a11y-kit/src'
      ),
      '@yokoworks/a11y-kit/theme': path.resolve(
        __dirname,
        '../../../packages/a11y-kit/src/theme/index.ts'
      ),
    };
    return cfg;
  },
};

export default config;
