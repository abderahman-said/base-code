# 🧠 Base Code - Senior React/Next.js Architecture

A production-ready, scalable React/Next.js project structure following Feature-Based Architecture principles.

## 🎯 Architecture Overview

This project demonstrates a **Senior-Level Feature-Based Architecture** designed for scalability and maintainability in production SaaS applications.

### Core Principles

- **Feature Isolation**: Each business domain is self-contained
- **Separation of Concerns**: Clear boundaries between UI, logic, and data
- **Component Composition**: Breaking large components into smaller, reusable pieces
- **Type Safety**: Full TypeScript coverage
- **Scalable**: Easy to add new features without affecting existing code

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page (composition of components)
│   └── providers.tsx       # Client-side providers (React Query)
│
├── features/               # 🔥 Business Domains
│   ├── auth/               # Authentication feature
│   │   ├── components/     # LoginForm
│   │   ├── services/       # API calls
│   │   ├── types/          # TypeScript types
│   │   ├── queries.ts      # React Query hooks
│   │   └── index.ts        # Public API
│   │
│   ├── users/              # Users management
│   │   ├── components/     # UserList, UserForm
│   │   ├── services/       # users.service.ts
│   │   ├── types/          # users.types.ts
│   │   ├── queries.ts      # useUsers, useUser
│   │   └── index.ts
│   │
│   └── bookings/           # Bookings (scaffold)
│
├── components/             # Shared UI Components
│   ├── ui/                 # Button, Input, Form, Label
│   ├── layout/             # Header, Footer
│   └── home/               # Home page sections
│       ├── HeroSection.tsx
│       ├── ArchitectureFlow.tsx
│       ├── KeyFeatures.tsx
│       ├── CodeExample.tsx
│       ├── LiveDemo.tsx
│       ├── ProjectStructure.tsx
│       ├── CTASection.tsx
│       └── index.ts
│
├── lib/                    # Core Library Setup
│   ├── axios.ts            # Axios instance with interceptors
│   └── react-query.ts      # QueryClient configuration
│
├── utils/                  # Pure Utility Functions
│   └── cn.ts               # className merger (clsx + tailwind-merge)
│
└── types/                  # Global TypeScript Types
```

## 🔥 Feature Architecture

Each feature follows a consistent structure:

```
features/[feature-name]/
├── components/         # UI components specific to this feature
├── services/           # API service functions
├── types/              # TypeScript interfaces
├── queries.ts          # React Query hooks (useQuery, useMutation)
└── index.ts            # Public exports
```

### Data Flow

```
Component → React Query Hook → Service → API
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query v5
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

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

### Example: Users Feature

```tsx
// 1. Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
}

// 2. Service
export const usersService = {
  getUsers: async () => {
    const { data } = await api.get<UsersResponse>('/users');
    return data;
  },
};

// 3. Query Hook
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersService.getUsers,
  });
};

// 4. Component
export function UserList() {
  const { data, isLoading } = useUsers();
  // ... render logic
}
```

## 💡 Best Practices

### Component Design
- ✅ **Keep components small** - Break large components into smaller pieces
- ✅ **Single Responsibility** - Each component should do one thing well
- ✅ **Composition over Complexity** - Compose small components into larger ones
- ✅ **No business logic in UI** - Use hooks for logic

### Code Organization
- ✅ Use React Query for all API calls
- ✅ Define types for all data structures
- ✅ Export only what's needed via `index.ts`
- ✅ Use the `cn()` utility for className merging
- ✅ Follow the established folder structure

### Forms
- ✅ Use React Hook Form for form state
- ✅ Use Zod for validation schemas
- ✅ Use Form components for consistent UI

## 🎨 Component Guidelines

- **UI Components** (`components/ui/`): Reusable, no business logic, fully typed
- **Feature Components** (`features/*/components/`): Can use feature-specific hooks
- **Layout Components** (`components/layout/`): App-wide structure (Header, Footer)
- **Page Sections** (`components/home/`): Composable page sections

## 📚 Examples

### Using a Feature

```tsx
import { UserList, useUsers } from '@/features/users';

export function MyPage() {
  return <UserList />;
}
```

### Creating a Form with Validation

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
});

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
}
```

## 🏗️ Architecture Highlights

### 1. Feature-Based Structure
Each feature is completely self-contained with its own components, services, types, and queries.

### 2. Component Composition
Large pages are broken down into smaller, focused components (see `components/home/`).

### 3. Type Safety
Full TypeScript coverage with proper interfaces and type inference.

### 4. Form Handling
Professional form handling with React Hook Form + Zod validation.

### 5. Data Management
React Query handles caching, refetching, and state management for server data.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

Built with ❤️ following Senior-Level Architecture principles
