/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

let __forceDevForTests = false;
export function __setDevForTests(v: boolean) {
  __forceDevForTests = v;
}

export const isDev = () =>
  __forceDevForTests ||
  (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') ||
  (typeof import.meta !== 'undefined' &&
    (import.meta as any).env?.DEV === true) ||
  (typeof import.meta !== 'undefined' &&
    (import.meta as any).env?.MODE === 'development');

// simple once-per-tick dedupe
const warned = new Set<string>();
let flushScheduled = false;
function scheduleFlush() {
  if (flushScheduled) return;
  flushScheduled = true;
  setTimeout(() => {
    warned.clear();
    flushScheduled = false;
  }, 0);
}

export function warnA11y(message: string) {
  if (!isDev() || typeof console === 'undefined') return;
  if (warned.has(message)) return;
  warned.add(message);
  scheduleFlush();
  console.warn(`[a11y-kit] ${message}`);
}

function hasTextNode(node: React.ReactNode): boolean {
  if (typeof node === 'string') return node.trim().length > 0;
  if (typeof node === 'number') return String(node).trim().length > 0;
  if (Array.isArray(node)) return node.some(hasTextNode);
  return false;
}

export function guardIconOnlyButtonA11y(opts: {
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  compName?: string;
}) {
  if (!isDev()) return;
  const { children, ariaLabel, ariaLabelledBy, compName = 'Button' } = opts;
  const hasTextChild = hasTextNode(children);
  const hasAccessibleName = !!(ariaLabel || ariaLabelledBy);
  if (!hasTextChild && !hasAccessibleName) {
    warnA11y(
      `${compName}: icon-only usage detected without accessible name. ` +
        `Provide \`aria-label\` or \`aria-labelledby\`.`
    );
  }
}

export function guardFormFieldBasics(opts: {
  compName?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
}) {
  if (!isDev()) return;
  const { compName = 'FormField', label, children } = opts;

  const labelEmpty =
    label == null ||
    (typeof label === 'string' && label.trim().length === 0) ||
    (Array.isArray(label) && label.every((n) => !hasTextNode(n)));

  if (labelEmpty) {
    warnA11y(
      `${compName}: missing "label". A visible label is required for inputs.`
    );
  }

  const kids = React.Children.toArray(children).filter(Boolean);
  if (kids.length !== 1) {
    warnA11y(
      `${compName}: expects exactly ONE form control as its child. Received ${kids.length}.`
    );
  }
}
