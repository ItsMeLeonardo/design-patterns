<script lang="ts">
	import {
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';
	import PatternHeader from '../../../components/PatternHeader.svelte';

	import { responseProducts } from './utils/data';
	import { ProductAdapter } from '../../../data/code-snippet/adapter';
	import type { Product } from './utils/products';

	let products: Product[] = [];

	function adaptTable() {
		const newProducts = new ProductAdapter(responseProducts);

		products = newProducts.getProducts();
	}
</script>

<section class="flex flex-col items-center md:p-2 pb-8">
	<PatternHeader title="Adapter">
		<p slot="description" class="">
			Este patron se basa en el clásico conflicto entre piezas cuadradas y agujeros redondos. El
			patrón Adapter permite que objetos con
			<Annotation visible type="highlight" color="#c084fc">interfaces incompatibles</Annotation>
			trabajen juntos.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>

	<div class="pt-8">
		<div class="p-2">
			<Button on:click={adaptTable} color="purple" gradient>Adapt table</Button>
		</div>
		<Table shadow>
			<TableHead>
				<TableHeadCell>Product name</TableHeadCell>
				<TableHeadCell>Color</TableHeadCell>
				<TableHeadCell>Category</TableHeadCell>
				<TableHeadCell>Price</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each products as product}
					<TableBodyRow>
						<TableBodyCell>{product.name}</TableBodyCell>
						<TableBodyCell>{product.color}</TableBodyCell>
						<TableBodyCell>{product.category}</TableBodyCell>
						<TableBodyCell>{product.price}</TableBodyCell>
					</TableBodyRow>
				{:else}
					{#each responseProducts as product}
						<TableBodyRow>
							<TableBodyCell>--</TableBodyCell>
							<TableBodyCell>--</TableBodyCell>
							<TableBodyCell>--</TableBodyCell>
							<TableBodyCell>--</TableBodyCell>
						</TableBodyRow>
					{/each}
				{/each}
			</TableBody>
		</Table>
	</div>
</section>
