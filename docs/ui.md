# UI Components

## Provider

- All UI elements use **shadcn/ui** components (`@/components/ui`). No other component library or custom-built component may be introduced for elements shadcn/ui already provides (buttons, inputs, dialogs, dropdowns, etc.).
- Component config lives in [components.json](../components.json) (style `base-nova`, base color `neutral`, icon library `lucide`). Do not change these conventions on an ad-hoc basis.

## Adding components

- Add new UI primitives via the shadcn/ui CLI (`npx shadcn@latest add <component>`) so they land in `components/ui/` with the project's configured style, not by hand-writing markup that duplicates a shadcn/ui component.
- If a needed primitive doesn't exist yet in `components/ui/`, add it via the CLI before building the feature that needs it.

## Using components

- Import shared UI from `@/components/ui/*` (e.g. `@/components/ui/button`) rather than re-implementing styled elements inline.
- Compose feature UI out of existing `components/ui/*` primitives. Custom, one-off components are only acceptable for layout/composition wrappers that contain no styling logic shadcn/ui already provides.
- Use `lucide` icons (already configured) for any icon needs instead of adding another icon library.

## Styling

- Use Tailwind utility classes and the CSS variables defined in [app/globals.css](../app/globals.css) for theming. Do not introduce a second styling system (CSS modules, styled-components, etc.).
