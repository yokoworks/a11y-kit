/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

// Be robust across Vite / Storybook / tsup builds
const isDev =
  typeof import.meta !== 'undefined' && (import.meta as any).env?.MODE
    ? (import.meta as any).env.MODE === 'development'
    : true; // fallback to dev if env is unknown

// simple once-per-tick dedupe
const warned = new Set<string>();
let flushScheduled = false;
function scheduleFlush() {
  if (flushScheduled) return;
  flushScheduled = true;
  // reset each macrotask to avoid spamming
  setTimeout(() => {
    warned.clear();
    flushScheduled = false;
  }, 0);
}

export function warnA11y(message: string) {
  if (!isDev || typeof console === 'undefined') return;
  if (warned.has(message)) return;
  warned.add(message);
  scheduleFlush();
  console.warn(`[a11y-kit] ${message}`);
}

function hasTextNode(node: React.ReactNode): boolean {
  if (typeof node === 'string') return node.trim().length > 0;
  if (typeof node === 'number') return String(node).trim().length > 0;
  if (Array.isArray(node)) return node.some(hasTextNode);
  return false; // ReactElement / object / boolean / null は探索しない
}
/**
 * Warn when an icon-only button lacks an accessible name.
 * Triggers only in dev builds.
 */
export function guardIconOnlyButtonA11y(opts: {
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  compName?: string;
}) {
  if (!isDev) return;

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
  children: React.ReactNode;
}) {
  if (!isDev) return;
  const { compName = 'FormField', label, children } = opts;

  // label must be present and non-empty (string or node)
  const labelEmpty =
    label == null ||
    (typeof label === 'string' && label.trim().length === 0) ||
    (Array.isArray(label) && label.every((n) => !hasTextNode(n)));

  if (labelEmpty) {
    warnA11y(
      `${compName}: missing "label". A visible label is required for inputs.`
    );
  }

  const count = Array.isArray(children) ? children.length : children ? 1 : 0;
  if (count !== 1) {
    warnA11y(
      `${compName}: expects exactly ONE form control as its child. Received ${count}.`
    );
  }
}
