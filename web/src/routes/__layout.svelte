<script lang="ts">
	import SpotlightCursor from '../components/SpotlightCursor.svelte';
	import '../styles/app.css';
	import '../styles/ripple.css';
</script>

<main class="relative">
	<SpotlightCursor />
	<slot />
</main>
