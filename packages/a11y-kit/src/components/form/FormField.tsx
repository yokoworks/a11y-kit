import * as React from 'react';
import { guardFormFieldBasics } from '../../a11y/guards';
import { useAutoId } from '../../utils/id';
import { ErrorText } from './ErrorText';
import { HelperText } from './HelperText';
import { Label } from './Label';

type FormFieldProps = {
  id?: string;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  invalid?: boolean;
  required?: boolean;
  children?: React.ReactNode; // <Input/> or <TextArea/> など
  className?: string;
};

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { id, label, helper, error, invalid, required, children, className },
    ref
  ) => {
    guardFormFieldBasics({ label, children });

    const baseId = id ?? useAutoId('field');
    const inputId = `${baseId}-input`;
    const labelId = `${baseId}-label`;
    const helperId = helper ? `${baseId}-helper` : undefined;
    const errorId = error ? `${baseId}-error` : undefined;

    const kids = React.Children.toArray(children).filter(Boolean);
    let renderedChild: React.ReactNode = null;

    if (kids.length === 1 && React.isValidElement(kids[0])) {
      renderedChild = React.cloneElement(kids[0] as React.ReactElement, {
        id: inputId,
        'aria-labelledby': labelId,
        'aria-describedby':
          [helperId, errorId].filter(Boolean).join(' ') || undefined,
        'aria-invalid': invalid || !!error || undefined,
        'aria-required': required || undefined,
      });
    } else {
      renderedChild = children;
    }

    return (
      <div
        ref={ref}
        className={['a11y-field', className].filter(Boolean).join(' ')}
      >
        <Label id={labelId} htmlFor={inputId} required={required}>
          {label}
        </Label>
        {renderedChild}
        {helper && <HelperText id={helperId!}>{helper}</HelperText>}
        {error && <ErrorText id={errorId!}>{error}</ErrorText>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
