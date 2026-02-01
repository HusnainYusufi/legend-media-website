### 05 — Linting & Code Quality

**Goal**: Maintain consistent, safe, and readable TypeScript code throughout the project with industry best practices.

**Tech Stack**
- **ESLint**: Code quality and pattern enforcement
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety and compile-time error detection
- **Husky + lint-staged**: Pre-commit hooks (optional for v1)

---

## TypeScript Configuration

**Strict Mode:**
Enable strict TypeScript settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**Type Safety Best Practices:**
- Avoid `any` — use `unknown` and narrow with type guards
- Use discriminated unions for variants
- Prefer `interface` for object shapes, `type` for unions/intersections
- Always type function parameters and return values
- Use `as const` for readonly arrays and objects

---

## ESLint Configuration

**Recommended Plugins:**
```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-plugin-react eslint-plugin-react-hooks
npm install -D eslint-plugin-jsx-a11y
npm install -D eslint-plugin-import eslint-plugin-unused-imports
npm install -D eslint-plugin-simple-import-sort
npm install -D eslint-config-prettier
npm install -D @next/eslint-plugin-next
```

**Configuration File (`eslint.config.mjs`):**

```javascript
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.{js,ts,mjs}',
    ],
  },
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:jsx-a11y/recommended'),
  ...compat.extends('prettier'),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
      }],
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Imports
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // React
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Using TypeScript
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Accessibility
      'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      }],
    },
  },
];
```

**Key Rules Explained:**

- `@typescript-eslint/no-explicit-any: error` — Prevents use of `any`, enforces type safety
- `unused-imports/no-unused-imports: error` — Removes unused imports automatically
- `simple-import-sort/imports: error` — Auto-sorts imports alphabetically
- `consistent-type-imports: error` — Uses `import type` for type-only imports
- `react-hooks/exhaustive-deps: warn` — Ensures proper dependency arrays
- `jsx-a11y/*` — Enforces accessibility best practices

---

## Prettier Configuration

**Installation:**
```bash
npm install -D prettier
```

**Configuration File (`.prettierrc`):**

```json
{
  "$schema": "http://json.schemastore.org/prettierrc",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Prettier + Tailwind Plugin:**
```bash
npm install -D prettier-plugin-tailwindcss
```

This plugin auto-sorts Tailwind classes for consistency.

**Prettier Ignore (`.prettierignore`):**
```
node_modules
.next
out
dist
build
*.config.{js,ts,mjs}
package-lock.json
public
```

---

## Scripts

**Add to `package.json`:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{ts,tsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "quality": "npm run type-check && npm run lint && npm run format:check"
  }
}
```

**Usage:**
- `npm run lint` — Check for linting errors
- `npm run lint:fix` — Auto-fix linting errors
- `npm run format` — Format all files with Prettier
- `npm run type-check` — Check TypeScript types
- `npm run quality` — Run all quality checks (pre-commit)

---

## Git Hooks (Optional for v1, Recommended for v2)

**Husky + lint-staged:**

```bash
npm install -D husky lint-staged
npx husky init
```

**Configure lint-staged (`.lintstagedrc.json`):**

```json
{
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

**Husky pre-commit hook (`.husky/pre-commit`):**

```bash
#!/bin/sh
npm run type-check
npx lint-staged
```

This ensures all code is linted and formatted before committing.

---

## Code Quality Best Practices

**1. Avoid `any`:**
```typescript
// ❌ Bad
const data: any = fetchData();

// ✅ Good
interface DataResponse {
  id: string;
  name: string;
}
const data: DataResponse = await fetchData();
```

**2. Use Discriminated Unions:**
```typescript
// ❌ Bad
interface ButtonProps {
  variant?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

// ✅ Good
type ButtonVariant = 'primary' | 'secondary' | 'outline';
interface ButtonProps {
  variant?: ButtonVariant;
}
```

**3. Type Function Returns:**
```typescript
// ❌ Bad
function getUser() {
  return { id: 1, name: 'John' };
}

// ✅ Good
interface User {
  id: number;
  name: string;
}

function getUser(): User {
  return { id: 1, name: 'John' };
}
```

**4. Use `unknown` Instead of `any`:**
```typescript
// ❌ Bad
function handleData(data: any) {
  return data.value; // No type checking
}

// ✅ Good
function handleData(data: unknown): string {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return String(data.value);
  }
  throw new Error('Invalid data');
}
```

**5. Consistent Import Sorting:**
```typescript
// ✅ Good (auto-sorted by eslint-plugin-simple-import-sort)
import { type FC } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { type Project } from '@/lib/types/project.types';
```

---

## CI/CD Integration (Future)

**GitHub Actions Workflow (`.github/workflows/quality.yml`):**

```yaml
name: Code Quality

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run format:check
      - run: npm run build
```

This ensures all code pushed to the repository passes quality checks.

---

## IDE Integration

**VS Code Settings (`.vscode/settings.json`):**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

**VS Code Extensions (`.vscode/extensions.json`):**

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

## Complexity Rules (Advanced)

**Optional complexity limits:**

```javascript
// In eslint.config.mjs
rules: {
  'complexity': ['warn', 10], // Max cyclomatic complexity
  'max-lines-per-function': ['warn', 100], // Max lines per function
  'max-depth': ['warn', 3], // Max nesting depth
  'max-params': ['warn', 4], // Max function parameters
}
```

These help maintain readable, maintainable code.

---

## Summary

**Quality Checklist:**
- ✅ TypeScript strict mode enabled
- ✅ ESLint configured with Next.js, TypeScript, React, and accessibility rules
- ✅ Prettier auto-formats code with Tailwind plugin
- ✅ Import sorting enforced
- ✅ No `any` types allowed
- ✅ Unused imports removed automatically
- ✅ Pre-commit hooks (optional for v1)
- ✅ CI/CD integration (future)

**Benefits:**
- Consistent code style across the project
- Catch bugs early with strict TypeScript
- Automatic formatting on save
- Improved code readability
- Better accessibility through linting rules
- Easier code reviews and collaboration

