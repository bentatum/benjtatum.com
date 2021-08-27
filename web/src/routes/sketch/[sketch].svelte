<script lang="ts">
	import P5 from '../../components/canvas/P5.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let sketch;
	onMount(async () => {
		sketch = (await import(`../../sketches/${$page.params.sketch}`)).sketch;
	});
</script>

{#if sketch}
	<div class="h-screen w-full grid place-items-center">
		<P5 {sketch} />
	</div>
{/if}
