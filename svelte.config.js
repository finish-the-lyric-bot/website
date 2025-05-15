import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extension: '.svx',
			layout: {
				// optionally set default layout for svx files here
				// '*': './src/routes/+layout.svelte'
			}
		})
	],
	kit: { adapter: adapter() }
};

export default config;
