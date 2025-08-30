import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'; 
import fs from 'fs';
import path from 'path';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src', 'lib', 'posts');

function getBlogSlugs() {
  try {
    const filenames = fs.readdirSync(POSTS_DIRECTORY);
    return filenames.map(filename => `/blog/${filename.replace('.md', '')}`);
  } catch (error) {
    return [];
  }
}

const config = {
  preprocess: sveltePreprocess(),
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
