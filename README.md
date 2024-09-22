# My NEXT.js Starter

This is a custom project starter for a full-stack Next.js app using Supabase for the database and authentication.

## Getting Started

First, create a new project in Supabase, then create a `.env` or `.env.local` file with the following codes in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=<YOUR_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_SUPABASE_ANON_KEY>
```


Second, install dependencies with `npm install` in the root directory, then start the development server with `npm run dev`:

```bash
npm install

npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) with your browser to see the project in development mode.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

This project uses Cookie-based Auth with Supabase, also using Supabase as the database.

## Learn More about Next.js

Take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel (optional)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
