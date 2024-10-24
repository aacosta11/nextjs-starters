'use client';
import { useMediaQuery } from '@react-hook/media-query';
import { BREAKPOINTS } from '@/lib/constants/breakpoints';

export type Breakpoint = keyof typeof BREAKPOINTS;

export type MediaQueryMode = 'min' | 'max';

export const useScreenSize = (screen: Breakpoint, mode: MediaQueryMode = 'max') => {
   return useMediaQuery(`(${mode}-width: ${BREAKPOINTS[screen]})`);
}

export default useScreenSize;