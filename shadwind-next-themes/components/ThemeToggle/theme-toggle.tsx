'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Button, buttonVariants, type ButtonProps } from '@/components/ui/button';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export type ThemeToggleProps = Omit<ButtonProps, 'onClick' | 'children'>;

const ThemeToggle = React.forwardRef<
   HTMLButtonElement,
   ThemeToggleProps
>(({ ...props }, ref) => {
   const { theme, setTheme } = useTheme();
   return (
      <Button
         variant="ghost"
         size="icon-lg"
         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
         ref={ref}
         {...props}
      >
         {theme === 'light' ? <MoonIcon /> : <SunIcon />}
         <span className="sr-only">Color Theme Toggle</span>
      </Button>
   );
});
ThemeToggle.displayName = 'ThemeToggle';

const ThemeToggleSkeleton: React.FC<ThemeToggleProps> = ({ variant, size, className, ...props }) => {
   return (
      <div
         data-id="theme-toggle-skeleton"
         className={buttonVariants({
            variant: variant || 'ghost',
            size: size || 'icon-lg',
            className: cn('animate-pulse bg-muted', className)
         })}
      />
   );
}
ThemeToggleSkeleton.displayName = 'ThemeToggleSkeleton';

export { ThemeToggle, ThemeToggleSkeleton }
