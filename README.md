# Naoki Haba's Portfolio & Blog

Personal portfolio and blog built with Nuxt 4, featuring static site generation, content management, and modern web development practices.

## Tech Stack

- **Framework**: Nuxt 4
- **Content**: @nuxt/content
- **Styling**: TailwindCSS v4
- **Deployment**: Netlify (Static Site Generation)
- **Release Management**: changelogen

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Release Management

This project uses [changelogen](https://github.com/unjs/changelogen) for automated changelog generation and releases.

### Creating a Release

Generate a changelog and create a git tag based on conventional commits:

```bash
# Patch release (1.0.0 -> 1.0.1)
pnpm release:patch

# Minor release (1.0.0 -> 1.1.0)
pnpm release:minor

# Major release (1.0.0 -> 2.0.0)
pnpm release:major
```

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/) for automatic changelog generation:

- `feat:` - New features (minor version bump)
- `fix:` - Bug fixes (patch version bump)
- `perf:` - Performance improvements
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `style:` - Code style changes
- `test:` - Test additions or updates
- `chore:` - Maintenance tasks
