# Mark & Wallace — Frontend

A frontend project that recreates the [iBank Figma design](https://www.figma.com/design/8inIG2FAaDbIaXEXS0GQmF/iBank---Banking---E-Money-Management-App-%7C-FinPay-%7C-Digital-%7C-Finance-Mobile-Banking-App-Ui-Kit--Community-) as a demonstration of how to design and develop modern frontend projects efficiently, scalably, and in a testable way.

## Goals

- Faithfully implement a professional Figma design in code
- Showcase a scalable frontend architecture based on [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- Establish patterns and conventions that hold up as the codebase grows

## Tech Stack

| Purpose      | Library                    |
| ------------ | -------------------------- |
| Framework    | React 19 + TypeScript      |
| Build tool   | Vite                       |
| Styling      | Tailwind CSS v4            |
| Routing      | React Router v7            |
| Server state | TanStack Query v5          |
| Client state | Zustand v5                 |
| HTTP         | Axios                      |
| Animation    | Framer Motion              |
| Linting      | ESLint + TypeScript ESLint |
| Formatting   | Prettier                   |

## Project Structure

```
src/
├── app/
│   ├── config/       # App-level constants and environment variables
│   ├── providers/    # All React providers composed in one place
│   └── router/       # Route definitions
├── assets/           # Fonts, icons, images
├── components/
│   └── ui/           # Shared, reusable UI components (Button, Input, etc.)
├── features/         # Feature modules — each owns its components, hooks, and services
├── hooks/            # Shared custom hooks
├── lib/              # Third-party library configuration (Axios instance, QueryClient)
├── services/         # Shared API service functions
├── store/            # Zustand stores
├── styles/           # Global CSS and Tailwind theme (@theme)
├── types/            # Shared TypeScript types and interfaces
├── utils/            # Utility and helper functions
└── main.tsx          # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_API_URL=http://localhost:3000
```

All environment variables must be prefixed with `VITE_` to be accessible in the app.

## Architecture Notes

**Feature-first organisation** — as the app grows, new functionality lives in `src/features/<feature-name>/` with its own components, hooks, and services colocated. Nothing leaks into the global namespace until it genuinely needs to be shared.

**Single provider entry point** — all React context providers are composed in `app/providers/AppProviders.tsx`. Adding a new provider means editing one file.

**Configured lib instances** — Axios and TanStack QueryClient are configured once in `src/lib/` and imported everywhere. Auth headers, error handling, and retry logic live here, not scattered across components.

**Tailwind v4 `@theme`** — the entire design token system (colors, typography, shadows) is defined in `src/styles/global.css` using the `@theme` directive. No `tailwind.config.ts` needed.
