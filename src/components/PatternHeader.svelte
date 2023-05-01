<script lang="ts">
	export let title: string;
</script>

<header class="w-full text-center p-2 md:p-4 flex flex-col gap-4">
	<h1
		class="text-4xl font-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-transparent bg-clip-text"
	>
		{title}
	</h1>
	<div class="md:max-w-[70%] mx-auto">
		<slot name="description"><!-- optional fallback --></slot>
	</div>
</header>
