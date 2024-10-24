'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { useMounted } from '@/hooks/use-mounted';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { MoonIcon, SunIcon, DesktopIcon } from '@/components/icons';

const themes: Record<string, { icon: React.ReactNode, label: string }> = {
   light: {
      icon: <SunIcon />,
      label: 'Light'
   },
   dark: {
      icon: <MoonIcon />,
      label: 'Dark'
   },
   system: {
      icon: <DesktopIcon />,
      label: 'System'
   }
}

export type ThemeToggleProps = ButtonProps;

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
   function ThemeToggle({ className, ...props }, ref) {
      const { theme, setTheme } = useTheme();
      const mounted = useMounted();

      const handleToggle = () => {
         if (theme === 'light') {
            setTheme('dark');
         } else if (theme === 'dark') {
            setTheme('system');
         } else {
            setTheme('light');
         }
      }

      return (
         <Button
            ref={ref}
            onClick={handleToggle}
            className={cn(
               !mounted && "relative pointer-event-none",
               className,
            )}
            size="icon-sm"
            disabled={!mounted}
            aria-label="theme toggle"
            {...props}
         >
            {mounted ? themes[theme || "system"].icon : <Skeleton className="size-full rounded-[inherit]" />}
         </Button>
      );
   }
)

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;