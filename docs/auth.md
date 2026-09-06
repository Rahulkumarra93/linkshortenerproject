# Authentication

## Provider

- All authentication is handled by **Clerk** (`@clerk/nextjs`, `@clerk/ui`). No other auth method, library, or custom session/JWT logic may be introduced.
- `app/layout.tsx` wraps the app in `<ClerkProvider>` with the `shadcn` theme from `@clerk/ui/themes`. Do not remove or duplicate this provider.

## Protected routes

- `/dashboard` (and any nested routes under it) is protected and requires a signed-in user.
- Route protection is enforced in [proxy.ts](../proxy.ts) via `clerkMiddleware`, calling `auth.protect()` for any pathname starting with `/dashboard`.
- When adding new protected sections, extend the existing pathname check in `proxy.ts` rather than adding page-level auth checks or a second middleware.

## Home page redirect

- If a signed-in user requests `/`, `proxy.ts` redirects them to `/dashboard`.
- Keep this redirect logic in the middleware, not in `app/page.tsx`.

## Sign in / sign up UX

- Sign in and sign up must always launch as **modals**, using Clerk's `SignInButton` / `SignUpButton` with `mode="modal"` (see `app/page.tsx` for the pattern). Do not link to full-page sign-in/sign-up flows from app UI.
- Use `<Show when="signed-out">` / `<Show when="signed-in">` from `@clerk/nextjs` to conditionally render auth UI, and `<UserButton />` for the signed-in account control.
- The catch-all routes at `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` exist only as Clerk-required fallback destinations; they are not the primary entry point and should not be linked to directly.

## Adding new auth-aware UI

- Prefer server components; only mark a component `"use client"` if it needs interactive Clerk components (e.g. `SignInButton`) with event handlers.
- Read the current user/session with Clerk's server helpers (e.g. `auth()`) in server components/route handlers instead of custom cookie or token parsing.
