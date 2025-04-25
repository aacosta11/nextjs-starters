import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/ui-utils"


const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none shrink-0 cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-50 ",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 ",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ",
  ],
  {
    variants: {
      variant: {
        unset: "",
        primary: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        unset: "",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9 rounded-md px-4 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 p-0",
        "icon-md": "size-9 p-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-lg": "size-10 p-0 text-base [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type ButtonProps =
  & React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants>
  & { asChild?: boolean, unset?: boolean }

function Button({
  className,
  variant,
  size,
  asChild = false,
  unset,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  if (unset) { variant = "unset"; size = "unset"; }
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
