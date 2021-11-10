<script>
	export let title;
	export let date;
	export let type;
	let pageTitle = 'dmihalik.com';
	if (title) {
		pageTitle = `${pageTitle} - ${title}`;
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<div class="mb-4">
	{#if title}<h1 class="text-4xl">{title}</h1>{/if}
	{#if title && type !== 'page'}<div class="text-gray-400 italic">{date}</div>{/if}
</div>

<div class="prose lg:prose-xl">
	<slot />
</div>
