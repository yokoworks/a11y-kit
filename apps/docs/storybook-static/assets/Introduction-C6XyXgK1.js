import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-BxvCFfQM.js";import{M as o}from"./index-DjcG0ZDO.js";import"./index-yIsmwZOr.js";import"./iframe-CwLDUkFO.js";import"./index-CZ_84MJS.js";import"./index-DLXLKNMB.js";import"./index-DrFu-skq.js";function s(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction/Overview"}),`
`,e.jsx(n.h1,{id:"yokoworksa11y-kit",children:"@yokoworks/a11y-kit"}),`
`,e.jsxs(n.p,{children:[`A lightweight, accessibility-first UI kit built on top of Radix Primitives.
Focus: `,e.jsx(n.strong,{children:"practical defaults"}),", ",e.jsx(n.strong,{children:"visible focus ring (cannot be disabled)"}),", and ",e.jsx(n.strong,{children:"clear responsibility boundaries"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"design-tokens-minimum",children:"Design Tokens (minimum)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"color.{primary|neutral|success|warning|danger}.{base|hover|fg}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"space.{xs|sm|md|lg|xl}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"radius.{sm|md|lg}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ring.{color|width|offset}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"font.{family|size.base|line-height.base}"})}),`
`]}),`
`,e.jsx(n.p,{children:"To use tokens:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@yokoworks/a11y-kit/theme';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"common-api-for-most-components",children:"Common API (for most components)"}),`
`,e.jsxs(n.p,{children:[`| Prop        | Type                                | Default   | Notes                                  |
| ----------- | ----------------------------------- | --------- | -------------------------------------- |
| `,e.jsx(n.code,{children:"variant"}),"   | ",e.jsx(n.code,{children:"'default' \\| 'outline' \\| 'ghost'"})," | ",e.jsx(n.code,{children:"default"}),` | Visual style                           |
| `,e.jsx(n.code,{children:"size"}),"      | ",e.jsx(n.code,{children:"'sm' \\| 'md' \\| 'lg'"}),"              | ",e.jsx(n.code,{children:"md"}),`      | Size scale                             |
| `,e.jsx(n.code,{children:"disabled"}),"  | ",e.jsx(n.code,{children:"boolean"}),"                           | ",e.jsx(n.code,{children:"false"}),`   | Native disabled                        |
| `,e.jsx(n.code,{children:"className"})," | ",e.jsx(n.code,{children:"string"}),"                            | ",e.jsx(n.code,{children:"-"}),`       | Extend/override classes                |
| `,e.jsx(n.code,{children:"asChild"}),"   | ",e.jsx(n.code,{children:"boolean"}),"                           | ",e.jsx(n.code,{children:"false"}),"   | Radix asChild passthrough (when exist) |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility-guardrails-library-policy",children:"Accessibility Guardrails (library policy)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus ring is always visible"})," (",e.jsx(n.code,{children:":focus-visible"}),") and ",e.jsx(n.strong,{children:"cannot be disabled"}),`.
Color/width/offset are customizable via tokens.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon-only buttons require an accessible name"}),`.
Missing name triggers a dev-time warning.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dialog"}),": initial focus target and return focus are ",e.jsx(n.strong,{children:"required"})," (API or documented pattern)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Forms"}),": error/help text must be linked via ",e.jsx(n.code,{children:"aria-describedby"}),"; helper utilities provided."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"responsibility-boundaries-per-component",children:"Responsibility Boundaries (per component)"}),`
`,e.jsxs(n.p,{children:[`| Component      | Radix Guarantees                            | Library Guarantees                                | You (Consumer)                                    |
| -------------- | ------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `,e.jsx(n.code,{children:"Dialog"}),`       | Focus trap, ARIA roles, portal              | Enforced visible focus ring, API for focus return | Choose initial focus, provide labels/descriptions |
| `,e.jsx(n.code,{children:"DropdownMenu"}),` | Roving tabindex, keyboard navigation, roles | Visible focus ring, minimal styling               | Provide item labels, handle actions               |
| `,e.jsx(n.code,{children:"Tooltip"}),`      | Positioning, show/hide semantics            | Delay defaults, ring consistency                  | Use for supplemental info only                    |
| `,e.jsx(n.code,{children:"Input"}),"        | Native semantics                            | Error/Help components & linking guidance          | Link via ",e.jsx(n.code,{children:"aria-describedby"}),"                       |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @yokoworks/a11y-kit
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@yokoworks/a11y-kit/theme';
// then import components (coming in v0.1+)
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["High-contrast theme reserved: ",e.jsx(n.code,{children:".theme-contrast"})," (to be implemented in v0.x)"]}),`
`]})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
