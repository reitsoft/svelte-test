<script>
	import Title from '../components/title.svelte';
	import { products } from '../stores/products';
	import ProductCard from '../components/productCard.svelte';

	let searchText = '';
	let filteredProducts = [];

  $:{
    if(searchText) {
      filteredProducts = $products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
    } else {
      filteredProducts = [...$products]
    }
  }
</script>

<Title text="Welcome to my Shop" />
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search products ..."
  bind:value={searchText}
/>
<div class="py-4 grid gap-8 md:grid-cols-2 grid-cols-1">
	{#each filteredProducts as product}
		<ProductCard {product} />
	{/each}
</div>
