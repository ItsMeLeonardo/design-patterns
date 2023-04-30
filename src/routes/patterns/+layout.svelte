<script lang="ts">
	import {
		Button,
		Input,
		Modal,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Tooltip
	} from 'flowbite-svelte';
	import type { LayoutData } from './$types';

	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import 'svelte-highlight/styles/one-light.css';
	import Annotation from '../../components/Annotations/Annotation.svelte';

	let codeModalOpen = false;
	export let data: LayoutData;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Front Patterns
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button
			data-collapse-toggle="mobile-menu-3"
			aria-controls="mobile-menu-3"
			aria-expanded="false"
			class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 dark:text-white"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/></svg
			>
		</Button>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 dark:text-white"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/></svg
				>
			</div>
			<Input id="search-navbar" class="pl-10" placeholder="Search..." />
		</div>
		<NavHamburger on:click={toggle} />
	</div>

	<NavUl {hidden}>
		{#each data.patternList as patternPath}
			<Annotation visible={patternPath === data.patternName} type="highlight" color="#6d28d9">
				<NavLi
					outline
					activeClass="text-white"
					href="/patterns/{patternPath}"
					active={patternPath === data.patternName}
				>
					{patternPath}
				</NavLi>
			</Annotation>
		{/each}
	</NavUl>
</Navbar>

<slot><!-- optional fallback --></slot>

<Button
	id="show-code"
	class="fixed bottom-4 right-4 !rounded-[1rem] !p-2.5"
	gradient
	color="purple"
	shadow="purple"
	on:click={() => (codeModalOpen = true)}
>
	<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9.60002 8.96997L7.11002 11.46C6.82002 11.75 6.82002 12.24 7.11002 12.53L9.60002 15.02"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M14.4 8.96997L16.89 11.46C17.18 11.75 17.18 12.24 16.89 12.53L14.4 15.02"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</Button>
<Tooltip triggeredBy="#show-code">View code</Tooltip>

<Modal bind:open={codeModalOpen} autoclose size="md">
	<h2 class="text-xl font-bold text-center">{data.patternName}</h2>
	<Highlight language={typescript} code={data.snippet} />
</Modal>
