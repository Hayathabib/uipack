# UIKpack Monorepo Development Guide

UIpack is a TypeScript-based React component library and utilities monorepo containing 17+ packages including UI components, React hooks, AWS utilities, text processing tools, and more. The repository uses Yarn 4 with Plug'n'Play (PnP), Vite for building, Vitest for testing, and Storybook for documentation.


## Essential Setup & Development Commands

**Bootstrap the repository:**
```bash
# Repository uses Yarn 4+ with PnP
yarn install  # Fast with cache (~4s), slower fresh install (~90s)
# Always run build before starting development
yarn build    # NEVER CANCEL - takes ~57 seconds
```

**Development workflow:**
```bash
# Start Storybook development server for component testing
yarn dev     # Starts Storybook server on http://localhost:6006


**Run tests:**
```bash
yarn test        
yarn test:watch 
```


**TypeScript compilation:**
- All packages should type-check successfully
- If compilation fails, investigate and fix the type errors before proceeding





## Repository Structure & Key Locations

**Package organization:**
```
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
```

**Configuration files:**
- `package.json` - Root workspace configuration with scripts
- `vite.config.base.js` - Shared Vite build configuration
- `tsconfig.json` - TypeScript project references
- `eslint.config.js` - ESLint flat config with React rules
- `.yarnrc.yml` - Yarn PnP configuration

## Known Issues & Workarounds

**Storybook development server:**
- `yarn dev` starts Storybook server for component testing and development
- May experience module resolution issues in sandboxed environments
- **Workaround:** Use `yarn build && yarn test` for validation in constrained environments

**Build warnings you can ignore:**
- TypeScript version compatibility warnings from eslint plugins
- React package detection warnings in eslint
- One React Hooks warning in `packages/input-text/src/InputText.tsx`

**Network-dependent tests:**
- 2 tests in `packages/post/` fail when external API is unreachable
- These are expected failures in sandboxed environments

## Common Validation Patterns

**When adding new packages:**
1. Add to `tsconfig.json` references array
2. Add workspace dependency in consuming packages
3. Run `yarn build` to verify topological build order
4. Add tests and verify with `yarn test`

**When modifying React components:**
1. Build: `yarn build` (NEVER CANCEL - ~58 seconds)
2. Test: `yarn test` - component tests should pass
3. Lint: `yarn lint` - must have 0 errors
4. Manual test: Run `yarn dev` to start Storybook and test components via their stories (add stories when fixing bugs or changing behavior)

**When working with TypeScript:**
- Run `yarn tsc` and ensure all packages type-check successfully
- Fix any type errors before proceeding
- Use `yarn workspace @acusti/{package-name} run tsc` for individual packages

**Before committing:**
```bash
yarn build  # NEVER CANCEL - takes ~57 seconds
yarn test   # Expect 2 network failures
yarn lint   # Must pass
yarn format # Format all files (~3 seconds)
```

## Package Manager Details

**Yarn PnP specifics:**
- Uses `.pnp.cjs` and `.pnp.loader.mjs` for module resolution
- Dependencies are cached in `.yarn/cache/`
- No `node_modules` folder - everything resolved through PnP
- Very fast installs (~4 seconds) due to zero-install approach

**Workspace commands:**
```bash
# Run command in specific package
yarn workspace @acusti/{package-name} {command}

# Run command in all packages
yarn workspaces foreach {command}

# Build excluding docs (default)
yarn build

# Build including docs for Netlify deployment (may fail in sandboxed environments)
# yarn buildall  # Used for Storybook build and deployment to Netlify
```

## Troubleshooting

**If yarn install fails:**
- Check Node.js version (requires >=20)
- Clear `.yarn/cache/` and retry
- Verify `.yarnrc.yml` and `.pnp.cjs` are present

**If build fails:**
- Run `yarn tsc` to see TypeScript errors
- Check individual package builds: `yarn workspace @acusti/{pkg} run build`
- All packages should build successfully

**If tests fail beyond the 2 network errors:**
- Run individual package tests: `yarn workspace @acusti/{pkg} run test`
- Check for React testing library setup in affected packages
- Verify test files end with `.test.ts` or `.test.tsx`

**Validation checklist for changes:**
- [ ] `yarn build` completes successfully (NEVER CANCEL - ~57 seconds)
- [ ] `yarn test` passes (ignore 2 network failures)
- [ ] `yarn lint` shows 0 errors (warnings acceptable)
- [ ] `yarn tsc` shows 0 errors
- [ ] `yarn format` completes successfully
- [ ] Manual testing of affected functionality
