# Grid & Logic

Independent local Next.js application. Agency portfolio with four services, four project case studies, responsive navigation, an interactive perspective grid and validated demo enquiry form.

## Run

Prerequisites: Node.js 24 or newer and pnpm. Versions are pinned in package.json and pnpm-lock.yaml. The pnpm workspace policy permits only the sharp and unrs-resolver dependency builds.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000. Each project has its own dependencies, configuration and fixed port; all three can run together.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

Stop the dev server before starting production on the same port.

## Routes and source

13 application routes, plus a custom 404. The complete route list is generated in `src/app/[...slug]/page.tsx`; home is `src/app/page.tsx`. Shared interfaces live in `src/components`, domain data and logic in `src/lib`, tokens and responsive rules in `src/app/globals.css`, and all images/fonts are local in `public/assets` and `public/fonts`.

Page metadata is generated per route. Motion respects reduced motion. No secrets or environment variables are needed for these demos.

## Demo boundary and integration

The studio email and phone come from its existing website. The form prepares a demo enquiry without sending it. Replace src/lib/contact.ts with a real authorized service before accepting enquiries.

## Review evidence

Read RESEARCH.md, DESIGN.md, ASSETS.md and QA.md. Brand guidance is in docs/brand-guidelines.md. Browser screenshots and machine-readable outcomes are in output/playwright/.
