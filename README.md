# Base Code - Next.js Architecture

A React/Next.js project structure following feature-based architecture principles. Designed for scalability, maintainability, and clean separation of concerns.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query v5
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```text
src/
├── app/                    # Next.js App Router
├── features/               # Business logic and domain-specific components
├── components/             # Shared UI and layout components
├── lib/                    # Configuration and library setups
├── messages/               # i18n translation files
├── types/                  # Global types
└── utils/                  # Helper functions
```

### Feature Architecture
Each feature follows a consistent structure:
```text
features/[name]/
├── components/         # Feature-specific UI
├── services/           # API calls
├── types/              # Domain interfaces
├── queries.ts          # React Query hooks
└── index.ts            # Public entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Usage Example

### Defining a Feature
Create a feature directory in `src/features/`. Use `queries.ts` to manage data fetching with React Query.

```tsx
// features/users/queries.ts
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersService.getUsers,
  });
};
```

### Shared UI Components
UI components in `src/components/ui/` should be stateless and generic. Use the `cn()` utility for flexible styling.

```tsx
import { cn } from '@/lib/utils';

export function Button({ className, ...props }) {
  return <button className={cn("px-4 py-2", className)} {...props} />;
}
```

## Localization
The project uses `next-intl` for i18n. Add translations to `messages/ar.json` (default) and `messages/en.json`.
