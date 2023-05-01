<script lang="ts">
	import { Alert, Button, Toast } from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';
	import PatternHeader from '../../../components/PatternHeader.svelte';

	let list: string[] = [];

	let showToasts = false;

	function addList() {
		list = [...list, `List ${list.length + 1}`];
	}

	function removeList(item: string) {
		list = list.filter((listItem) => listItem !== item);
	}

	$: {
		if (list.length > 0) {
			showToasts = true;
			setTimeout(() => {
				showToasts = false;
			}, 2000);
		}
	}
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Observer">
		<p slot="description" class="">
			es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción
			para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están
			observando.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>

	<div class="mt-8 w-full">
		<div class="bg-slate-100 p-2 rounded-xl max-w-lg flex flex-col gap-2 mx-auto">
			{#each list as item}
				<Alert color="dark" dismissable>
					{item}
				</Alert>
			{/each}

			<Button color="alternative" on:click={addList}>Add List</Button>
		</div>

		<div class="fixed bottom-4 left-4">
			<Toast bind:open={showToasts}>
				<svelte:fragment slot="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
						/><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
						/>
					</svg>
				</svelte:fragment>
				List modified
			</Toast>
		</div>
	</div>
</section>
