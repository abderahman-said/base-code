'use client';

import { Header } from "@/components/layout/Header";
import { UserList } from "@/features/users";
import { Button } from "@/components/ui/Button";
import { Compass, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />

      <main className="container mx-auto px-4 py-12 sm:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Senior-Level Architecture
          </div>
          <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
            Base Code Project
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-8">
            مشروع Next.js احترافي يوضح الـ Feature-Based Architecture<br />
            مع React Query و TypeScript
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.scrollTo({ top: document.getElementById('structure')?.offsetTop || 0, behavior: 'smooth' })}
            >
              <Compass className="w-5 h-5 mr-2" />
              استكشف الهيكل
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/abderahman-said/base-code', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Architecture Flow */}
        <div id="structure" className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            📊 Data Flow Architecture
          </h2>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex-1 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-bold text-black dark:text-white mb-1">Component</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">UI Layer</p>
              </div>
              <div className="text-2xl text-zinc-400">→</div>
              <div className="flex-1 p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="text-3xl mb-2">🪝</div>
                <h3 className="font-bold text-black dark:text-white mb-1">Hook</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">React Query</p>
              </div>
              <div className="text-2xl text-zinc-400">→</div>
              <div className="flex-1 p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="font-bold text-black dark:text-white mb-1">Service</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">API Calls</p>
              </div>
              <div className="text-2xl text-zinc-400">→</div>
              <div className="flex-1 p-6 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="font-bold text-black dark:text-white mb-1">API</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Backend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            ✨ المميزات الرئيسية
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                Feature-Based Structure
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                كل ميزة في مجلد منفصل مع components, hooks, services, types
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                src/features/users/
              </code>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                Shared Components
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                مكونات UI قابلة لإعادة الاستخدام مع variants و sizes
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                src/components/ui/
              </code>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                React Query
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                إدارة احترافية للبيانات مع caching و auto-refetch
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                useUsers(), useAuth()
              </code>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                TypeScript
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Type safety كامل في كل الكود
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                interface User &#123;...&#125;
              </code>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                Separation of Concerns
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                فصل واضح بين UI و Logic و Data
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                Component → Hook → Service
              </code>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                Scalable
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                سهولة إضافة features جديدة بدون تأثير على الكود الموجود
              </p>
              <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                features/new-feature/
              </code>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            💻 مثال عملي
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
        </div>

        {/* Live Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            🎬 Live Demo - Users Feature
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
            هذا مثال حي لـ Feature كامل (Service → Query → Component)
          </p>
          <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <UserList />
          </div>
        </div>

        {/* Project Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            📂 هيكل المشروع
          </h2>
          <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm text-zinc-100 font-mono">
              <code>{`src/
├── app/              # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── features/         # Business Features
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── queries.ts
│   │   └── index.ts
│   ├── users/
│   └── bookings/
│
├── components/       # Shared UI
│   ├── ui/          # Button, Input
│   ├── layout/      # Header, Footer
│   └── feedback/    # Loader, Error
│
├── lib/             # Core Setup
│   ├── axios.ts
│   └── react-query.ts
│
└── utils/           # Helpers
    └── cn.ts`}</code>
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            استخدم هذا الـ Base Code لمشاريعك القادمة
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => alert('يمكنك البدء بإضافة features جديدة في src/features/')}
            >
              ابدأ التطوير
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/README.md', '_blank')}
            >
              اقرأ التوثيق
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
