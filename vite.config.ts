import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from "mdsvex"
import { resolve } from "path"

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) => {
                    // Tving legacy-modus for MDsveX
                    if (filename.endsWith('.svx') || filename.endsWith('.md')) {
                        return false;
                    }
                    if (filename.split(/[/\\]/).includes('node_modules')) {
                        return undefined;
                    }
                    return true;
                }
            },
            extensions: [".svelte", ".svx"],
            preprocess: [
                mdsvex({
                    layout: { _: resolve("./src/lib/components/MdsvexLayout.svelte") }
                })],

            // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
            // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
            // See https://svelte.dev/docs/kit/adapters for more information about adapters.
            adapter: adapter()
        })
    ]
});
