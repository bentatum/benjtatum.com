<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import GithubIcon from '../components/icons/GithubIcon.svelte';
	import ResamplIcon from '../components/icons/ResamplIcon.svelte';
	import TwitterIcon from '../components/icons/TwitterIcon.svelte';
	import IconButton from '../components/IconButton.svelte';
	import FyeAFIcon from '../components/icons/FyeAFIcon.svelte';
</script>

<svelte:head>
	<title>bent.</title>
</svelte:head>

<div class="grid place-items-center h-screen w-full text-center">
	<h1 class="text-3xl font-display select-none">hey</h1>
</div>

<nav class="w-full text-center p-10 text-sm select-none">
	<IconButton href="https://twitter.com/benjtatum" target="_blank">
		<TwitterIcon />
	</IconButton>
	<IconButton href="https://github.com/bentatum" target="_blank">
		<GithubIcon />
	</IconButton>
	<IconButton href="https://fye.af" target="_blank">
		<FyeAFIcon />
	</IconButton>
	<IconButton href="https://resampl.com" target="_blank">
		<ResamplIcon />
	</IconButton>
</nav>
