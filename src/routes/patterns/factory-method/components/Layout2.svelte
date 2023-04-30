<script lang="ts">
	import { Gallery } from 'flowbite-svelte';

	import type { GalleryImageProp } from './Layout';

	export let images: GalleryImageProp[] = [];

	function createSegments<T>(array: T[], size: number): Array<T[]> {
		return array.reduce((acc, _, i) => {
			if (i % size === 0) {
				acc.push(array.slice(i, i + size));
			}
			return acc;
		}, [] as Array<T[]>);
	}

	const imageSegments = createSegments(images, images.length / 4);
</script>

<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
	{#each imageSegments as images}
		<Gallery items={images} />
	{/each}
</Gallery>
