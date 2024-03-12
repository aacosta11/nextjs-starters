'use client';

import * as React from 'react';
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="text-center p-6 space-y-4">
      <div>hello, world!</div>
      <ThemeToggle size="icon-sm" />
    </main>
  );
}
