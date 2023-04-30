<script lang="ts">
	import ClothingDetail from './ClothingDetail.svelte';
	import ElectronicDetail from './ElectronicDetail.svelte';

	export let productType: 'clothing' | 'electronic' = 'clothing';
</script>

{#if productType === 'clothing'}
	<ClothingDetail />
{:else}
	<ElectronicDetail />
{/if}
