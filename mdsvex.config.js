const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: './src/lib/markdown.svelte',

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
