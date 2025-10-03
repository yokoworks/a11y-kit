import * as React from 'react';
import './label.css';

type ErrorTextProps = React.HTMLAttributes<HTMLDivElement>;

export const ErrorText = ({ className = '', ...props }: ErrorTextProps) => {
  return (
    <div
      className={['a11y-error', className].join(' ')}
      {...props}
      role="alert"
    />
  );
};
