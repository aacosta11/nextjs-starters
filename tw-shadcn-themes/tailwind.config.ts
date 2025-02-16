import type { Config } from "tailwindcss";
import { BREAKPOINTS } from "./lib/constants/breakpoints";

const config: Config = {
	darkMode: "selector",
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-background))',
				foreground: 'hsl(var(--color-foreground))',
				card: {
					DEFAULT: 'hsl(var(--color-card))',
					foreground: 'hsl(var(--color-card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--color-popover))',
					foreground: 'hsl(var(--color-popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--color-primary))',
					foreground: 'hsl(var(--color-primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary))',
					foreground: 'hsl(var(--color-secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--color-muted))',
					foreground: 'hsl(var(--color-muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--color-accent))',
					foreground: 'hsl(var(--color-accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--color-destructive))',
					foreground: 'hsl(var(--color-destructive-foreground))'
				},
				border: 'hsl(var(--color-border))',
				input: 'hsl(var(--color-input))',
				ring: 'hsl(var(--color-ring))',
				chart: {
					'1': 'hsl(var(--color-chart-1))',
					'2': 'hsl(var(--color-chart-2))',
					'3': 'hsl(var(--color-chart-3))',
					'4': 'hsl(var(--color-chart-4))',
					'5': 'hsl(var(--color-chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: { ...BREAKPOINTS },
			fontFamily: {
				sans: 'var(--font-inter)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
