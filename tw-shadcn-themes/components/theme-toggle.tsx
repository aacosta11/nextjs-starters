'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/ui-utils';
import { useMounted } from '@/hooks/use-mounted';
import { IconType, LightThemeIcon, DarkThemeIcon, SystemThemeIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';


const themes: Record<string, { icon: IconType, label: string }> = {
   light: {
      icon: LightThemeIcon,
      label: 'Light'
   },
   dark: {
      icon: DarkThemeIcon,
      label: 'Dark'
   },
   system: {
      icon: SystemThemeIcon,
      label: 'System'
   }
}


export function ThemeToggle({ className, ...props }: React.ComponentProps<typeof Button>) {
   const { theme, setTheme } = useTheme();
   const mounted = useMounted();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon-sm" aria-label="Toggle theme" className={cn("relative", className)} disabled={!mounted} {...props}>
               <LightThemeIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0 origin-bottom" />
               <DarkThemeIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100 origin-bottom" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
               {mounted && Object.entries(themes).map(([key, { icon: Icon, label }]) =>
                  <DropdownMenuRadioItem key={key} value={key} className="flex items-center gap-x-2">
                     <Icon className="size-4" />
                     <span>{label}</span>
                  </DropdownMenuRadioItem>
               )}
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
