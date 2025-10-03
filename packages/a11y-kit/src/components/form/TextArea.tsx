import * as React from 'react';
import './input.css';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={['a11y-textarea', className].join(' ')}
        {...props}
      />
    );
  }
);
TextArea.displayName = 'TextArea';
