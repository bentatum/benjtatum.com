<script context="module" lang="ts">
	export async function load({ page }) {
		return {
			props: {
				sketch: (await import(`./_lib/sketches/${page.params.sketch}.ts`)).sketch
			}
		};
	}
</script>

<script lang="ts">
	import type p5 from 'p5';
	import P5 from '$lib/components/canvas/P5.svelte';
	export let sketch: (p: p5) => void;
</script>

<div class="h-screen w-full grid place-items-center">
	{#if sketch}
		<P5 {sketch} />
	{/if}
</div>
