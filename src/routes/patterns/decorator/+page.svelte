<script lang="ts">
	import { Button, ButtonGroup } from 'flowbite-svelte';

	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';

	function openInputColorClickingButton(id: string) {
		const input = document.getElementById(id);

		if (!input) throw new Error(`Input with id ${id} not found`);

		input.click();
	}

	type TextStyle = 'bold' | 'italic' | 'underline';
	type TextAlignment = 'left' | 'center' | 'right';

	let textStyle: TextStyle | undefined;
	let textAlignment: TextAlignment = 'center';

	let bgColor = '#ffffff';
	let textColor = '#000000';
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Decorator">
		<p slot="description" class="">
			es un patrón de diseño estructural que te permite
			<Annotation visible type="highlight" color="#c084fc">
				añadir funcionalidades a objetos
			</Annotation>
			colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#7c3aed">Ejemplo</Annotation>
	</h2>

	<div class="mt-8 bg-gray-200 flex flex-col items-center justify-center rounded-lg p-4 gap-4">
		<div class="">
			<div class="flex gap-1 flex-wrap justify-center">
				<ButtonGroup>
					<Button
						on:click={() => (textStyle = 'bold')}
						color={textStyle === 'bold' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.87988 4.5C4.87988 3.4 5.77988 2.5 6.87988 2.5H11.9999C14.6199 2.5 16.7499 4.63 16.7499 7.25C16.7499 9.87 14.6199 12 11.9999 12H4.87988V4.5Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4.87988 12H14.3799C16.9999 12 19.1299 14.13 19.1299 16.75C19.1299 19.37 16.9999 21.5 14.3799 21.5H6.87988C5.77988 21.5 4.87988 20.6 4.87988 19.5V12V12Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>

					<Button
						on:click={() => (textStyle = 'italic')}
						color={textStyle === 'italic' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.62012 3H18.8701"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M5.12012 21H14.3701"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M14.25 3L9.75 21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
					<Button
						on:click={() => (textStyle = 'underline')}
						color={textStyle === 'underline' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 21H19"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
				</ButtonGroup>

				<ButtonGroup>
					<Button
						on:click={() => (textAlignment = 'left')}
						color={textAlignment === 'left' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3 4.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 9.5H12.47"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 14.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 19.5H12.47"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
					<Button
						on:click={() => (textAlignment = 'center')}
						color={textAlignment === 'center' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3 4.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7.26001 9.5H16.74"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 14.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M7.26001 19.5H16.74"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
					<Button
						on:click={() => (textAlignment = 'right')}
						color={textAlignment === 'right' ? 'purple' : 'alternative'}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3 4.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M11.53 9.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 14.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M11.53 19.5H21"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Button>
				</ButtonGroup>

				<ButtonGroup>
					<Button on:click={() => openInputColorClickingButton('font_color')}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.81 3.94012C20.27 7.78012 16.41 13.0001 13.18 15.5901L11.21 17.1701C10.96 17.3501 10.71 17.5101 10.43 17.6201C10.43 17.4401 10.42 17.2401 10.39 17.0501C10.28 16.2101 9.9 15.4301 9.23 14.7601C8.55 14.0801 7.72 13.6801 6.87 13.5701C6.67 13.5601 6.47 13.5401 6.27 13.5601C6.38 13.2501 6.55 12.9601 6.76 12.7201L8.32 10.7501C10.9 7.52012 16.14 3.64012 19.97 2.11012C20.56 1.89012 21.13 2.05012 21.49 2.42012C21.87 2.79012 22.05 3.36012 21.81 3.94012Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M10.43 17.6201C10.43 18.7201 10.01 19.77 9.22 20.57C8.61 21.18 7.78 21.6001 6.79 21.7301L4.33 22.0001C2.99 22.1501 1.84 21.01 2 19.65L2.27 17.1901C2.51 15.0001 4.34 13.6001 6.28 13.5601C6.48 13.5501 6.69 13.56 6.88 13.57C7.73 13.68 8.56 14.0701 9.24 14.7601C9.91 15.4301 10.29 16.21 10.4 17.05C10.41 17.24 10.43 17.4301 10.43 17.6201Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M14.24 14.47C14.24 11.86 12.12 9.73999 9.50999 9.73999"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<input
							type="color"
							id="font_color"
							class="appearance-none w-8 h-8 border-none bg-transparent"
							bind:value={textColor}
						/>
					</Button>
					<Button on:click={() => openInputColorClickingButton('bg_color')}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8.35 1.94995L9.69 3.28992"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.07 11.92L17.19 11.26"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M3 22H16"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<input
							type="color"
							id="bg_color"
							bind:value={bgColor}
							class="appearance-none w-8 h-8 border-none bg-transparent"
						/>
					</Button>
				</ButtonGroup>
			</div>
		</div>

		<div
			class="p-4 w-[50%] bg-white rounded-lg"
			class:text-center={textAlignment === 'center'}
			class:text-left={textAlignment === 'left'}
			class:text-right={textAlignment === 'right'}
			class:font-bold={textStyle === 'bold'}
			class:italic={textStyle === 'italic'}
			class:underline={textStyle === 'underline'}
			style="background: {bgColor}; color: {textColor}"
		>
			<h3 contenteditable>Hello world</h3>
		</div>
	</div>
</section>
