export type Variant = 'default' | 'outline' | 'ghost';
export type Size = 'sm' | 'md' | 'lg';

export type BaseProps = {
  /** Common visual variants */
  variant?: Variant;
  /** Size scale */
  size?: Size;
  /** Disable interaction */
  disabled?: boolean;
  /** Allow class override/extension */
  className?: string;
  /** Radix asChild passthrough when applicable */
  asChild?: boolean;
};
