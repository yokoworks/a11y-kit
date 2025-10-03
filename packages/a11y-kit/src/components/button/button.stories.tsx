import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button' },
  parameters: { controls: { expanded: true } },
  // expose aria-* to Controls
  argTypes: {
    'aria-label': { control: 'text', name: 'aria-label' },
    'aria-labelledby': { control: 'text', name: 'aria-labelledby' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };

/** Intentionally icon-only (no accessible name at first) */
export const IconOnly_Playground: Story = {
  args: {
    children: <span aria-hidden>★</span>,
    'aria-label': '',
    'aria-labelledby': '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only button playground. Leave `aria-label` empty to see the dev console warning. Fill it to satisfy both the a11y guard and axe.',
      },
    },
  },
};
