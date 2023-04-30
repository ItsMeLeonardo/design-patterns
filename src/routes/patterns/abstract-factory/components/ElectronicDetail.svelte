<script lang="ts">
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';

	type Color = {
		label: string;
		value: string;
		className: string;
	};

	type Size = {
		label: string;
		value: string;
	};

	type Brand = {
		label: string;
		value: string;
	};

	const colors: Color[] = [
		{
			label: 'Red',
			value: 'red',
			className: 'bg-red-800'
		},
		{
			label: 'Green',
			value: 'green',
			className: 'bg-green-800'
		},
		{
			label: 'Blue',
			value: 'blue',
			className: 'bg-blue-700'
		},
		{
			label: 'Black',
			value: 'black',
			className: 'bg-black'
		}
	];

	const sizes: Size[] = [
		{
			label: '64GB',
			value: '64gb'
		},
		{
			label: '128GB',
			value: '128gb'
		},
		{
			label: '256GB',
			value: '256gb'
		},
		{
			label: '512GB',
			value: '512gb'
		}
	];

	const brands: Brand[] = [
		{
			label: 'Apple',
			value: 'apple'
		},
		{
			label: 'Samsung',
			value: 'samsung'
		},
		{
			label: 'Huawei',
			value: 'huawei'
		},
		{
			label: 'Xiaomi',
			value: 'xiaomi'
		}
	];

	let selectedColor: Color = colors[0];
	let selectedSize: Size = sizes[0];
	let selectedBrand: Brand = brands[0];
</script>

<div class="flex items-center gap-2">
	<Button color="alternative">
		<Chevron>
			<div class="flex items-center gap-2">
				<span class={`w-6 h-6 relative block rounded ${selectedColor.className}`} />
				<span>{selectedColor.label}</span>
			</div>
		</Chevron>
	</Button>
	<Dropdown>
		{#each colors as color}
			<DropdownItem on:click={() => (selectedColor = color)}>
				<div
					class="flex items-center gap-2 opacity-50"
					class:opacity-100={selectedColor.value === color.value}
				>
					<span class={`w-6 h-6 relative block rounded ${color.className}`} />
					<span>{color.label}</span>
				</div>
			</DropdownItem>
		{/each}
	</Dropdown>

	<Button color="alternative">
		<Chevron>
			{selectedSize.label}
		</Chevron>
	</Button>
	<Dropdown>
		{#each sizes as sizes}
			<DropdownItem on:click={() => (selectedSize = sizes)}>
				<div
					class="flex items-center gap-2 opacity-50"
					class:opacity-100={selectedSize.value === sizes.value}
				>
					<span class="w-6 h-6 relative block rounded" />
					<span>{sizes.label}</span>
				</div>
			</DropdownItem>
		{/each}
	</Dropdown>

	<Button color="alternative">
		<Chevron>
			{selectedBrand.label}
		</Chevron>
	</Button>

	<Dropdown>
		{#each brands as brands}
			<DropdownItem on:click={() => (selectedBrand = brands)}>
				<div
					class="flex items-center gap-2 opacity-50"
					class:opacity-100={selectedSize.value === brands.value}
				>
					<span class="w-6 h-6 relative block rounded" />
					<span>{brands.label}</span>
				</div>
			</DropdownItem>
		{/each}
	</Dropdown>
</div>
