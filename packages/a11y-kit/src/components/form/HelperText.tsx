import * as React from 'react';
import './label.css';

type HelperTextProps = React.HTMLAttributes<HTMLDivElement>;

export const HelperText = ({ className = '', ...props }: HelperTextProps) => {
  return <div className={['a11y-helper', className].join(' ')} {...props} />;
};
