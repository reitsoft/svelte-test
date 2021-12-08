<script>
	import '../app.css';
	import Navigation from "../components/nav.svelte"
</script>

<svelte:head>
	<title>Svelte - Shop</title>
</svelte:head>

<div class="p-12 max-w-4xl mx-auto flex flex-col items-center">
	<Navigation />
	<slot />
</div>
