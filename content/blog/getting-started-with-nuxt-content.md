---
title: Getting Started with Nuxt Content v3
description: Learn how to set up and use Nuxt Content v3 for your blog or documentation site.
date: 2026-01-10
tags:
  - nuxt
  - vue
  - tutorial
---

## Introduction

Nuxt Content is a powerful module that allows you to write content in Markdown and use it in your Nuxt application.

### Key Features

1. **File-based CMS**: Write your content in Markdown files
2. **Vue Components in Markdown**: Use Vue components directly in your content
3. **Full-text Search**: Built-in search functionality
4. **Type Safety**: TypeScript support for your collections

### Getting Started

First, install the module:

```bash
pnpm add @nuxt/content
```

Then, configure your collections in `content.config.ts`:

```typescript
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
    }),
  },
})
```

### Creating Your First Post

Create a new Markdown file in the `content/blog` directory:

```markdown
---
title: My First Post
description: This is my first blog post
date: 2026-01-11
---

## Hello World

This is my first post using Nuxt Content!
```

Happy coding!
