/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { guardIconOnlyButtonA11y } from '../../a11y/guards';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', size = 'md', className, children, ...props },
    ref
  ) => {
    // Dev-only a11y guard
    guardIconOnlyButtonA11y({
      children,
      ariaLabel: props['aria-label'],
      ariaLabelledBy: props['aria-labelledby'],
      compName: 'Button',
    });

    return (
      <button
        ref={ref}
        data-variant={variant}
        data-size={size}
        className={`a11y-btn a11y-btn--${variant} a11y-btn--${size} ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
