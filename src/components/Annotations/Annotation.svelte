<svelte:options accessors={true} />

<script lang="ts">
	import { annotate } from 'rough-notation';
	import { onMount } from 'svelte';

	import type {
		BracketType,
		RoughPadding,
		RoughAnnotationType,
		RoughAnnotation
	} from './annotationsType';

	let container: HTMLDivElement;

	export let visible = false;

	// Built-in fields. Use this instead of $$restProps so that properties set
	// only after component creation will be passed through.
	export let animate: boolean | undefined = undefined;
	export let animationDuration: number | undefined = undefined;
	export let color: string | undefined = undefined;
	export let strokeWidth: number | undefined = undefined;
	export let padding: RoughPadding | undefined = undefined;
	export let iterations: number | undefined = undefined;
	export let multiline: boolean | undefined = undefined;
	export let brackets: BracketType | BracketType[] | undefined = undefined;
	export let type: RoughAnnotationType = 'underline';

	// Emulate rough-notation API
	export const show = () => (visible = true);
	export const hide = () => (visible = false);
	export const isShowing = () => visible;

	export let annotation: RoughAnnotation | undefined = undefined;
	onMount(() => {
		annotation = annotate(container, {
			animate,
			animationDuration,
			color,
			strokeWidth,
			padding,
			iterations,
			multiline,
			brackets,
			type
		});
		return () => annotation?.remove();
	});

	$: if (annotation) {
		if (visible) {
			annotation.show();
		} else {
			annotation.hide();
		}
	}

	$: if (annotation && animate !== undefined) {
		annotation.animate = animate;
	}

	$: if (annotation && animationDuration !== undefined) {
		annotation.animationDuration = animationDuration;
	}

	$: if (annotation && color !== undefined) {
		annotation.color = color;
	}

	$: if (annotation && strokeWidth !== undefined) {
		annotation.strokeWidth = strokeWidth;
	}

	$: if (annotation && padding !== undefined) {
		annotation.padding = padding;
	}

	$: if (annotation && iterations !== undefined) {
		annotation.iterations = iterations;
	}

	$: if (annotation && brackets !== undefined) {
		annotation.brackets = brackets;
	}

	// Add multiline if rough-notation supports updating it
</script>

<div style="display:inline" bind:this={container}>
	<slot />
</div>
