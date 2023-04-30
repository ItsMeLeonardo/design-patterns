<script lang="ts">
	import Layout1 from './Layout1.svelte';
	import Layout2 from './Layout2.svelte';
	import Layout3 from './Layout3.svelte';

	import type { GalleryImageProp, FactoryLayoutTypes } from './Layout';

	export let type: FactoryLayoutTypes = 'layout1';

	export let images: GalleryImageProp[] = [];
</script>

{#if type === 'layout1'}
	<Layout1 {images} />
{:else if type === 'layout2'}
	<Layout2 {images} />
{:else if type === 'layout3'}
	<Layout3 {images} />
{/if}
