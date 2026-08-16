import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
// export default defineConfig(({ mode }) => ({
	plugins: [react()],

	build: {
		commonjsOptions: {
			transformMixedEsModules: true
		},

		base: "/",
		// base: "/shigimcp_2026_reactvite/",
		// base: "https://shigimcp.github.io/shigimcp_2026_reactvite/",
		// base: "/Xstage/shigimcp_2026_reactvite/",
		// base: "https://www.shigimcp.com/Xstage/shigimcp_2026_reactvite/",
		// base: "./",
		// base: "",
		// base: mode === 'production' ? 'https://www.shigimcp.com/Xstage/shigimcp_2026_reactvite/' : '/',

		// outDir: 'build',
		// sourcemap: true,
	},

	// server: {
	// 	host: '0.0.0.0', // Exposes the server on all network interfaces
	// 	port: 5173,
	// }


	// REF: google search: react vite development mode load external jsx
	// esbuild: {
	// 	loader: 'jsx', // Enables JSX in .js files
	// 	include: /src\/.*\.jsx?$/, // Optional: restrict to specific folders
	// 	exclude: [],
	// },

	// optimizeDeps: {
	// 	esbuildOptions: {
	// 		loader: {
	// 			'.js': 'jsx', // Forces Vite to pre-bundle .js as jsx
	// 		},
	// 	},
	// },

});
// }));
