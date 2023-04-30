<script>
	import { Button, Checkbox, Input, Label, Toggle } from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';

	let darkMode = false;
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Singleton">
		<p slot="description" class="">
			Es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una
			<Annotation visible type="highlight" color="#c084fc">única instancia</Annotation>
			, a la vez que proporciona un punto de acceso global a dicha instancia.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#7c3aed">Ejemplo</Annotation>
	</h2>

	<div class:dark={darkMode}>
		<div class="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
			<div class="py-4">
				<Toggle bind:checked={darkMode}>Enable dark mode</Toggle>
			</div>

			<form>
				<div class="grid gap-6 mb-6 md:grid-cols-3">
					<div>
						<Label for="first_name" class="mb-2">First name</Label>
						<Input type="text" id="first_name" placeholder="John" required />
					</div>
					<div>
						<Label for="last_name" class="mb-2">Last name</Label>
						<Input type="text" id="last_name" placeholder="Doe" required />
					</div>
					<div>
						<Label for="company" class="mb-2">Company</Label>
						<Input type="text" id="company" placeholder="Flowbite" required />
					</div>
					<div>
						<Label for="phone" class="mb-2">Phone number</Label>
						<Input
							type="tel"
							id="phone"
							placeholder="123-45-678"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							required
						/>
					</div>
					<div>
						<Label for="website" class="mb-2">Website URL</Label>
						<Input type="url" id="website" placeholder="flowbite.com" required />
					</div>
					<div>
						<Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
						<Input type="number" id="visitors" placeholder="" required />
					</div>
				</div>
				<div class="mb-6">
					<Label for="email" class="mb-2">Email address</Label>
					<Input type="email" id="email" placeholder="john.doe@company.com" required />
				</div>
				<div class="mb-6">
					<Label for="password" class="mb-2">Password</Label>
					<Input type="password" id="password" placeholder="•••••••••" required />
				</div>
				<div class="mb-6">
					<Label for="confirm_password" class="mb-2">Confirm password</Label>
					<Input type="password" id="confirm_password" placeholder="•••••••••" required />
				</div>
				<Checkbox class="mb-6 space-x-1" required>
					I agree with the <span class="underline">terms and conditions</span>.
				</Checkbox>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	</div>
</section>
