'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
   return (
      <NextThemesProvider {...props}>
         {children}
      </NextThemesProvider>
   )
}
ThemeProvider.displayName = 'ThemeProvider';

export {
   ThemeProvider,
   useTheme
}