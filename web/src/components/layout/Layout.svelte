<script lang="ts">
	import MyLinksNav from '../MyLinksNav.svelte';
</script>

<div class="bg-yellow-300 text-black dark:bg-black dark:text-yellow-300 min-h-screen relative">
	<div class="h-screen grid place-items-center z-10 relative">
		<div class="text-center">
			<h1 class="text-lg sm:text-2xl select-none font-black uppercase tracking-widest uppercase">
				"Website"
			</h1>
			<div class="text-base sm:text-xl">
				<MyLinksNav />
			</div>
		</div>
	</div>
</div>
