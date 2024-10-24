import { Button } from '@/components/ui/button';
import { HomeIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { BREAKPOINTS } from '@/lib/constants/breakpoints';

export default function Home() {

  return (
    <div className="p-6 flex flex-col items-center gap-6">
      <div className="fixed inset-x-0 top-0 pointer-events-none">
        {
          Object.entries(BREAKPOINTS).map(([breakpoint, value], i) =>
            <div key={i} className="absolute inset-x-0 flex justify-center">
              <div className="group h-6 border-x border-x-red-600 shrink-0 hover:bg-accent pointer-events-auto" style={{ width: value, zIndex: 50 - i }}>
                <div className="text-center text-accent-foreground size-full grid place-content-center opacity-0 group-hover:opacity-100  transition-opacity">{breakpoint} - {value}</div>
              </div>
            </div>
          )
        }
      </div>
      <div className="text-center mt-6">
        hello, world!
      </div>
      <ThemeToggle />
      <div className="flex flex-col gap-2 mt-6 max-w-lg w-full">
        {
          (["xs", "sm", "md", "lg"] as const).map((size, i) =>
            <div key={i} className="flex gap-[inherit]">
              <div className="basis-24">{size}</div>
              <Button variant="primary" size={size}>
                lorem ipsum
              </Button>
              <Button variant="primary" size={`icon-${size}`}>
                <HomeIcon />
              </Button>
              <Button variant="primary" size={size}>
                <HomeIcon />
                lorem ipsum
              </Button>
            </div>
          )
        }
      </div>
    </div>
  );
}
