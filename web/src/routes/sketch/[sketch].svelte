<script context="module" lang="ts">
	export async function load({ page }) {
		try {
			const { title, description, sketch } = await import(
				`./_lib/sketches/${page.params.sketch}.ts`
			);
			return {
				props: {
					title,
					description,
					sketch,
					id: Number(page.params.sketch)
				}
			};
		} catch {}
	}
</script>

<script lang="ts">
	import type p5 from 'p5';
	import P5 from '$lib/components/canvas/P5.svelte';
	import Head from '$lib/components/Head.svelte';
	import IconButton from '$lib/components/elements/IconButton.svelte';
	import ChevronLeft from '$lib/components/icons/ChevronLeft.svelte';
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';

	export let id: number;
	export let sketch: (p: p5) => void;
	export let title: string;
	export let description: string;

	let documentTitle, backUrl, forwardUrl;
	$: {
		backUrl = id === 1 ? '/' : `/sketch/${id - 1}`;
		forwardUrl = `/sketch/${id + 1}`;
		documentTitle = `bent | Sketch #${id} | ${title}`;
	}
</script>

<svelte:head>
	<Head title={documentTitle} {description} uri={`/sketch/${id}`} />
</svelte:head>

<div class="h-screen w-full flex items-center justify-between relative px-7">
	<IconButton disabled={id > 1} class="text-2xl" href={backUrl}>
		<ChevronLeft />
	</IconButton>
	{#if sketch}
		<P5 {sketch} />
	{/if}
	<IconButton class="text-2xl" href={forwardUrl}>
		<ChevronRight />
	</IconButton>
</div>
