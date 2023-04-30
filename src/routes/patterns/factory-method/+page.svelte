<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import PatternHeader from '../../../components/PatternHeader.svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';
	import CreateLayout from './components/CreateLayout.svelte';
	import type { FactoryLayoutTypes } from './components/Layout';
	import GridSquare from '../../../components/Icons/GridSquare.svelte';
	import GridMassonry from '../../../components/Icons/GridMassonry.svelte';
	import Grid3x3 from '../../../components/Icons/Grid3x3.svelte';

	const images = [
		{ alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' },
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' },
		{ alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
		{ alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' },
		{ alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
		{
			alt: 'playstation',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
		},
		{ alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
	];

	let visible = false;

	let layoutType: FactoryLayoutTypes = 'layout1';

	type LayoutItem = {
		name: string;
		value: FactoryLayoutTypes;
		icon: typeof SvelteComponent;
	};

	const layoutTypes: LayoutItem[] = [
		{
			name: 'Layout 1',
			value: 'layout1',
			icon: Grid3x3
		},
		{
			name: 'Layout 2',
			value: 'layout2',
			icon: GridMassonry
		},
		{
			name: 'Layout 3',
			value: 'layout3',
			icon: GridSquare
		}
	];

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 1000);
	});
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Factory Method">
		<p slot="description" class="">
			Es un patrón de
			<Annotation bind:visible type="highlight" color="#c084fc">diseño creacional</Annotation>
			que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases
			alterar el tipo de objetos que se crearán.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#7c3aed">Ejemplo</Annotation>
	</h2>

	<div class="flex w-full items-center justify-center py-4">
		<ButtonGroup>
			{#each layoutTypes as layout}
				<Button
					class="flex gap-2 items-center"
					on:click={() => (layoutType = layout.value)}
					gradient={layoutType === layout.value}
					color={layoutType === layout.value ? 'purple' : undefined}
				>
					<svelte:component this={layout.icon} />
					<span>{layout.name}</span>
				</Button>
			{/each}
		</ButtonGroup>
	</div>
	<div class="md:max-w-[50%]">
		<CreateLayout bind:type={layoutType} {images} />
	</div>
</section>
