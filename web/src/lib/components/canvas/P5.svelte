<script lang="ts">
	import type p5 from 'p5';
	import { onMount, createEventDispatcher } from 'svelte';
	// API properties
	export let project = undefined;
	export let target = undefined;
	export let sketch: (instance: p5) => void;
	// Event generation
	const event = createEventDispatcher();
	const dispatch = {
		ref() {
			event('ref', target);
		},
		instance() {
			event('instance', project);
		},
		p5() {
			event('');
		}
	};
	/**
	 * Creates a reference for the p5 instance to render within
	 * @param {HTMLElement} node
	 */
	function ref(node) {
		target = node;
		return {
			destroy() {
				target = undefined;
			}
		};
	}

	function augmentClasses(instance, classes) {
		classes.forEach(([key, value]) => (instance[key] = value));
		return instance;
	}

	onMount(async () => {
		const P5 = (await import('p5')).default;
		const entries = Object.entries(P5);
		const nativeClasses = entries.filter(
			([key, value]) => value instanceof Function && key[0] !== '_' && key !== 'default'
		);

		project = new P5((instance) => {
			instance = augmentClasses(instance, nativeClasses);
			return sketch(instance);
		}, target);

		dispatch.ref();
		dispatch.instance();
	});
</script>

<div use:ref class="shadow-xl" />

<style>
	div {
		display: inline;
		margin: 0;
	}
</style>
