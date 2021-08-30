<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { browser } from '$app/env';
	import type p5 from 'p5';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	type Sketch = (instance: p5) => void;

	export let target = undefined;
	export let sketch: Sketch;

	const project = writable<p5>();
	const _sketch = writable<Sketch>(sketch);

	const ref = (node) => {
		target = node;
		return {
			destroy() {
				target = undefined;
			}
		};
	};

	const augmentClasses = (instance, classes) => {
		classes.forEach(([key, value]) => (instance[key] = value));
		return instance;
	};

	let P5;

	const getP5Classes = (p5Instance) => {
		const entries = Object.entries(p5Instance);
		return entries.filter(
			([key, value]) => value instanceof Function && key[0] !== '_' && key !== 'default'
		);
	};

	const mount = async () => {
		if (!$_sketch) return;

		P5 = P5 || (await import('p5')).default;

		if ($project) {
			$project.remove();
			project.set(undefined);
		}

		project.set(
			new P5((instance) => {
				instance = augmentClasses(instance, getP5Classes(P5));
				return $_sketch(instance);
			}, target)
		);
	};

	_sketch.subscribe(() => {
		if (browser) mount();
	});

	// onMount(mount);

	$: if (sketch.toString() !== $_sketch.toString()) {
		_sketch.set(sketch);
	}
</script>

<div use:ref class="shadow-xl" />

<style>
	div {
		display: inline;
		margin: 0;
	}
</style>
