# 🎨 UIKit Monorepo

A **TypeScript-based React component library & utilities** monorepo with **17+ packages** including:  
✅ UI Components · 🎣 React Hooks · ⚡ AWS Utilities · ✍️ Text Processing · and more.  

Built with **Yarn 4 (PnP)**, **Vite**, **Vitest**, and **Storybook**.  

## What is a Monorepo?

A monolithic repository, commonly known as a mono-repo, is a version control repository that houses multiple projects or components within a single repository. 
This approach stands in contrast to the traditional model of having separate repositories for each project.



⚡ Architecture Highlights

Build → Vite + TypeScript declarations (unplugin-dts)

Testing → Vitest + Testing Library + Happy DOM

React 19 → Latest features w/ React Compiler

Code Quality → ESLint (strict), Prettier, TypeScript strict mode

Package Resolution → Yarn PnP (.pnp.cjs), no node_modules

🏃 How to Run This Project
1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies

This project uses Yarn 4 with Plug’n’Play (PnP):

yarn install


Cached install

Fresh install:


3. Build all packages

You must build before starting development:

yarn build


4. Start Storybook (UI dev)
yarn dev

Opens Storybook at http://localhost:6006

5. Run tests
yarn test

yarn test:watch

6. Type-check & lint
yarn tsc     # TypeScript type-check
yarn lint    # ESLint check 


Optional auto-fix & formatting:

yarn lintfix
yarn format

⚡ Quick Workflow
yarn install   # Install deps
yarn build     # MUST run before dev
yarn dev       # Start Storybook
yarn test      # Run tests (ignore 2 network fails)
yarn lint      # Check code style

🧰 Troubleshooting

Install fails? → Check Node.js ≥ 20, clear .yarn/cache/, retry

Build fails? → Run yarn tsc or package-specific build

Unexpected test failures? → Run yarn workspace @acusti/{pkg} run test

---

## 📦 Repository Structure
````
```
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

