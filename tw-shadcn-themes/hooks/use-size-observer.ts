// credit: https://www.npmjs.com/package/@react-hook/resize-observer

'use client';
import * as React from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export const useSizeObserver = (ref: React.RefObject<HTMLElement>) => {
   const [size, setSize] = React.useState<DOMRectReadOnly | null>(null);

   useResizeObserver(ref, (entry) => {
      setSize(entry.contentRect);
   });

   React.useLayoutEffect(() => {
      if (ref.current) {
         setSize(ref.current.getBoundingClientRect());
      }
   }, [ref])

   return size;
}

export default useSizeObserver;