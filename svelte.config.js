import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'; 
import { mdsvex } from 'mdsvex';
import path from 'path';

// NOTE: The POSTS_DIRECTORY import is unused in the config itself,
// but is fine to leave here if it's used elsewhere in your project.
const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'lib', 'posts');

const config = {
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		},
		prerender: {
			entries: [
				'/',
				'/projects',
				'/blog',
				'/404'
			],
			handleHttpError: 'warn',
			handleUnseenRoutes: 'warn',
			handleMissingId: ({ path, id, referrer, message }) => {
				if (path.endsWith('.pdf') && id.startsWith('toolbar=')) {
					return;
				}
				console.warn(`Missing ID '${id}' on ${path} from ${referrer}: ${message}`);
			}
		}
	}
};

export default config;
