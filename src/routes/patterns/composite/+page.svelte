<script>
	import { Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Composite">
		<p slot="description" class="">
			Es un patron que te permite componer objetos en <Annotation
				visible
				type="highlight"
				color="#c084fc"
			>
				estructuras de árbol
			</Annotation> y trabajar con esas estructuras como si fueran objetos individuales.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#7c3aed">Ejemplo</Annotation>
	</h2>

	<div class="mt-8">
		<Button color="alternative"><Chevron>Menu</Chevron></Button>
		<Dropdown>
			<DropdownItem class="flex items-center justify-between">
				<Chevron placement="right">Menu item 1</Chevron>
			</DropdownItem>
			<Dropdown placement="right-start">
				<DropdownItem>Sub menu 1</DropdownItem>
				<DropdownItem>Sub menu 2</DropdownItem>
				<DropdownItem>Sub menu 3</DropdownItem>
			</Dropdown>
			<DropdownItem class="flex items-center justify-between">Menu item 2</DropdownItem>
			<DropdownItem class="flex items-center justify-between">
				<Chevron placement="right">Menu item 3</Chevron>
			</DropdownItem>
			<Dropdown placement="right-start">
				<DropdownItem>Sub menu 1</DropdownItem>
				<DropdownItem>Sub menu 2</DropdownItem>
				<DropdownItem>Sub menu 3</DropdownItem>
			</Dropdown>
		</Dropdown>
	</div>
</section>
