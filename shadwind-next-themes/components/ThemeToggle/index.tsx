'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import {
   ThemeToggleSkeleton,
   type ThemeToggleProps
} from './theme-toggle';

const ThemeToggleComponent: React.FC<ThemeToggleProps> = (props) => {
   const Comp = dynamic(() => import('@/components/ThemeToggle/theme-toggle').then((mod) => mod.ThemeToggle), {
      ssr: false,
      loading: () => <ThemeToggleSkeleton {...props} />,
   });
   return <Comp {...props} />;
}
ThemeToggleComponent.displayName = 'ThemeToggleComponent';

const ThemeToggle = React.memo(ThemeToggleComponent);
ThemeToggle.displayName = 'ThemeToggle';

export { ThemeToggle };
