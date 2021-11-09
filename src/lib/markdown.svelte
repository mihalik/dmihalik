<script>
	export let title;
	export let date;
	export let type;
</script>

<h1 class="text-4xl">{title}</h1>
{#if type !== 'page'}<div class="mb-4 text-gray-400 italic">{date}</div>{/if}

<div class="prose lg:prose-xl">
	<slot />
</div>
