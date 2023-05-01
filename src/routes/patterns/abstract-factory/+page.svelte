<script lang="ts">
	import { Button, ButtonGroup } from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';
	import ProductDetailFactory from './components/ProductDetailFactory.svelte';

	type ProductType = {
		name: string;
		value: 'clothing' | 'electronic';
	};

	const productTypes: ProductType[] = [
		{
			name: 'Clothing',
			value: 'clothing'
		},
		{
			name: 'Electronic',
			value: 'electronic'
		}
	];

	let productType: ProductType = productTypes[0];
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Abstract Factory">
		<p slot="description" class="">
			Es un patrón de
			<Annotation visible type="highlight" color="#c084fc">diseño creacional</Annotation> que nos permite
			producir familias de objetos relacionados sin especificar sus clases concretas.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>
	<div class="flex w-full items-center justify-center py-4">
		<ButtonGroup>
			{#each productTypes as product}
				<Button
					class="flex gap-2 items-center"
					on:click={() => (productType = product)}
					gradient={productType.value === product.value}
					color={productType.value === product.value ? 'purple' : undefined}
				>
					<span>{product.name}</span>
				</Button>
			{/each}
		</ButtonGroup>
	</div>

	<div class="py-4">
		<ProductDetailFactory productType={productType.value} />
	</div>
</section>
