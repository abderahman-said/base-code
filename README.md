# 🧠 Base Code - Senior React/Next.js Architecture

A production-ready, scalable React/Next.js project structure following Feature-Based Architecture principles.

## 🎯 Architecture Overview

This project demonstrates a **Senior-Level Feature-Based Architecture** designed for scalability and maintainability in production SaaS applications.

### Core Principles

- **Feature Isolation**: Each business domain is self-contained
- **Separation of Concerns**: Clear boundaries between UI, logic, and data
- **Type Safety**: Full TypeScript coverage
- **Scalable**: Easy to add new features without affecting existing code

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── providers.tsx       # Client-side providers (React Query)
│
├── features/               # 🔥 Business Domains
│   ├── auth/               # Authentication feature
│   │   ├── components/     # Feature-specific components
│   │   ├── hooks/          # Feature-specific hooks
│   │   ├── services/       # API calls
│   │   ├── types/          # TypeScript types
│   │   ├── queries.ts      # React Query hooks
│   │   └── index.ts        # Public API
│   │
│   ├── users/              # Users management
│   └── bookings/           # Bookings (scaffold)
│
├── components/             # Shared UI Components
│   ├── ui/                 # Button, Input, etc.
│   ├── layout/             # Header, Sidebar, Footer
│   └── feedback/           # Loader, Error, EmptyState
│
├── lib/                    # Core Library Setup
│   ├── axios.ts            # Axios instance with interceptors
│   └── react-query.ts      # QueryClient configuration
│
├── hooks/                  # Global Reusable Hooks
├── utils/                  # Pure Utility Functions
│   └── cn.ts               # className merger
│
├── types/                  # Global TypeScript Types
└── services/               # Global Services
```

## 🔥 Feature Architecture

Each feature follows a consistent structure:

```
features/[feature-name]/
├── components/         # UI components specific to this feature
├── hooks/              # Custom hooks for this feature
├── services/           # API service functions
├── types/              # TypeScript interfaces
├── queries.ts          # React Query hooks (useQuery, useMutation)
└── index.ts            # Public exports
```

### Data Flow

```
Component → Hook → React Query → Service → API
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query
- **HTTP Client**: Axios

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Adding a New Feature

1. Create feature folder: `src/features/[feature-name]/`
2. Add types: `types/[feature].types.ts`
3. Create service: `services/[feature].service.ts`
4. Add React Query hooks: `queries.ts`
5. Build components: `components/`
6. Export public API: `index.ts`

## 💡 Best Practices

- ✅ Keep components dumb (no business logic)
- ✅ Use React Query for all API calls
- ✅ Define types for all data structures
- ✅ Export only what's needed via `index.ts`
- ✅ Use the `cn()` utility for className merging
- ✅ Follow the established folder structure

## 🎨 Component Guidelines

- **UI Components**: Reusable, no business logic
- **Feature Components**: Can use feature-specific hooks
- **Layout Components**: App-wide structure (Header, Footer)

## 📚 Examples

### Using a Feature

```tsx
import { UserList, useUsers } from '@/features/users';

export function MyPage() {
  return <UserList />;
}
```

### Creating a Query Hook

```tsx
// features/users/queries.ts
export const useUsers = () => {
  return useQuery({
    queryKey: usersKeys.lists(),
    queryFn: usersService.getUsers,
  });
};
```

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com)

---

Built with ❤️ following Senior-Level Architecture principles
