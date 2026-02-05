'use client';

import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export function CodeExampleSection() {
  const t = useTranslations('HomePage.code_example');

  return (
    <section className={SECTION_PADDING}>
      <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
        {t('title')}
      </h2>
      <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
        <pre className="text-sm text-zinc-100">
          <code>{`// features/users/queries.ts
export const useUsers = () => {
  return useQuery({
    queryKey: usersKeys.lists(),
    queryFn: usersService.getUsers,
  });
};

// features/users/components/UserList.tsx
export function UserList() {
  const { data, isLoading } = useUsers();
  
  if (isLoading) return <Loader />;
  
  return (
    <div>
      {data?.users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}</code>
        </pre>
      </div>
    </section>
  );
}
