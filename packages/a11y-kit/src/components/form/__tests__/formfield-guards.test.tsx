import { render } from '@testing-library/react';
import { FormField } from '../../form/FormField';
import { Input } from '../../form/Input';

describe('FormField dev-only guards', () => {
  it('warns when label is missing', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <FormField label={undefined}>
        <Input />
      </FormField>
    );
    expect(spy).toHaveBeenCalled();
    expect(String(spy.mock.calls[0][0])).toMatch(/missing "label"/i);
    spy.mockRestore();
  });

  it('warns when multiple controls are provided', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <FormField label="Bad">
        {[<Input key="a" />, <Input key="b" />]}
      </FormField>
    );
    const messages = spy.mock.calls.map(([m]) => String(m));
    expect(
      messages.some((m) => /expects exactly ONE form control/i.test(m))
    ).toBe(true);
    spy.mockRestore();
  });
});
