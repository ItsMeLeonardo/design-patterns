<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	import type { BlogCardProps } from './type';

	export let title: string;
	export let description: string;

	const dispatch = createEventDispatcher<{
		clone: BlogCardProps;
	}>();

	const clone = () => {
		dispatch('clone', {
			title,
			description
		});
	};
</script>

<Card padding="none" class="shadow-xl border-none">
	<picture>
		<img
			src="https://images.unsplash.com/photo-1682778964790-b2fa177b5e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
			alt=""
			class="w-full h-48 object-cover rounded-t-lg"
		/>
	</picture>
	<div class="p-4">
		<h5
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			contenteditable
			bind:textContent={title}
		/>
		<p
			class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
			contenteditable
			bind:textContent={description}
		/>
		<Button>Read more</Button>
		<Button color="purple" gradient on:click={clone}>Clone</Button>
	</div>
</Card>
