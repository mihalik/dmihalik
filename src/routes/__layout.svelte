<script>
	import '../tailwind.css';
	import { page } from '$app/stores';
</script>

<header class="flex justify-between mt-2">
	{#if $page.path !== '/'}
		<a href="/">
			<img
				alt="dmihalik avatar"
				class="ml-4 inline object-cover w-12 h-12 rounded-full"
				src="/images/avatar.png"
			/>
		</a>
	{/if}
</header>

<main class="font-sans mt-8">
	<slot />
</main>

<footer class="mt-8 border-t">
	<div class="flex py-2">
		<a class="mr-4" href="/about/">about</a>
		<a class="mr-4" href="/archive/">blog archive</a>
		<a href="/contact/">contact</a>
	</div>
	<p class="text-gray-400">
		Copyright &#169; {new Date().getFullYear()}, Dustin Mihalik
	</p>
</footer>
