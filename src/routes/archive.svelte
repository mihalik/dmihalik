<script context="module" lang="ts">
	const posts = import.meta.glob('./articles/**/*.md');
	let body = [];
	for (const path in posts) {
		const urlPath = path.replace('index.md', '');
		body.push(posts[path]().then(({ metadata }) => ({ ...metadata, path: urlPath })));
	}
	body.reverse();

	export async function load({ page, fetch }) {
		const postList = await Promise.all(body);
		return {
			props: {
				postList
			}
		};
	}
</script>

<script>
	export let postList;
</script>

<div class="">
	<h1 class="break-normal pt-6 pb-2 text-3xl md:text-4xl">Archived blog posts</h1>

	<ul class="list-none">
		{#each postList as { title, date, path }}
			<li class="list-none">
				<a class="text-blue-500 space-y-3" rel="prefetch" href={path}>
					<h3>
						{title} ({date})
					</h3>
				</a>
			</li>
		{/each}
	</ul>
</div>
