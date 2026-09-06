<!-- Project-specific instructions for coding agents. -->

# Link Shortener Agent Instructions

## Mandatory Pre-Generation Requirement

It is incredibly important to **ALWAYS read the relevant individual instruction file in `/docs` before generating any project tree or any code**. This requirement is non-negotiable and applies before creating, editing, or scaffolding files.

Read the applicable documentation before proceeding:

- [docs/auth.md](docs/auth.md) — authentication (Clerk), protected routes, sign in/up modal behavior.
- [docs/ui.md](docs/ui.md) — UI components (shadcn/ui usage, adding/using components, styling conventions).

## Non-negotiable defaults

- Preserve existing user changes and keep patches narrowly scoped.
- Use strict TypeScript and existing project dependencies; do not add a library for a problem already solved by the stack.
- Treat server components as the default. Add a client boundary only when browser state, effects, or event handlers require it.
- Keep secrets in environment variables. Never commit `.env` files or print secret values.
- Run `npm run lint` after code changes and `npm run build` when a change affects routing, configuration, authentication, data access, or production behavior.
- Do not claim a feature is complete until its implementation and validation are both present.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
