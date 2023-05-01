<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const gradientList = [
		'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)',
		'linear-gradient(90deg, #ffc3a0 0%, #ffafbd 100%)',
		'linear-gradient(90deg, #00b09b 0%, #96c93d 100%)',
		'linear-gradient(90deg, #11998e 0%, #38ef7d 100%)',
		'linear-gradient(90deg, #fc4a1a 0%, #f7b733 100%)',
		'linear-gradient(90deg, #7f00ff 0%, #e100ff 100%)',
		'linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)',
		'radial-gradient(farthest-corner circle at top right, #00dfff 0%, #8c00ea 100%)',
		'linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)',
		'linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)'
	];
</script>

<svelte:head>
	<title>Design Patterns</title>
</svelte:head>

<div class="px-4 py-8">
	<h1
		class="text-7xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
	>
		Design Patterns
	</h1>

	<div class="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
		{#each data.patternList as item, index}
			<Button href="/patterns/{item}" class="h-40 !p-0 overflow-hidden" color="alternative">
				<div class="w-full h-full flex items-center justify-center relative">
					<span
						style="background: {gradientList[index]};"
						class="aspect-square h-[120%] rounded-full absolute"
					/>
					<div
						class="flex items-center justify-center w-full h-full text-xl font-bold bg-white/5 relative backdrop-blur-3xl"
					>
						{item}
					</div>
				</div>
			</Button>
		{/each}
	</div>
</div>
