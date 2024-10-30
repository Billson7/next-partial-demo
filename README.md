This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built with
- https://react.dev/reference/react/Suspense
- https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering
- https://swapi.dev/
- https://nextui.org

## Using Partial prerendering 
- `"next": "15.0.2-canary.10",`
- Experimental config
```
experimental: {
    ppr: "incremental",
    dynamicIO: true,
  },
```
