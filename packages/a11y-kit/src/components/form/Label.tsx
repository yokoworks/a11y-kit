import * as React from 'react';
import './label.css';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export const Label = ({
  required,
  className = '',
  children,
  ...props
}: LabelProps) => {
  return (
    <label className={['a11y-label', className].join(' ')} {...props}>
      <span>{children}</span>
      {required ? (
        <span className="a11y-required" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
};
