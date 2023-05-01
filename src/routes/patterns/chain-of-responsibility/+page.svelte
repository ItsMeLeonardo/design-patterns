<script lang="ts">
	import { Button, Helper, Input, Label, Toast } from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';
	import PatternHeader from '../../../components/PatternHeader.svelte';
	import { Validator, requiredRule, emailRule, passwordRule } from './utils/validator';

	let emailError: string[] = [];
	let passwordError: string[] = [];

	let emailSuccess = false;
	let passwordSuccess = false;

	let loginSuccess = false;

	function handleSubmit(event: SubmitEvent) {
		const emailValidator = new Validator();
		emailValidator.addRule(requiredRule);
		emailValidator.addRule(emailRule);

		const passwordValidator = new Validator();
		passwordValidator.addRule(requiredRule);
		passwordValidator.addRule(passwordRule);

		const form = event.target as HTMLFormElement;

		const email = form.email.value;
		const password = form.password.value;

		emailError = emailValidator.validate(email);
		passwordError = passwordValidator.validate(password);

		emailSuccess = !emailError.length;
		passwordSuccess = !passwordError.length;

		if (emailSuccess && passwordSuccess) {
			loginSuccess = true;
		}
	}
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Chain of responsibility">
		<p slot="description" class="">
			Es un patrón de diseño de comportamiento que te permite pasar solicitudes a lo largo de una
			cadena de manejadores. Al recibir una solicitud, cada manejador decide si la procesa o si la
			pasa al siguiente manejador de la cadena.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#c084fc">Ejemplo</Annotation>
	</h2>

	<div class="mt-8 w-full">
		<form
			class="flex flex-col gap-4 w-full max-w-[400px] mx-auto"
			on:submit|preventDefault={handleSubmit}
		>
			<div class="w-full">
				<Label class="block mb-2">Your email</Label>
				<Input
					label="Email"
					id="email"
					name="email"
					placeholder="name@gmail.com"
					color={emailSuccess ? 'green' : 'base'}
				/>
				<Helper class="text-sm mt-2" color="red">
					{#if emailError.length > 0}
						{#each emailError as error}
							<p>
								{error}
							</p>
						{/each}
					{/if}
				</Helper>
			</div>
			<div class="w-full">
				<Label class="block mb-2">Your Password</Label>
				<Input
					label="Email"
					id="password"
					name="password"
					type="password"
					placeholder="*****"
					color={passwordSuccess ? 'green' : 'base'}
				/>

				<Helper class="text-sm mt-2" color="red">
					{#if passwordError.length > 0}
						{#each passwordError as error}
							<p>
								{error}
							</p>
						{/each}
					{/if}
				</Helper>
			</div>

			<Button color="purple" type="submit" gradient shadow="purple">Submit</Button>
		</form>
		<div class="fixed bottom-4 left-4">
			<Toast bind:open={loginSuccess} color="green">
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
				Succesfully logged in!
			</Toast>
		</div>
	</div>
</section>
