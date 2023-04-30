<script lang="ts">
	import { Gallery } from 'flowbite-svelte';

	import type { GalleryImageProp } from './Layout';

	export let images: GalleryImageProp[] = [];
</script>

<Gallery class="gap-2 grid-cols-2">
	{#each images as { alt, src }}
		<img {src} {alt} class="w-full aspect-square object-cover" />
	{/each}
</Gallery>
