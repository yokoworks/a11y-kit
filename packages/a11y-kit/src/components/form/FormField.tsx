import * as React from 'react';
import { useAutoId } from '../../utils/id';
import { ErrorText } from './ErrorText';
import { HelperText } from './HelperText';
import { Label } from './Label';
import { guardFormFieldBasics } from '../../a11y/guards';

type FormFieldProps = {
  id?: string;
  label: React.ReactNode;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  invalid?: boolean;
  required?: boolean;
  children: React.ReactElement; // <Input/> or <TextArea/>
  className?: string;
};

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { id, label, helper, error, invalid, required, children, className },
    ref
  ) => {
    // Dev-only guard rails
    guardFormFieldBasics({ label, children });

    const baseId = id ?? useAutoId('field');
    const inputId = `${baseId}-input`;
    const labelId = `${baseId}-label`;
    const helperId = helper ? `${baseId}-helper` : undefined;
    const errorId = error ? `${baseId}-error` : undefined;

    // 子 (Input/TextArea) に id / aria-* を注入
    const describedBy =
      [helperId, errorId].filter(Boolean).join(' ') || undefined;
    const child = React.cloneElement(children, {
      id: inputId,
      'aria-labelledby': labelId,
      'aria-describedby': describedBy,
      'aria-invalid': invalid || !!error || undefined,
      'aria-required': required || undefined,
    });

    return (
      <div
        ref={ref}
        className={['a11y-field', className].filter(Boolean).join(' ')}
      >
        <Label id={labelId} htmlFor={inputId} required={required}>
          {label}
        </Label>
        {child}
        {helper && <HelperText id={helperId!}>{helper}</HelperText>}
        {error && <ErrorText id={errorId!}>{error}</ErrorText>}
      </div>
    );
  }
);
FormField.displayName = 'FormField';
