# Base Code - Next.js Architecture

A React/Next.js project structure following feature-based architecture principles. Designed for scalability, maintainability, and clean separation of concerns.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query v5
- **Forms**: React Hook Form + Zod (Fully integrated with UI components)
- **Localization**: next-intl (Bilingual support Ar/En)
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
UI components in `src/components/ui/` are generic and follow standard shadcn-like patterns. Use the `cn()` utility for flexible styling.

#### Forms & Components
- **Ready-to-use Inputs**: You don't have to build `Input` or `Select` from scratch; they’re already styled and functional.
- **Seamless Integration**: Everything is pre-wired to work with `react-hook-form` right away.
- **Reference Example**: Check out the `Users` feature—it’s a great example of a complete form setup with validation and dialog integration.

```tsx
// Example of using controlled components with react-hook-form
<ControlledInput
    control={form.control}
    name="email"
    label={t('fields.email')}
    placeholder="example@email.com"
    type="email"
/>

<ControlledSelect
    control={form.control}
    name="role"
    label={t('fields.role')}
    placeholder={t('fields.role_placeholder')}
    options={[
        { value: 'user', label: t('roles.user') },
        { value: 'moderator', label: t('roles.moderator') },
        { value: 'admin', label: t('roles.admin') },
    ]}
/>
```

> [!TIP]
> **Customizable Styles**: All components are built with Tailwind CSS and `class-variance-authority`, so you can easily override or extend their styles using the `className` prop or by modifying the base component in `src/components/ui/`.
The site is fully localized with `next-intl`, and English/Arabic support is already baked in.
- **Integrated UI**: The language switching is already tied into the routing and components.
- **Simple Management**: Just add your strings to `messages/ar.json` or `messages/en.json`, and you’re good to go using the `useTranslations` hook.
