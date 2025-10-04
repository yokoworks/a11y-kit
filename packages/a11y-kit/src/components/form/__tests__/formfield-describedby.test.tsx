import { render, screen } from '@testing-library/react';
import { FormField } from '../../form/FormField';
import { Input } from '../../form/Input';

describe('FormField aria-describedby order', () => {
  it('concatenates helper then error (helper first, error second)', () => {
    render(
      <div>
        <FormField
          id="t"
          label="Email"
          helper="Helper text"
          error="Required"
          invalid
        >
          <Input type="email" />
        </FormField>
      </div>
    );

    const input = screen.getByLabelText('Email') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const describedby = input.getAttribute('aria-describedby');
    expect(describedby).toBe('t-helper t-error'); // helper → error の順
  });
});
