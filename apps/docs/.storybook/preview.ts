import type { Preview } from '@storybook/react';
import '@yokoworks/a11y-kit/theme';
import '@yokoworks/a11y-kit/theme/style.css';

const preview: Preview = {
  parameters: { controls: { expanded: true } },
};
export default preview;
