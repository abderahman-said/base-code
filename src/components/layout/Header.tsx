'use client';

import { Button } from "../ui/Button";
import { BookOpen, LogIn } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur dark:bg-zinc-950/75 dark:border-zinc-800">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="text-black dark:text-white">Base</span>
                    <span className="text-blue-600">Code</span>
                </div>

                <nav className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open('https://github.com/abderahman-said/base-code', '_blank')}
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Documentation
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => alert('Sign In functionality - يمكن ربطها بصفحة تسجيل الدخول')}
                    >
                        <LogIn className="w-4 h-4 mr-2" />
                        Sign In
                    </Button>
                </nav>
            </div>
        </header>
    );
}
