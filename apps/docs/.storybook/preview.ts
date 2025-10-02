import type { Preview } from '@storybook/react';
import '@yokoworks/a11y-kit/theme'; // トークン読み込み（モノレポ解決OK前提）
const preview: Preview = {
  parameters: { controls: { expanded: true } },
};
export default preview;
