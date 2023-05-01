<script lang="ts">
	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';
	import BlogCard from './components/BlogCard.svelte';
	import type { BlogCardProps } from './components/type';

	let blogCards: BlogCardProps[] = [
		{
			title: 'Blog Card 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		}
	];

	function handleClone(event: CustomEvent<BlogCardProps>) {
		blogCards = [...blogCards, event.detail];
	}
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Prototype">
		<p slot="description" class="">
			Es un patrón de
			<Annotation visible type="highlight" color="#c084fc">diseño creacional</Annotation>
			que nos permite copiar objetos existentes sin la necesidad de inicializarlos, lo que puede ser
			costoso para la aplicación.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>

	<div class="grid md:grid-cols-3 gap-4 mt-8">
		{#each blogCards as card}
			<div>
				<BlogCard
					bind:description={card.description}
					bind:title={card.title}
					on:clone={handleClone}
				/>
			</div>
		{/each}
	</div>
</section>
