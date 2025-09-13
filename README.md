Uipack  Monorepo Development Guide

UIpack is a TypeScript-based React component library and utilities monorepo containing 17+ packages including UI components, React hooks, AWS utilities, text processing tools, and more. The repository uses Yarn 4 with Plug'n'Play (PnP), Vite for building, Vitest for testing, and Storybook for documentation.

Repository Structure & Key Locations
Package organization:

packages/
├── UI Components:
│   ├── dropdown/           # Dropdown component with positioning
│   ├── input-text/         # Uncontrolled text input
│   ├── css-value-input/    # CSS value input with validation
│   └── date-picker/        # Date picker with range support
├── React Hooks:
│   ├── use-keyboard-events/      # Key event listeners
│   ├── use-is-out-of-bounds/     # Element boundary detection
│   └── use-bounding-client-rect/ # Element dimensions
├── Utilities:
│   ├── parsing/            # JSON parsing with error tolerance
│   ├── textual/            # Text transformation utilities
│   ├── matchmaking/        # Fuzzy string matching
│   ├── uniquify/           # String uniqueness utility
│   └── styling/            # CSS-in-JS utilities
├── AWS/Network:
│   ├── appsync-fetch/      # AWS AppSync GraphQL client
│   ├── aws-signature-v4/   # AWS SigV4 signing
│   └── post/               # GraphQL request utility
└── docs/                   # Storybook documentation (CURRENTLY BROKEN)
Configuration files:

package.json - Root workspace configuration with scripts
vite.config.base.js - Shared Vite build configuration
tsconfig.json - TypeScript project references
eslint.config.js - ESLint flat config with React rules
.yarnrc.yml - Yarn PnP configuration
