<script lang="ts">
	import SpotlightCursor from '../components/SpotlightCursor.svelte';
	import '../styles/app.css';
	import '../styles/ripple.css';
</script>

<div class="relative">
	<SpotlightCursor />
	<main>
		<slot />
	</main>
</div>
