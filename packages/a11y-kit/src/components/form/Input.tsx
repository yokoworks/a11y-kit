import * as React from 'react';
import './input.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={['a11y-input', className].join(' ')}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
