## README.md (English draft)

# @yokoworks/a11y-kit

> Accessible UI building blocks for modern React apps.
> Radix primitives + TypeScript + design tokens. Focus ring is **always visible** by policy.

[![CI](https://github.com/yokoworks/a11y-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/yokoworks/a11y-kit/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## Why a11y-kit?

- **Radix-based**: Built on top of Radix primitives with correct roles and keyboard behaviors by default.
- **Practical guardrails**: Focus ring can’t be disabled / Icon buttons require accessible names / Dialog focus behavior guided by API.
- **Design tokens**: `color / radius / ring / space / font` managed as CSS custom properties.
- **Plug & play**: Storybook and Next.js example included — verify integration in minutes.

## Status

- `v0.1.0` (M1): **Core foundation**

  - Tokens, Button, Link, Input, Label, HelperText, ErrorText
  - Dialog, DropdownMenu, Tooltip (Radix thin wrappers)
  - Storybook (Getting Started / API / Accessibility Notes)

> Roadmap: M2 → Select, Combobox, Toast. M3 → High contrast theme, RTL support, regression tests.

## Installation

```bash
pnpm add @yokoworks/a11y-kit
```

Import global tokens (example):

```css
@import '@yokoworks/a11y-kit/style.css';
```

## Quick Start

```tsx
import { Button, Input, Label, Dialog } from '@yokoworks/a11y-kit';

export default function Page() {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" aria-describedby="email-help" />
      <p id="email-help">We’ll never share your email.</p>

      <Button variant="default" size="md">
        Save
      </Button>
    </>
  );
}
```

## Design Tokens

- `color.{primary|neutral|success|warning|danger}.{base|hover|fg}`
- `radius.{sm|md|lg}`
- `ring.{color|width|offset}`
- `space.{xs…xl}`
- `font.{family|size.scale|line-height}`

> **Policy:** Focus ring cannot be disabled. Only color and thickness can be customized. `theme-contrast` reserved for future high-contrast mode.

## Shared API

All components support:

- `variant`: `default | outline | ghost`
- `size`: `sm | md | lg`
- `className`: Custom class
- `asChild` (when applicable)
- Radix props are **transparent** (minimal custom props)

## Accessibility Notes

| Feature                    | Radix       | a11y-kit                                  | Developer                |
| -------------------------- | ----------- | ----------------------------------------- | ------------------------ |
| Dialog focus management    | Trap & loop | Initial focus and return target policy    | Must define focus target |
| IconButton accessible name | –           | Warning if missing                        | Provide `aria-label`     |
| Form error descriptions    | –           | `ErrorText` + `aria-describedby` guidance | Link by `id`             |

See component-specific **A11y Notes** in Storybook.

## Examples

- `examples/next-app`: Next.js App Router integration
- Storybook: `apps/docs`

## Contributing

- PRs welcome. Please ensure CI (lint, typecheck, build) passes.
- Follow SemVer and document breaking changes in the changelog.

## License

MIT © yokoworks
