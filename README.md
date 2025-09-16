🎨 UIKit Monorepo development

A TypeScript-based React component library & utilities monorepo with 17+ packages including:
✅ UI Components ·  React Hooks · ⚡ AWS Utilities · ✍️ Text Processing · and more.
Built with Yarn 4 (PnP), Vite, Vitest, and Storybook.

📦 Repository Structure
packages/
├── UI Components
│   ├── dropdown/         # Position-aware dropdown
│   ├── input-text/       # Uncontrolled text input
│   ├── css-value-input/  # CSS value input w/ validation
│   └── date-picker/      # Date range picker
├── React Hooks
│   ├── use-keyboard-events/      # Keyboard listeners
│   ├── use-is-out-of-bounds/     # Boundary detection
│   └── use-bounding-client-rect/ # Element dimensions
├── Utilities
│   ├── parsing/     # Tolerant JSON parsing
│   ├── textual/     # Text transformations
│   ├── matchmaking/ # Fuzzy string matching
│   ├── uniquify/    # Unique string utility
│   └── styling/     # CSS-in-JS helpers
├── AWS / Network
│   ├── appsync-fetch/    # AWS AppSync GraphQL client
│   ├── aws-signature-v4/ # AWS SigV4 signing
│   └── post/             # GraphQL request utility
└── docs/                 # Storybook docs (⚠️ broken)



⚡  Architecture Highlights

Build → Vite + TypeScript declarations (unplugin-dts)

Testing → Vitest + Testing Library + Happy DOM

React 19 → Latest features w/ React Compiler

Code Quality → ESLint (strict), Prettier, TypeScript strict mode

Package resolution → Yarn PnP (.pnp.cjs), no node_modules

🧰 Troubleshooting

Install fails? → Check Node.js ≥ 20, clear .yarn/cache/, retry

Build fails? → Run yarn tsc or package-specific build

Unexpected test failures? → Run yarn workspace @acusti/{pkg} run test



