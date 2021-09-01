<script lang="ts">
	import Layout from '../layout/Layout.svelte';
	import MyLinksNav from '../MyLinksNav.svelte';
</script>

<Layout>
	<div class="h-screen grid place-items-center z-10">
		<div class="text-center">
			<h1
				class="text-lg sm:text-2xl select-none font-black uppercase tracking-widest uppercase mb-7"
			>
				Ben Tatum
			</h1>
			<div class="text-base">
				<MyLinksNav />
			</div>
		</div>
	</div>
</Layout>
