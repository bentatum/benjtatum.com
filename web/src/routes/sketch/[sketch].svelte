<script context="module" lang="ts">
	export async function load({ page }) {
		return {
			props: {
				sketch: (await import(`./_sketches/${page.params.sketch}.ts`)).sketch
			}
		};
	}
</script>

<script lang="ts">
	import P5 from '../../components/canvas/P5.svelte';
	// import { page } from '$app/stores';
	// import { onMount } from 'svelte';

	export let sketch;
	// onMount(async () => {
	// 	try {
	// 		sketch = (await import(`./_sketches/${$page.params.sketch}.ts`)).sketch;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
</script>

<div class="h-screen w-full grid place-items-center">
	{#if sketch}
		<P5 {sketch} />
	{/if}
</div>
