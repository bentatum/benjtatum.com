<script lang="ts">
	import SpotlightCursor from '$lib/components/SpotlightCursor.svelte';
	import '$lib/styles/app.css';
	import '$lib/styles/ripple.css';
</script>

<main class="relative">
	<SpotlightCursor />
	<slot />
</main>
