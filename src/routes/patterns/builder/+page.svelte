<script lang="ts">
	import {
		Avatar,
		Button,
		ButtonGroup,
		Card,
		Fileupload,
		Input,
		Label,
		MenuButton
	} from 'flowbite-svelte';
	import Annotation from '../../../components/Annotations/Annotation.svelte';

	import PatternHeader from '../../../components/PatternHeader.svelte';

	import { UserProfileBuiler } from '../../../services/patterns/builder';

	let avatar = '';
	let name = '';
	let lastname = '';
	let jobTitle = '';
	let phone = '';
	let website = '';
	let email = '';

	let profileVisible = false;

	let inputFileValue: FileList | undefined = undefined;

	$: {
		if (inputFileValue) {
			avatar = URL.createObjectURL(inputFileValue[0]);
		}
	}

	function handleSubmit() {
		const builder = new UserProfileBuiler();

		builder.withAvatar(avatar);
		builder.withName(name);
		builder.withLastName(lastname);
		builder.withJobTitle(jobTitle);
		builder.withPhone(phone);
		builder.withWebsite(website);
		builder.withEmail(email);

		builder.getProfile();

		profileVisible = true;
	}

	function handleReset() {
		avatar = '';
		name = '';
		lastname = '';
		jobTitle = '';
		phone = '';
		website = '';
		email = '';

		profileVisible = false;
	}

	function setPartialProfile() {
		name = 'Leonardo';
		lastname = 'Cruces';
		jobTitle = 'Frontend developer';
		phone = '';
		website = '';
		email = 'leo@gmail.com';
	}

	function setFullProfile() {
		avatar = 'https://avatars.githubusercontent.com/u/74982565?v=4';
		name = 'Carlos';
		lastname = 'Cruces';
		jobTitle = 'Frontend developer';
		phone = '+57 300 123 4567';
		website = 'https://github.com/ItsMeLeonardo';
		email = 'leo@gmail.com';
	}
</script>

<section class="flex flex-col items-center p-2 pb-8">
	<PatternHeader title="Builder">
		<p slot="description" class="">
			Es un patrón de
			<Annotation visible type="highlight" color="#c084fc">diseño creacional</Annotation>
			que nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos
			tipos y representaciones de un objeto empleando el mismo código de construcción.
		</p>
	</PatternHeader>

	<h2 class="mx-auto font-medium text-2xl text-center">
		<Annotation visible type="underline" color="#7c3aed">Ejemplo</Annotation>
	</h2>

	<div class="py-4 pt-8 flex items-center gap-2 flex-col justify-center">
		<h3 class="text-2xl font-bold">Create Profile</h3>
		<ButtonGroup>
			<Button on:click={setPartialProfile}>Simple Card</Button>
			<Button on:click={setFullProfile}>Full Card</Button>
		</ButtonGroup>
	</div>

	<div class="grid md:grid-cols-2 max-w-[80%]">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="grid gap-6 md:grid-cols-2 mb-6">
				<div>
					<Label for="Avatar" class="mb-2">Avatar</Label>
					<Fileupload type="text" id="Avatar" placeholder="John" files={inputFileValue} />
				</div>
				<div>
					<Label for="first_name" class="mb-2">First name</Label>
					<Input type="text" id="first_name" placeholder="John" bind:value={name} required />
				</div>
				<div>
					<Label for="last_name" class="mb-2">Last name</Label>
					<Input type="text" id="last_name" placeholder="Doe" bind:value={lastname} required />
				</div>
				<div>
					<Label for="job" class="mb-2">Job title</Label>
					<Input type="text" id="job" placeholder="Company" bind:value={jobTitle} required />
				</div>
				<div>
					<Label for="phone" class="mb-2">Phone number</Label>
					<Input type="tel" id="phone" placeholder="123-45-678" bind:value={phone} />
				</div>
				<div>
					<Label for="website" class="mb-2">Website URL</Label>
					<Input type="url" id="website" placeholder="example.com" bind:value={website} />
				</div>
				<div>
					<Label for="email" class="mb-2">Email address</Label>
					<Input
						type="email"
						id="email"
						placeholder="john.doe@company.com"
						required
						bind:value={email}
					/>
				</div>
			</div>
			<Button type="submit" gradient color="purple" class="px-8" shadow="purple">Submit</Button>
			{#if profileVisible}
				<Button type="reset" gradient color="red" class="px-8" on:click={handleReset}>Reset</Button>
			{/if}
		</form>

		<div class="mx-4 flex flex-col gap-4 items-center bg-gray-100 justify-center rounded-xl">
			<h3 class="text-2xl font-bold">Profile Result</h3>
			{#if profileVisible}
				<Card padding="sm">
					<div class="flex justify-end">
						<MenuButton />
					</div>
					<div class="flex flex-col items-center pb-4 gap-2">
						{#if avatar}
							<Avatar size="lg" src={avatar} border class="object-cover" />
						{:else}
							<Avatar border size="lg">
								{name[0]}{lastname[0]}
							</Avatar>
						{/if}

						<h5 class="mb-2 text-xl font-medium text-center text-gray-900 dark:text-white">
							{name}
							{lastname}
						</h5>
						<span class="text-sm text-gray-500 dark:text-gray-400">
							{jobTitle}
						</span>
						{#if website}
							<a
								href={website}
								target="_blank"
								class="text-sm underline-offset-2 text-violet-500 underline"
							>
								{website}
							</a>
						{/if}
						{#if phone}
							<a href="tel:{phone}" class="text-sm underline-offset-2 text-indigo-500">
								{phone}
							</a>
						{/if}
						<div class="flex mt-4 space-x-3 lg:mt-6">
							<Button gradient color="purpleToPink">Add friend</Button>
							<Button color="light" class="dark:text-white">Message</Button>
						</div>
					</div>
				</Card>
			{/if}
		</div>
	</div>
</section>
