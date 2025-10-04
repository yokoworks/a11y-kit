import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from './Input';
import { TextArea } from './TextArea';

const meta: Meta<typeof FormField> = {
  title: 'Forms/FormField',
  component: FormField,
  args: {
    label: 'Email',
    helper: 'We never share your email.',
    error: '',
    invalid: false,
    required: false,
  },
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  args: { error: 'This field is required', invalid: true, required: true },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <Input type="text" />
      </FormField>
    </div>
  ),
};

export const TextAreaExample: Story = {
  args: {
    label: 'Message',
    helper: 'Max 500 chars',
    error: '',
    invalid: false,
  },
  render: (args) => (
    <div style={{ maxWidth: 480 }}>
      <FormField {...args}>
        <TextArea rows={4} placeholder="Tell us more..." />
      </FormField>
    </div>
  ),
};

export const MissingLabel_DevWarning: Story = {
  args: { label: '', helper: 'Helper text' },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <Input type="text" />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Intentionally missing `label` to show the dev console warning from a11y guards.',
      },
    },
  },
};

export const MultipleChildren_DevWarning: Story = {
  args: { label: 'Two controls (bad)' },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <>
          <Input type="text" />
          <TextArea rows={2} />
        </>
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This intentionally renders two controls to trigger a dev-only guard (expects exactly ONE child).',
      },
    },
  },
};

export const HelperThenError_OrderCheck: Story = {
  args: {
    label: 'Email',
    helper: 'We never share your email.',
    error: 'Required',
    invalid: true,
  },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checks that `aria-describedby` lists helper first, then error.',
      },
    },
  },
};
