<h1>Vike Hono Env</h1>

This is a bug repro. I just commited the `.env` for convenience.

**Bug summary:**

1. Environment variables are being displayed on the client-side?
2. When I write the environment variable as a "text" (not a variable), it fails to render the page/throws a roll-up error. You can see it in the console when you visit the page.
   - For instance: Writing `<div>import.meta.env.DATABASE_URL</div>` will throw this error.

## Requirements

- Bun v1.1.8

## Steps

1. Clone

```sh
git clone <repo>
```

2. Install

```sh
bun install
```

4. Run

```sh
bun dev
```

<!-- To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000 -->
