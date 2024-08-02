import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				poppins: ["var(--font-poppins)"],
			},
			colors: {
				"blossom": {
					50: "#FDF7F8",
					100: "#FBEEF0",
					200: "#F8DEE2",
					300: "#F4CDD3",
					400: "#F1C1C8",
					500: "#EDAFB8",
					600: "#DE6D7E",
					700: "#C82D44",
					800: "#851E2D",
					900: "#430F17",
					950: "#21070B"
				},
			}
		},
	},
	plugins: [],
};
export default config;
