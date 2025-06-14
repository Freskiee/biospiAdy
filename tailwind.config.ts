
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#30C7B5',
					foreground: '#fff'
				},
				secondary: {
					DEFAULT: '#B1E5F4',
					foreground: '#183340'
				},
				accent: {
					DEFAULT: '#e7dac6',
					foreground: '#2d2d2d'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#1a2433'
				},
				muted: {
					DEFAULT: '#f0f0f0',
					foreground: '#666'
				}
			},
			fontFamily: {
				heading: ['"Playfair Display"', 'serif'],
				sans: ['Inter', 'Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: '1rem',
				md: '0.75rem',
				sm: '0.5rem',
			},
			keyframes: {
				'fade-in-up': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
