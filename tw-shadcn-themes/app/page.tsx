import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { HomeIcon } from '@/components/icons';
import { BREAKPOINTS } from '@/lib/breakpoints';

export default function Home() {
  return (
    <div className="p-6 flex flex-col items-center @container">
      <div className="fixed inset-x-0 top-0 pointer-events-none">
        {
          Object.entries(BREAKPOINTS).map(([breakpoint, value], i) =>
            <div key={i} className="absolute inset-x-0 flex justify-center">
              <div className="group h-6 border-x border-x-red-600 shrink-0 hover:bg-accent pointer-events-auto" style={{ width: value, zIndex: 50 - i }}>
                <div className="text-center text-accent-foreground size-full grid place-content-center opacity-0 group-hover:opacity-100  transition-opacity text-sm">{breakpoint} - {value}</div>
              </div>
            </div>
          )
        }
      </div>
      <div>hello, world!</div>
      <ThemeToggle className="mt-4" />
      <div className="flex flex-col gap-x-2 gap-y-2 mt-6 max-w-lg w-full">
        {
          (["sm", "md", "lg"] as const).map((size, i) =>
            <div key={i} className="flex gap-[inherit] flex-col @sm:flex-row">
              <div className="@sm:basis-24">{size}</div>
              <div className="flex gap-[inherit]">
                <Button variant="primary" size={size}>
                  <span>lorem ipsum</span>
                </Button>
                <Button variant="primary" size={`icon-${size}`}>
                  <HomeIcon />
                </Button>
                <Button variant="primary" size={size}>
                  <HomeIcon />
                  <span>lorem ipsum</span>
                </Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
