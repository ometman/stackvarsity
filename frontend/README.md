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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Folder Structure**

frontend/
├── public/                   # Public assets accessible in the browser
│   ├── favicon.ico           # Favicon for the app
│   ├── images/               # Static images
│   └── robots.txt            # SEO optimization
├── src/                      # Source code
│   ├── app/                  # Next.js App Router structure
│   │   ├── layout.tsx        # Shared layout for the app
│   │   ├── globals.css       # Global styles
│   │   ├── dashboard/        # Dashboard page
│   │   │   └── page.tsx      # Main dashboard content
│   │   └── auth/             # Authentication-related pages
│   │       ├── login/
│   │       │   └── page.tsx  # Login page
│   │       ├── signup/
│   │       │   └── page.tsx  # Signup page
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Footer section
│   │   ├── Button.tsx        # Reusable button component
│   │   ├── InputField.tsx    # Input field component
│   │   └── Loader.tsx        # Loading spinner
│   ├── features/             # Feature-based structure for larger apps
│   │   ├── auth/             # Auth-specific logic
│   │   │   ├── api.ts        # API calls for login/signup
│   │   │   └── hooks.ts      # Custom hooks for authentication
│   │   └── courses/          # Course-specific logic
│   │       ├── api.ts        # API calls for courses
│   │       └── hooks.ts      # Custom hooks for course management
│   ├── lib/                  # Utility libraries
│   │   ├── axios.ts          # Axios instance for API requests
│   │   └── helpers.ts        # Helper functions
│   ├── styles/               # Additional CSS or SCSS files
│   │   ├── variables.css     # CSS variables
│   │   └── components.css    # Component-specific styles
│   └── config/               # Configuration files
│       └── constants.ts      # Global constants (e.g., API URLs)
├── .env.local                # Environment variables for the frontend
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Frontend documentation
user1@example.com password123