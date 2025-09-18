# 🎨 UIKit Monorepo

A **TypeScript-based React component library & utilities** monorepo with **17+ packages** including:  
✅ UI Components · 🎣 React Hooks · ⚡ AWS Utilities · ✍️ Text Processing · and more.  

Built with **Yarn 4 (PnP)**, **Vite**, **Vitest**, and **Storybook**.  

## What is a Monorepo?

A monolithic repository, commonly known as a mono-repo, is a version control repository that houses multiple projects or components within a single repository. 
This approach stands in contrast to the traditional model of having separate repositories for each project.

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

