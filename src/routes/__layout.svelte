<script>
	import '../app.css';
	import Navigation from "../components/nav.svelte"
</script>

<svelte:head>
	<title>Svelte - Shop</title>
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
	<Navigation />
	<slot />
</div>
