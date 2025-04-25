'use client'
import { useEffect, useState } from 'react'

/**
 * A custom React hook that determines if a component has been mounted.
 *
 * This hook is useful for ensuring that certain operations or rendering logic
 * only occur after the component has been mounted, avoiding issues with server-side rendering (SSR).
 *
 * @returns A boolean value indicating whether the component has been mounted.
 *
 * @example
 * ```tsx
 * import { useMounted } from '@/hooks/use-mounted';
 *
 * const MyComponent = () => {
 *   const isMounted = useMounted();
 *
 *   return (
 *     <div>
 *       {isMounted ? 'Component is mounted' : 'Component is not mounted'}
 *     </div>
 *   );
 * };
 * ```
 */
export const useMounted = () => {
   const [mounted, setMounted] = useState(false)
   useEffect(() => {
      setMounted(true)
   }, [])
   return mounted
}