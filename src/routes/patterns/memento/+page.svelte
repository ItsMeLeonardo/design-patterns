<script lang="ts">
	import { Button, Textarea, Toggle, Toolbar, ToolbarButton, ToolbarGroup } from 'flowbite-svelte';
	import debounce from 'just-debounce';

	import Annotation from '../../../components/Annotations/Annotation.svelte';
	import PatternHeader from '../../../components/PatternHeader.svelte';
	import { formatTime } from '../../../utils/time/format';

	type Post = {
		id: number;
		content: string;
		date: Date;
	};

	let content = '';
	let history: Post[] = [];

	let autoSave = false;

	function handleSave() {
		history = [
			...history,
			{
				id: history.length + 1,
				content,
				date: new Date()
			}
		];
	}

	function removePost(id: number) {
		history = history.filter((post) => post.id !== id);
	}

	const autoSaveDebounced = debounce(() => {
		if (!autoSave) return;
		handleSave();
	}, 1000);
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Memento">
		<p slot="description" class="">
			es un patrón de diseño de comportamiento que te permite
			<Annotation visible type="highlight" color="#c084fc">guardar y restaurar</Annotation>
			el estado previo de un objeto sin revelar los detalles de su implementación.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>

	<div class="mt-8 w-full grid md:grid-cols-2 gap-4">
		<form class="w-full">
			<label for="editor" class="sr-only">Publish post</label>
			<Textarea
				id="editor"
				rows="8"
				class="mb-4"
				placeholder="Write a Post"
				bind:value={content}
				on:input={autoSaveDebounced}
			>
				<Toolbar slot="header" embedded>
					<ToolbarGroup>
						<ToolbarButton name="Attach file"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
								/></svg
							></ToolbarButton
						>
						<ToolbarButton name="Embed map"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/></svg
							></ToolbarButton
						>
						<ToolbarButton name="Upload image"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/></svg
							></ToolbarButton
						>
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarButton name="Prev">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M20.5 12H3.67004"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</ToolbarButton>
						<ToolbarButton name="Next">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M3.5 12H20.33"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</ToolbarButton>
					</ToolbarGroup>
					<ToolbarButton name="send" slot="end">
						<Toggle bind:checked={autoSave}>Auto save</Toggle>
					</ToolbarButton>
				</Toolbar>
			</Textarea>
			<Button on:click={handleSave}>Save post</Button>
		</form>

		<div class="flex flex-col gap-2 bg-gray-100 rounded-xl w-full p-4">
			<h3 class="w-full text-center font-bold text-lg">Post History</h3>

			{#each history as item}
				<div class="flex gap-2 w-full">
					<Button
						color="alternative"
						class="w-full"
						on:click={() => {
							content = item.content;
						}}
					>
						{formatTime(item.date)}
					</Button>
					<Button
						color="red"
						on:click={() => {
							removePost(item.id);
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.33 16.5H13.66"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.5 12.5H14.5"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
				</div>
			{/each}
		</div>
	</div>
</section>
