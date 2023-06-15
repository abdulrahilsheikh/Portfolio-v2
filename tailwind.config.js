/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-purple": { primary: "#6928e6" },
				"theme-slate": {
					primary: "#040718",
					secondary: "#111425",
				},
			},
		},
	},
	plugins: [],
};
